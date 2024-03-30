# 我对 Schedule 的理解
## Schedule 是干什么的
Schedule 是react之中用来做任务调度的，其主要作用是尽可能高效的执行react中的任务，并且不会阻塞浏览器中的其他任务

## 关键API
必须是宏任务
- setTimeout
- requestAnimationFrame
- requestIdleCallback
- MessageChannel

但是 setTimeout 0 是有时间间隔的

微任务会导致一直无法释放js进程导致

## MessageChanel 
channel.port2.post

channel.port1.onMessage

## 任务切片
将任务切成固定长度(固定length来数组)的分别执行。
但是这会导致一个又可能某个组的列表执行时间过长

## 时间切片
每次执行前获取初始时间，判断执行时间是否超出了 5 毫秒，如果超出了 5 毫秒，则不继续执行下一个工作任务，结束本轮宏任务事件，主动让出控制权给浏览器绘制页面。
为什么是5呢？不知道，可能输入或者是其他任务有可能占用比较高。

```js
const yieldInterval = 5;
let deadline = 0;
const channel = new MessageChannel()
let port2 = channel.port2
channel.port1.onmessage = performWorkUntilDeadline

const performWorkUntilDeadline = () => {
  if (scheduledHostCallback) {
    let currentTime = new Date().getTime()

    deadline = currentTime + yieldInterval
    const hasMoreWork = scheduledHostCallback(currentTime)
    if (!hasMoreWork) {
      scheduledHostCallback = null
    } else {
      port.postMessage(null);
    }
  }
}

// 请求主机执行操作
function requestHostCallback(callback) {
  scheduledHostCallback = callback;
  port.postMessage(null);
}


let taskQueue = [];
let isHostCallbackSchedule = false;
// 暴露给用户添加任务的
function scheduleCallback(callback) {
  var newTask = {
    callback: callback,
  };
  taskQueue.push(newTask);
  if (!isHostCallbackScheduled) {
    isHostCallbackScheduled = true;
    requestHostCallback(flushWork);
  }
  return newTask;
}



```
问题来了  `scheduledHostCallback` 是啥 =》主机调度中的回调
`requestHostCallback`又是啥 =请求主机执行操作

`scheduleCallback` 暴露给用户调用的添加任务操作
requestHostCallback 似乎是暴露出去调用的触发循环的


```js
let currentTask = null;
function flushWork(initialTime) {
  return workLoop(initialTime);
}

function workLoop(initialTime) {
  currentTask = taskQueue[0];

  while (currentTask) {
    if (new Date().getTime() >= deadline) {
      // 每执行一个任务，都需要判断当前的performWorkUntilDeadline执行时间是否超过了截止时间
      break;
    }
    var callback = currentTask.callback;
    callback();

    taskQueue.shift();
    currentTask = taskQueue[0];
  }
  if (currentTask) {
    // 如果taskQueue中还有剩余工作，则返回true
    return true;
  } else {
    return false;
  }
}
```


```js
const btn = document.getElementById("btn");
const animate = document.getElementById("animation");
let startTime;
btn.onclick = () => {
  startTime = new Date().getTime();
  for (let i = 0; i < 3000; i++) {
    if (i === 2999) {
      scheduleCallback(() => {
        const start = new Date().getTime();
        while (new Date().getTime() - start < 2) {}
        const endTime = new Date().getTime();
        animate.innerHTML = endTime - startTime;
      });
    } else {
      scheduleCallback(() => {
        const start = new Date().getTime();
        while (new Date().getTime() - start < 2) {}
      });
    }
  }
};

```

