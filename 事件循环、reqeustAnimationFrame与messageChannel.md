一、事件循环的核心阶段
浏览器事件循环的核心流程可分为以下关键阶段：

​1.执行宏任务​（如 setTimeout、DOM 事件回调等）；
​2.清空微任务队列​（如 Promise.then、queueMicrotask）；
3.​渲染阶段：
- 触发 resize、scroll 事件；
​- 执行 requestAnimationFrame 回调；
- 更新布局（Layout）和绘制（Paint）；
​- 空闲阶段​（执行 requestIdleCallback 回调）。

执行时间大致如下：
** 每个帧之间，可能会有多个宏任务 **
|--宏任务A--|--微任务A--|--rAF回调--|--渲染--|--空闲回调--|--宏任务B--|...

```js
// 测试跨帧场景
requestAnimationFrame(() => {
  console.log('rAF1');
  setTimeout(() => console.log('宏任务1'), 0); // 宏任务1 会在下一帧的宏任务阶段执行
});

requestAnimationFrame(() => {
  console.log('rAF2'); 
  setTimeout(() => console.log('宏任务2'), 0);
});
```
rAF1 → rAF2 → 宏任务1 → 宏任务2（若 rAF1 和 rAF2 在同一帧）或 rAF1 → 宏任务1 → rAF2 → 宏任务2（若跨帧）
