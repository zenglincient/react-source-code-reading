# 代码层次结构
以下是 `react-dom.development.js` 源码的层次结构概览：

1. **许可证和源代码信息**：文件开头提供了React的版权信息以及源码许可证。

2. **环境检查**：检查是否在生产环境中运行，并根据环境进行不同的设置。

3. **模块引用**：引入了`react`、`scheduler`等模块，用于后续的DOM操作和任务调度。

4. **内部共享变量和方法定义**：
    - 定义了内部使用的共享变量，如`ReactSharedInternals`、`ReactFeatureFlags`等。
    - 定义了格式化生产错误信息的方法`formatProdErrorMessage`。

5. **核心功能实现**：
    - DOM属性操作：如`setValueForProperty`，用于设置DOM元素的属性。
    - 事件处理：定义了一系列与事件处理相关的方法，如`EventRegistry`、`getEventTarget`等。
    - 更新控制：如`batchedUpdates`、`discreteUpdates`等，管理React的更新机制。
    - 组件挂载和更新：处理不同类型组件的挂载和更新逻辑，例如`ReactDOMInput`、`ReactDOMTextarea`、`ReactDOMSelect`等。

6. **辅助工具和方法**：
    - CSS属性操作：`CSSPropertyOperations`，提供了与CSS属性相关的操作方法。
    - DOM操作：如`setInnerHTML`、`setTextContent`等，用于直接操作DOM。
    - 验证属性合法性：`assertValidProps`，用于检查组件的属性是否合法。

7. **特殊标签和属性处理**：
    - 处理void元素和自定义组件的逻辑，如`isCustomComponent`、`voidElementTags`等。

8. **事件系统**：
    - 定义了事件系统的标志和处理逻辑，例如`EventSystemFlags`、`ReactDOMUpdateBatching`等。

此概览提供了对`react-dom.development.js`源码结构的高级视图，每个部分都对应React DOM处理、更新和事件系统的特定方面。

## 想通过源码理解react的原理，我应该重点关注哪部分的代码？

理解React的原理涉及到多个方面，包括组件的渲染机制、状态管理、事件处理、生命周期管理、调度算法等。React的设计和实现都围绕着它的核心思想：声明式编程、组件化和单向数据流。为了更好地理解React的原理，以下是一些建议关注的代码部分：

### 组件渲染与更新：

ReactFiberReconciler：React使用Fiber架构来组织组件树。Fiber架构是React内部的一种机制，用于增强其对异步渲染的支持。ReactFiberReconciler模块负责协调组件的渲染和更新。
ReactFiberWorkLoop：该模块实现了React的工作循环，负责调度和执行组件的渲染更新任务。
### 状态管理：

Hooks（如useState, useEffect）：React的函数组件通过Hooks实现状态管理和副作用的处理。了解不同Hooks的实现可以帮助你理解状态是如何在组件中被管理和更新的。
事件处理：

SyntheticEvent系统：React实现了一套合成事件系统，用于在不同浏览器之间封装和统一事件处理行为。查看该系统的实现有助于理解React是如何处理DOM事件的。
调度算法：

Scheduler：React使用调度器来优化性能，它允许React将任务分为不同的优先级，并根据需要推迟或优先处理任务。理解调度器的工作原理有助于理解React是如何实现异步渲染和时间切片的。
Diff算法：

ReactChildFiber：React在更新组件时，需要对比新旧两个组件树（Virtual DOM），找出需要更新的部分。了解React的Diff算法有助于理解组件是如何更新的。
Context API：

ReactContext：Context API允许数据在组件树中跨层级传递，而不必一层层手动传递。理解Context的实现可以帮助你理解React是如何管理跨组件的数据流的。
理解这些核心部分的实现原理，将帮助你深入了解React的设计哲学和内部工作机制。建议结合具体的源码阅读，逐步深入。同时，官方文档、社区文章和源码注释也是理解React原理的重要资源。



## 调用render函数的时候会执行什么
### React 渲染流程核心函数顺序

在调用React的`render`函数后，以下是一系列核心函数的调用顺序以及它们在渲染过程中的角色：

1. **`render`函数**
   - **入口点**：开始渲染流程，通常通过`ReactDOM.render()`调用，接受React元素和容器DOM作为参数。

2. **`legacyRenderSubtreeIntoContainer`**
   - **容器处理**：判断是首次挂载还是更新，并为后续渲染准备容器。

3. **`updateContainer`**
   - **更新调度**：这个函数是连接React元素与Fiber节点的桥梁。它负责将元素安排到Fiber根节点上，并标记更新。

4. **`scheduleUpdateOnFiber`**
   - **优先级判断和更新调度**：根据Fiber节点和当前的执行优先级(lanes)，计划执行更新。

5. **`performSyncWorkOnRoot` 或 `performConcurrentWorkOnRoot`**
   - **同步或并发执行更新**：根据调度的优先级，选择同步或者并发方式来处理Fiber树的更新。

6. **`beginWork`**
   - **工作循环的开始**：遍历Fiber节点，为每个节点调用相应的`beginWork`处理逻辑，这可能会创建新的Fiber节点或者复用旧节点。

7. **`completeUnitOfWork`**
   - **完成工作单元**：完成单个Fiber节点的处理，并向上返回处理结果。

8. **`completeWork`**
   - **完成所有工作**：所有子节点处理完毕后，处理当前Fiber节点的副作用。

9. **`commitRoot`**
   - **提交根节点**：提交整个Fiber树的更改到DOM上，这包括执行副作用列表，如生命周期方法和refs的更新。

10. **`commitWork`**
    - **执行DOM更新**：将Fiber树的更改实际应用到DOM上，包括添加、删除、更新DOM节点。

11. **生命周期方法和Hooks**
    - **生命周期和Hooks调用**：如`componentDidMount`, `componentDidUpdate`, `useEffect`等，在适当的阶段被调用。

这个流程涵盖了从接受新的React元素到实际更新DOM的整个过程，体现了React的声明式渲染机制和Fiber架构的执行细节。每个步骤都有其在渲染过程中的特定职责，确保组件按预期方式更新和渲染。


### 解释 scheduleUpdateOnFiber函数
```js
function scheduleUpdateOnFiber(fiber, lane, eventTime) {
  // 日志记录，帮助跟踪函数何时被调用
  console.log(`run function [${arguments.callee.name}]`);

  // 检查是否存在嵌套更新的情况
  checkForNestedUpdates();

  // 从当前fiber开始向上查找到root节点，并标记更新的路径
  var root = markUpdateLaneFromFiberToRoot(fiber, lane);

  // 如果没有找到根节点，提前返回
  if (root === null) {
    return null;
  }

  // 标记根节点有待处理的更新
  markRootUpdated(root, lane, eventTime);

  // 如果当前工作的根节点与更新的根节点相同，处理并发更新逻辑
  if (root === workInProgressRoot) {
    workInProgressRootUpdatedLanes = mergeLanes(workInProgressRootUpdatedLanes, lane);

    if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
      markRootSuspended$1(root, workInProgressRootRenderLanes);
    }
  }

  // 获取当前的调度优先级
  var priorityLevel = getCurrentPriorityLevel();

  // 处理同步更新的逻辑
  if (lane === SyncLane) {
    if ((executionContext & LegacyUnbatchedContext) !== NoContext &&
        (executionContext & (RenderContext | CommitContext)) === NoContext) {
      schedulePendingInteractions(root, lane);
      performSyncWorkOnRoot(root);
    } else {
      ensureRootIsScheduled(root, eventTime);
      schedulePendingInteractions(root, lane);
      if (executionContext === NoContext) {
        resetRenderTimer();
        flushSyncCallbackQueue();
      }
    }
  } else {
    // 处理离散事件更新的逻辑
    if ((executionContext & DiscreteEventContext) !== NoContext &&
        (priorityLevel === UserBlockingPriority$2 || priorityLevel === ImmediatePriority$1)) {
      if (rootsWithPendingDiscreteUpdates === null) {
        rootsWithPendingDiscreteUpdates = new Set([root]);
      } else {
        rootsWithPendingDiscreteUpdates.add(root);
      }
    }
    ensureRootIsScheduled(root, eventTime);
    schedulePendingInteractions(root, lane);
  }

  // 更新最近修改的根节点引用
  mostRecentlyUpdatedRoot = root;
}

```
关键点解释：
- markUpdateLaneFromFiberToRoot: 这个函数负责找到从当前 Fiber 到根节点的路径，并为这条路径上的每个节点标记更新通道（lane）。
- markRootUpdated: 标记根节点有更新。
- checkForNestedUpdates: 检查嵌套更新，这是为了防止更新逻辑出现无限循环。
- ensureRootIsScheduled: 确保根节点被正确地调度。
- schedulePendingInteractions: 调度与当前更新相关的用户交互。
- performSyncWorkOnRoot: 执行同步工作在根节点上。
- resetRenderTimer 和 flushSyncCallbackQueue: 重置渲染计时器和清空同步回调队列，确保即时处理。
- rootsWithPendingDiscreteUpdates: 保存有待处理的离散更新的根节点集合。
这个函数是 React 内部调度逻辑的关键部分，处理从接收到更新请求到真正调度更新的全过程，确保更新按正确的优先级和顺序执行。

### 当 lane === SyncLane时，执行 performSyncWorkOnRoot(root); 进行更新，那 lane !== SyncLane时,执行什么函数进行更新？
#### 调度更新而非立即执行
对于非同步的更新（即 lane !== SyncLane），React 通常不会立即执行更新，而是将其加入到一个调度队列中。这使得 React 可以在不阻塞主线程的情况下，按照优先级和其他因素（如 CPU 空闲时间）来智能地处理更新：

ensureRootIsScheduled 调用之后，更新被加入调度队列，但具体的执行时机则由 React 的调度器（Scheduler）来决定。
React 的调度器会监视主线程的使用情况，并在适当的时机（如浏览器空闲时）执行这些更新。
#### 处理并发模式
在并发模式（Concurrent Mode）中，React 可以在多个更新之间切换，允许一些优先级较低的任务被中断，从而响应更高优先级的任务，如用户输入。这通过以下机制支持：

- 时间切片（Time Slicing）: React 会将更新任务切分成小块，每块任务在浏览器的一帧时间内完成一部分，然后根据需要中断或继续执行。
- 中断和恢复（Interruption & Resumption）: 在更新过程中，如果出现更高优先级的任务，当前正在执行的低优先级任务可以被中断，React 会保存当前的状态，以便之后可以从中断点恢复执行。
总结来说，当 lane !== SyncLane 时，React 使用一个更为灵活和高效的调度机制来处理更新，这使得 React 应用可以在保持响应性的同时，也能有效地执行后台任务。

### 我观察 scheduleUpdateOnFiber 函数，无论fiber传入的是什么，他都是找到根节点，再进行更新。这是否意味着，react所有的更新都是要从根节点开始？
是的，您的观察是正确的。在React的Fiber架构中，当一个更新被触发时，无论更新发生在组件树的哪一部分，React总是会从根节点开始进行更新的过程。这种设计使得React可以维护整个应用的一致性，并允许React利用Fiber架构的优势，执行高效的更新。

#### 更新从根节点开始的原因：
统一的入口：从根节点开始更新提供了一个清晰且统一的更新入口。这样做简化了更新逻辑，因为React只需从一个固定点开始处理更新，无需考虑更新开始的具体位置。

- 完整的更新周期：从根节点开始更新使得React可以执行一个完整的更新周期，包括调用生命周期方法和Hooks。这保证了React的更新生命周期钩子的行为一致性和预测性。

- 优先级和中断：React的Fiber架构支持任务的优先级设定和中断能力。通过从根节点开始，React可以更好地管理和优化任务的调度。高优先级的更新可以中断低优先级的更新，这种中断和恢复只有在整个树级别管理时才能高效执行。

- 并发模式（Concurrent Mode）：在并发模式下，从根节点开始更新允许React在渲染过程中准备多个版本的UI（称为Fiber树），这些树可以表示应用的不同状态。这种方式使得React可以在不影响用户体验的情况下，在背景中进行更新，只有当更新准备就绪时才将其展示给用户。

#### 实现细节：
- markUpdateLaneFromFiberToRoot 函数用于将更新向上冒泡至根节点。这个函数遍历Fiber节点的父节点直到到达根节点，将更新的信息（如更新的优先级或通道）标记到整个路径上的每个节点。

- 更新调度：在找到根节点后，ensureRootIsScheduled 和 scheduleUpdateOnFiber 等函数负责根据更新的优先级和当前的执行上下文安排和调度更新。

结论：
虽然所有更新都从根节点开始可能在某些情况下看起来效率不高（特别是当更新只影响组件树中很小的一部分时），但这种设计允许React的调度器（Scheduler）和Fiber架构最大化其性能和能力，通过合适的任务拆分和优先级调度优化整个应用的响应性和性能。这是React设计哲学中“可预测性和一致性”与“性能”之间的权衡。
