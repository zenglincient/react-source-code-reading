## 首次调用render的时候，从render函数到创建fiber期间调用的关键函数有哪些？请给我调用路径

在 React 17 版本中，当首次调用 ReactDOM.render() 方法时，整个过程会涉及到一系列关键的函数调用。这些函数一起构成了创建和初始化 React Fiber 树的过程。以下是从 ReactDOM.render 到创建 Fiber 树的主要函数调用路径：

### 1. ReactDOM.render
这是 React 应用通常的入口点，用于请求将一个 React 元素渲染到指定的 DOM 容器中。

### 2. legacyRenderSubtreeIntoContainer
如果使用的是传统的 ReactDOM.render 方法，会调用这个函数。它负责检查是否已经存在根容器，如果没有，则创建一个新的。

### 3. legacyCreateRootFromDOMContainer
如果容器没有关联的 React 根，这个函数会被调用来创建一个新的根。它主要负责清除容器中的现有内容（如果没有启用 hydration）并创建一个新的根节点。

### 4. createLegacyRoot
这个函数是 legacyCreateRootFromDOMContainer 调用的，用于实际创建根节点。它创建一个 ReactDOMBlockingRoot 实例，这个实例管理着与之关联的 Fiber 根节点。

### 5. ReactDOMBlockingRoot
这是 createLegacyRoot 中调用的构造函数，用于创建和初始化 React 的 Fiber 根节点。这个根节点将作为接下来 React 元素的更新和调度的基础。

### 6. updateContainer
一旦根节点被创建，legacyRenderSubtreeIntoContainer 函数会调用 updateContainer 来实际挂载或更新传入的 React 元素到 Fiber 根节点。这是首次渲染的开始。

### 7. scheduleUpdateOnFiber
在 updateContainer 中，会调用此函数来计划对 Fiber 树的更新。这个函数负责标记 Fiber 树的哪些部分需要更新，并计划何时进行这些更新。

### 8. performSyncWorkOnRoot
如果是同步模式（在旧版本 React 中默认），则会调用此函数来执行实际的渲染工作。它处理 Fiber 树的遍历和组件的实际渲染。

这个调用路径展示了 React 如何从接收到一个渲染请求到开始处理更新的过程，涉及到多个关键的 API 和内部函数，它们共同工作来构建和维护 React 应用的状态。这个过程是高度优化的，使用了 React 的 Fiber 架构来异步或同步地处理更新，以及管理复杂的组件生命周期和状态变化。



## 是首次创建的时候显然是没有旧的节点的，react是怎么处理的

在 React 中，首次渲染时处理新组件的确是一个特殊情况，因为它涉及到从无到有地创建整个组件树的 Fiber 结构。在首次渲染时，由于不存在旧的 Fiber 节点来进行对比，React 的处理流程主要侧重于根据提供的 React 元素构建全新的 Fiber 节点。下面是 React 首次渲染时创建新 Fiber 节点的具体处理方式：

### 首次渲染的处理逻辑：
1. 初始化 Root Fiber：

当首次调用 ReactDOM.render(<App />, container) 时，如果 container 上没有现有的根节点，React 会创建一个新的根 Fiber 节点。这个根 Fiber 节点代表整个应用的顶级入口。
调用 reconcileChildren：

在首次渲染中，beginWork 会被调用来处理根 Fiber 节点。由于是首次渲染，beginWork 函数会调用 reconcileChildren 来处理根组件的子元素。
由于没有旧的 Fiber 节点可以对比，reconcileChildren 会基于根组件返回的 React 元素来创建新的 Fiber 节点。
2. 创建新的 Fiber 节点：

在 reconcileChildren 内部，会遍历根组件返回的元素（通常是 JSX）。对于每一个 React 元素，如果是首次渲染，React 将调用 createFiberFromElement 创建一个与该元素对应的新 Fiber 节点。
新创建的 Fiber 节点会初始化各种属性，如 stateNode、type、props 等，这些属性来自 React 元素及其类型。
递归子元素：

3. reconcileChildren 会递归地为每一个子元素重复上述过程，直到所有的组件都被转化为 Fiber 节点，从而构建出整个应用的 Fiber 树。
挂载到 DOM：

一旦 Fiber 树构建完成，React 会进入提交阶段（commit phase），在这个阶段，React 会根据 Fiber 树来实际构建或更新 DOM 节点。对于首次渲染，这涉及到在 DOM 中创建节点并插入它们。
#### 总结：
在首次渲染过程中，由于不存在旧的 Fiber 树，React 的主要任务是根据给定的 React 元素逐级构建出一个完整的新 Fiber 树。每个 React 元素都会被转换成一个新的 Fiber 节点，整个树结构在内存中构建完成后，再统一映射到 DOM 树上。这种机制使得 React 能够高效地处理首次渲染，并为后续的更新提供了结构基础。