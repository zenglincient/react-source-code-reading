#### src文件夹作用

<img width="840" alt="image" src="https://github.com/zenglincient/react-source-code-reading/assets/18399043/74c7ae06-3f34-440f-af4e-a8a268ec1dbe">


reate-subscription: 提供了一种方式来创建可订阅的数据源，以便在 React 组件中使用，使组件能够响应数据源的变化。

dom-event-testing-library: 一个工具库，用于在测试中模拟 DOM 事件，便于开发者编写事件处理相关的测试代码。

eslint-plugin-react-hooks: 为 React Hooks 提供 ESLint 规则，帮助开发者遵守 Hooks 的使用规则，避免常见的错误。

jest-mock-scheduler: 与 Jest 协同使用的库，用于模拟调度器行为，帮助测试与调度器交互的代码。

jest-react: 提供了一套 Jest 测试工具，用于更方便地测试 React 组件。

react-art: 使用 React 的编程模型来绘制图形和动画，主要用于 Canvas、SVG 以及其他绘图技术的封装。

react-cache: （现已废弃）实验性的缓存库，用于新的数据获取方法。

react-client: React 18 中引入，与服务器组件相关的实验性功能。

react-debug-tools: 一套用于调试 React 应用的工具，可以帮助开发者理解和优化组件树。

react-devtools-core: React 开发者工具的核心部分，提供了与浏览器扩展或其他环境交互的基本功能。

react-devtools-extensions: 浏览器扩展版本的 React 开发者工具，用于在浏览器中直接调试 React 应用。

react-devtools-inline: 一种可以嵌入到应用内部的 React 开发者工具，允许在应用的 UI 中直接访问开发者工具。

react-devtools-scheduling-profiler: 用于分析 React 应用性能的调度分析工具，特别是与时间切片和并发模式相关的性能。

react-devtools-shared: 包含 React 开发者工具中共享的代码和资源。

react-devtools-shell: 用于开发和测试 React 开发者工具的沙盒环境。

react-devtools: 包含 React 开发者工具的用户界面部分，是开发者用于调试 React 应用的关键工具。

react-dom: 提供了将 React 组件渲染到 DOM 的能力，是 React 应用中最常用的渲染环境。

react-fetch: （现已废弃）实验性的数据获取库，后续被新的 Suspense for Data Fetching 替代。

react-interactions: 实验性的交互库，用于探索未来的事件处理和交互模式。

react-is: 提供了一系列的类型判断工具，用于检测对象是否为 React 元素、React 组件类型等。

react-native-renderer: 使 React 能够渲染到 React Native 平台，允许使用 React 编程模型来开发原生应用。

react-noop-renderer: 一个测试渲染器，用于测试 React 组件和行为而不实际渲染到 DOM 或原生平台。

react-reconciler: React 的协调算法的实现，负责高效地比较并更新渲染树的差异。

react-refresh: 支持 React Fast Refresh 的库，可以在开发过程中无需刷新页面即可更新组件。

react-server: 与 React 18 中引入的服务器端渲染相关的实验性功能。



### 需要关注哪些文件夹？
如果你的目的是深入理解 React 的原理，那么应该关注几个核心的部分和文件夹。这些部分包含了 React 的大部分重要概念和实现机制，如虚拟 DOM、组件生命周期、状态管理、事件处理等。下面是一些建议的阅读顺序和重点文件夹：

1. react-reconciler

这个文件夹包含了 React 的协调算法（Reconciler），它是 React 用于比较旧树与新树的差异，并确定实际 DOM 更新的机制。理解协调器是理解 React 更新机制的关键。
react-dom

2. react-dom 文件夹针对的是 Web 平台。它实现了 React 元素到实际 DOM 节点的渲染逻辑，包括事件处理、生命周期管理等。了解 react-dom 是理解 React 如何与浏览器交互的基础。
react

3.react 文件夹包含了 React 的核心 API，如 React.createElement, React.Component, React.useState 等。这些 API 是构建 React 应用的基础。

4. react-hooks

钩子（Hooks）是 React 16.8 引入的新特性，允许你在不编写 class 的情况下使用 state 以及其他的 React 特性。虽然在源码的顶层目录中可能不会直接看到一个名为 react-hooks 的文件夹，但是你可以在 react 和 react-dom 中找到与 Hooks 相关的实现。特别是在 react-dom 中关注于与 Hooks 生命周期相关的文件。
events

在 react-dom 文件夹下，会有与事件处理系统相关的实现。React 的事件处理系统是一个抽象层，它在 React 元素上模拟并处理 DOM 事件，允许 React 应用具有一致的跨浏览器事件处理逻辑。
scheduler

5. Scheduler 是 React 的调度器，用于优化性能，通过调整任务的优先级，使重要的更新可以优先处理。它在 React 16.x 版本中引入，对于理解 React 的异步更新策略非常重要。
shared

这个文件夹包含了 React 源码中多个部分共享的工具和函数。虽然它可能不直接涉及到 React 的核心原理，但了解这些共享工具对于理解其他部分的代码实现会有帮助。
开始阅读源码之前，建议先有一定的 React 使用经验，并且对其基本概念有深入的理解。此外，源码阅读可能会有一定的挑战性，因为涉及到的抽象概念较多，代码之间的依赖关系复杂。可以从阅读具体的功能实现开始，逐渐深入到底层的实现细节中。同时，利用社区资源，如博客文章、论坛讨论等，可以帮助你更好地理解源码中的复杂概念。





