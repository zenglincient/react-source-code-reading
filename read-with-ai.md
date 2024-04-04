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

## 请概括一下
这段代码是 React 开发版本（`react.development.js`）的一部分，主要包括了 React 的核心功能实现。它不仅包含了构建 UI 组件的基础方法，如 `createElement` 和 `Component`，还包括了用于优化性能和处理副作用的 Hooks API。下面是对这段代码中关键部分的详细分析和注释：

### 版权和环境检查
- 文件顶部包含了版权信息和一个环境检查。如果不是在生产环境下，接下来的代码才会执行。

### 核心变量和函数
- **`_assign`**: 用于对象合并的函数，来源于 `object-assign` 库，用于模拟 ES6 的 `Object.assign` 功能。
- **`ReactVersion`**: 指定了 React 的版本号，这对于调试和兼容性检查很有用。

### 符号定义（`ReactSymbols.js`）
- 定义了 React 使用的一些特殊符号（如 `REACT_ELEMENT_TYPE`），这些符号用于内部类型检查和标记。

### 当前环境变量（Dispatcher, BatchConfig, Owner, Act）
- 这些变量用于在 React 的渲染和更新过程中存储当前的状态和配置。

### 共享内部变量（`ReactSharedInternals`）
- 用于在 React 的不同模块间共享内部变量，如当前的 Dispatcher。

### 错误信息格式化（`formatProdErrorMessage`）
- 一个工具函数，用于生产环境中生成指向 React 文档的错误链接。

### 更新队列（`ReactNoopUpdateQueue`）
- 一个抽象的更新队列实现，它的方法在开发模式下不做任何事情，实际的逻辑由渲染器（如 ReactDOM）提供。

### 基础类定义（`Component`, `PureComponent`）
- 定义了 React 组件的基类和纯组件类，包括了 `setState` 和 `forceUpdate` 等核心方法。

### 创建引用（`createRef`）
- 提供了创建 React 引用（ref）的方法，用于访问 DOM 节点或组件实例。

### React 元素（`ReactElement`）
- 提供了创建和操作 React 元素的方法，如 `createElement`、`cloneElement`。

### 处理子元素（`ReactChildren`）
- 提供了处理 `props.children` 的实用函数，如 `map`, `forEach`, `count`。

### Context API（`createContext`）
- 实现了 Context API，允许数据在组件树间传递而不必一层层手动传递。

### 懒加载和转发引用（`ReactLazy`, `ReactForwardRef`）
- 提供了懒加载组件和转发引用（ref）的能力。

### Memo 和 Block 类型（`ReactMemo`, `ReactBlock`）
- 支持通过 `memo` 优化组件渲染性能，`block` 是一个实验性功能。

### Hooks API
- 实现了 Hooks API，包括状态钩子（`useState`, `useReducer`）、效果钩子（`useEffect`, `useLayoutEffect`）、引用钩子（`useRef`）等。

### 其他实验性和不稳定的 API
- 包括 `useTransition`, `useDeferredValue`, `useMutableSource` 等，这些 API 用于探索 React 未来可能的功能。

这段代码提供了 React 开发版本的核心功能，是学习 React 内部机制的宝贵资源。通过阅读和理解这些代码，你可以更深入地了解 React 是如何工作的，以及它的设计理念。


## 请为结合代码我解释符号定义（`ReactSymbols.js`）的作用

在 `react.development.js` 源码中，符号定义（`ReactSymbols.js`）扮演了非常重要的角色。这些定义使用了 JavaScript 的 `Symbol` 数据类型或备选方案（对于不支持 `Symbol` 的环境），来创建一组独特的值。这些值被用作标识符，以帮助 React 内部识别和处理不同类型的对象，如 React 元素、Portals、Fragment 等。下面是符号定义部分的详细解释：

### 作用和重要性
- **唯一性**: `Symbol` 提供了一种方式来生成全局唯一的标识符。这对于内部标记特定的对象或行为非常有用，因为它减少了冲突的可能性。
- **内部类型检查**: React 使用这些符号来区分不同的内部对象类型（例如，区别 React 元素和普通对象）。这有助于库在运行时更有效地管理和渲染这些对象。
- **标记**: 符号定义用于标记 React 的特殊对象，如 Context Providers、Consumers、Forward Refs 等。这使得 React 的各个部分可以识别这些特殊的对象并据此做出正确的处理。

### 核心符号
- **`REACT_ELEMENT_TYPE`**: 用于标识一个对象是 React 元素。
- **`REACT_PORTAL_TYPE`**: 用于标识一个对象是 Portal，Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的方式。
- **`REACT_FRAGMENT_TYPE`**: 用于标识一个对象是 Fragment，Fragment 允许将子列表分组，而无需向 DOM 添加额外节点。
- **`REACT_STRICT_MODE_TYPE`**: 用于标识严格模式的组件。严格模式可以检测应用中的潜在问题。
- **`REACT_PROFILER_TYPE`**: 用于标识 Profiler API 的组件，它用于收集渲染时间的性能信息。
- **`REACT_PROVIDER_TYPE`, `REACT_CONTEXT_TYPE`**: 用于 Context API 的 Provider 和 Consumer 组件。
- **`REACT_FORWARD_REF_TYPE`**: 用于标识转发引用的组件。
- **`REACT_SUSPENSE_TYPE`**: 用于标识 Suspense 组件，它允许组件“等待”某些异步操作完成。

### 兼容性和后备方案
对于不支持 `Symbol` 的环境，`ReactSymbols.js` 使用数字作为后备方案。这确保了 React 的核心功能能够在较旧的 JavaScript 环境中运行。

通过这些符号的使用，React 能够有效地管理和识别内部对象及其特殊行为，这是库高效运行的关键因素之一。

## 问题，Fragment Profiler 居然是常量
- exports.Fragment = 0xeacb;
- exports.StrictMode = 0xeacc;
- exports.Profiler = 0xead2;
- 这些作用是什么？为什么 Fragment 是一个常量？我在使用的时候并不是长隆，而是一个标签

回答：在 React 源码中，特定的功能和组件类型被赋予了独特的符号或数值标识符。这些包括 `Fragment`、`StrictMode` 和 `Profiler`，它们在 `ReactSymbols.js` 文件中被定义为常量。这些常量在 React 的内部逻辑中用作标识，以便库能够识别和特别处理这些类型的组件。下面解释了它们的作用以及为什么在使用时它们看起来像是标签。

### `Fragment`
- **作用**: `Fragment` 允许你将子列表分组，而无需向 DOM 添加额外节点。这是一种组织组件的方式，不会在生成的 HTML 结构中添加额外的元素，有助于保持 DOM 结构的简洁。
- **为什么是常量**: 在源码中，`Fragment` 被赋予了一个常量值（如 `0xeacb`），这样 React 内部就可以用一个独特且一致的标识符来快速识别 Fragment 类型的元素。这个常量值对于开发者来说是透明的，因为在使用 JSX 时，你会使用 `<React.Fragment>` 或 `<>`（短语法）这样的标签形式，而这背后的转换由 Babel 或其他 JSX 转译器处理。

### `StrictMode`
- **作用**: `StrictMode` 是一个用于检测应用中潜在问题的工具。它会为其内部的所有组件触发额外的检查和警告，比如检测不安全的生命周期方法、过时的 API 调用等。
- **为什么是常量**: 与 `Fragment` 类似，`StrictMode` 在内部通过一个常量值（如 `0xeacc`）标识。开发者在使用时通过 `<React.StrictMode>` 包裹组件，而这种 JSX 标签在编译时被转换为对应的 React 元素，其中使用了这个常量值作为标识。

### `Profiler`
- **作用**: `Profiler` 用于收集渲染阶段的性能信息。它允许你测量应用中一部分 UI 渲染的性能，例如渲染时间和“提交”阶段的花费时间。
- **为什么是常量**: `Profiler` 也是通过一个常量值（如 `0xead2`）来标识的。这使得 React 能够识别出 `<Profiler>` 组件并进行特殊处理，比如搜集性能数据。在 JSX 中，你直接使用 `<Profiler>` 标签来声明性能分析器，而其背后的常量值则是在库的内部使用的。

总的来说，这些特性在开发者使用时看似是标签，但在 React 的内部实现中，它们通过特定的常量值进行识别和处理。这种设计使得 React 能够高效地管理这些特殊类型的元素，并为它们提供特定的行为和处理逻辑。




## 当前环境变量（Dispatcher, BatchConfig, Owner, Act） 共享内部变量（ReactSharedInternals）
在 React 源码中，当前环境变量和共享内部变量扮演了至关重要的角色，它们确保了 React 的不同部分能够高效且一致地协作。以下是对这些变量的作用和使用场景的详细解释：

### 当前环境变量

#### Dispatcher
- **作用**: Dispatcher 用于存储当前渲染或更新环境下的 Hooks 方法。这包括了 `useState`, `useEffect`, `useContext` 等 Hooks。
- **使用场景**: 在函数组件的执行过程中，Dispatcher 会根据组件的执行阶段（如渲染阶段或提交阶段）指向不同的实现，以确保 Hooks 能够正确地工作。

#### BatchConfig
- **作用**: `BatchConfig` 用于存储批处理的配置信息，如当前是否处于批更新模式。
- **使用场景**: 在事件处理或异步任务中，React 可以将多个 `setState` 调用合并为一个批处理，以减少不必要的重渲染。`BatchConfig` 用于控制这一行为。

#### Owner 和 Act
- **Owner**: 用于追踪当前正在渲染的组件的所有者，主要用于调试和错误处理中。
- **Act**: `Act` 用于测试，它帮助确保在测试中对组件的更新有正确的预期。
- **使用场景**: `Owner` 在开发者工具中特别有用，它可以帮助开发者理解组件树的结构。而 `Act` 主要在单元测试中使用，以确保组件的行为与预期一致。

### 共享内部变量（ReactSharedInternals）

- **作用**: `ReactSharedInternals` 是一个对象，它包含了 React 的内部变量，这些变量需要在 React 的不同模块和包之间共享。最重要的共享变量是 `ReactCurrentDispatcher` 和其他当前环境变量。
- **使用场景**: React 的不同包（如 `react` 和 `react-dom`）需要访问和使用同一套内部逻辑和状态。通过 `ReactSharedInternals`，这些包可以访问到 Dispatcher、BatchConfig 等内部变量，从而保持行为的一致性。例如，`react-dom` 在处理事件和调度更新时，需要使用到 `BatchConfig` 来合并多个 `setState` 调用。

总结来说，当前环境变量和共享内部变量为 React 提供了一种机制，以维护和管理跨不同组件和模块的内部状态和配置。这些机制确保了 React 应用的性能和一致性，是 React 内部实现的关键部分。

## ReactNoopUpdateQueue 是什么
这段代码定义了 `ReactNoopUpdateQueue`，一个 React 内部使用的更新队列的“空操作（noop）”版本。这个队列提供了一组方法，这些方法在其默认形态下不执行任何操作。主要用于组件在未被挂载或与具体渲染器（如 `react-dom`）脱离时的行为。下面详细介绍这个更新队列的作用以及开发者可能遇到的应用场景：

### 作用

- **`isMounted`**: 检查一个组件是否已经挂载到 DOM 上。这个方法在 `ReactNoopUpdateQueue` 中总是返回 `false`，因为它是一个空操作的实现。实际的逻辑应由渲染器（如 `react-dom`）提供。
- **`enqueueForceUpdate`**: 强制更新组件。这个方法在 `ReactNoopUpdateQueue` 中不做任何事情，但在真实的更新队列实现中，它会触发组件的强制更新，即使 `shouldComponentUpdate` 返回 `false`。
- **`enqueueReplaceState`**: 替换组件的状态。这个方法在 `ReactNoopUpdateQueue` 中也是空操作。在实际的队列中，它允许直接设置组件的新状态，而不是合并。
- **`enqueueSetState`**: 设置组件的状态的子集。与 `enqueueReplaceState` 类似，这在 `ReactNoopUpdateQueue` 中不执行任何操作，但在真实的更新队列中，它用于触发状态的更新和组件的重渲染。

### 应用场景

- **开发阶段**: `ReactNoopUpdateQueue` 主要在开发阶段作为占位符使用，以防止在组件未完全挂载或初始化时调用状态更新方法导致的错误。
- **单元测试**: 在单元测试中，当测试组件的行为而不依赖于特定的渲染器时（如不使用 `react-dom` 或 `react-native`），`ReactNoopUpdateQueue` 可以用来避免执行实际的状态更新逻辑。
- **服务器端渲染（SSR）**: 在服务器端渲染场景中，由于组件不会真正挂载到 DOM 上，`ReactNoopUpdateQueue` 可能被用来替代实际的更新队列，尽管 SSR 通常有其专用的处理逻辑。

总结来说，`ReactNoopUpdateQueue` 在 React 的架构中起到了一个重要的角色，它作为一个默认的、空操作的更新队列实现，确保了在没有具体渲染器提供实际逻辑时，组件和库的其他部分仍然能够正常协同工作。


## ReactBaseClasses 段代码
`ReactBaseClasses.js` 文件定义了 React 组件的两个基础类：`Component` 和 `PureComponent`。这些类提供了组件的核心功能，如状态管理、生命周期处理等。以下是对这些类及其方法的详细解释和应用场景：

### `Component`

#### 定义
- `Component` 类是所有类组件的基类。它提供了设置组件状态、强制更新组件等基本功能。

#### 属性
- **`this.props`**: 组件接收的属性。
- **`this.context`**: 如果使用了旧版的 Context API，则通过它可以访问上下文。
- **`this.refs`**: 存储对 DOM 节点或子组件的引用。
- **`this.updater`**: 一个内部对象，用于排队更新组件的状态。默认情况下，它使用 `ReactNoopUpdateQueue`，但在组件挂载到具体渲染器（如 `react-dom`）时，会被注入一个真实的更新队列。

#### 方法
- **`setState(partialState, callback)`**: 用于更新组件的状态。它接受一个对象或一个返回对象的函数作为新的部分状态，以及一个可选的回调函数，该函数在更新完成后执行。
- **`forceUpdate(callback)`**: 强制组件重新渲染，跳过 `shouldComponentUpdate`。这可以用于在知道深层数据变化但未通过 `setState` 更新时强制渲染。

### `PureComponent`

#### 定义
- `PureComponent` 与 `Component` 类似，但它通过浅比较 `props` 和 `state` 来自动实现了 `shouldComponentUpdate`，有助于优化性能。

#### 应用场景
- **`Component` 使用场景**:
  - 当你需要定义一个状态ful组件时，你可以通过继承 `Component` 类并使用其生命周期方法和 `setState` 来管理状态。
  - 如果组件需要通过引用直接访问 DOM 元素或子组件，可以使用 `this.refs`。
  - 当组件的某部分状态在外部变化且无法触发重新渲染时，可以使用 `forceUpdate` 来强制渲染。
  
- **`PureComponent` 使用场景**:
  - 当组件的渲染输出仅依赖于 `props` 和 `state` 且不需要深层比较时，使用 `PureComponent` 可以减少不必要的渲染，提高性能。
  - `PureComponent` 适用于简单的组件或组件树的叶节点，其中对性能要求较高且 `props` 和 `state` 结构较为简单。

总结来说，`ReactBaseClasses.js` 提供了构建 React 类组件的基础。通过继承 `Component` 或 `PureComponent`，开发者可以根据具体需求选择合适的基类来创建组件，管理状态，并通过生命周期方法控制组件的渲染行为。

## creatRef 代码出乎意料的简单
```js
function createRef() {
  var refObject = {
    current: null
  };

  return refObject;
}
```
在 React 中，当你使用 `ref` 属性并将其设置为通过 `React.createRef()` 创建的 `ref` 对象时，React 会自动将对应的 DOM 元素或组件实例赋值给这个 `ref` 对象的 `current` 属性。这个过程主要发生在组件的挂载（mounting）和更新（updating）阶段。以下是该过程的概述和工作原理：

### 工作原理

1. **创建 Ref**: 通过调用 `React.createRef()`，你创建了一个包含 `current` 属性且初始值为 `null` 的对象。

    ```jsx
    this.myInput = React.createRef();
    ```

2. **附加 Ref**: 在 JSX 中，你将这个 `ref` 对象通过 `ref` 属性附加到某个元素上。React 支持将 `ref` 附加到 DOM 元素或类组件实例上。

    ```jsx
    <input type="text" ref={this.myInput} />
    ```

3. **赋值过程**: 在组件的挂载或更新阶段，React 会处理 JSX 并识别出含有 `ref` 属性的元素。React 接着将对应的 DOM 元素或组件实例赋值给 `ref` 对象的 `current` 属性。

    - 如果 `ref` 被附加到了 DOM 元素上，`current` 属性将指向这个 DOM 元素。
    - 如果 `ref` 被附加到了类组件上，`current` 属性将指向这个组件的实例。

4. **访问 Ref**: 一旦 `ref` 的 `current` 属性被赋值，你就可以在组件的任何生命周期方法（如 `componentDidMount` 或 `componentDidUpdate`）中访问这个属性，以操作 DOM 元素或组件实例。

    ```jsx
    componentDidMount() {
        this.myInput.current.focus();
    }
    ```

### 实现细节

- React 内部通过特殊处理 `ref` 属性来实现这个功能。当渲染过程中遇到 `ref` 属性，React 会在适当的时机（即 DOM 元素或组件实例已经准备好时）将其赋值给 `current`。
- 对于函数组件，由于它们没有实例，不能直接使用 `createRef()` 赋予 `ref`。但你可以使用 `useRef` Hook 或回调形式的 `ref` 来达到相似的效果。

### 结论

通过将 `ref` 对象赋予元素的 `ref` 属性，React 能够自动地把对应的 DOM 元素或类组件实例赋值给 `ref` 对象的 `current` 属性。这个机制使得直接操作 DOM 元素或访问组件实例变得既简单又安全。

# ReactElement.js  部分

## 概述这部分代码

`ReactElement.js` 源码文件中定义了 React 元素的创建和处理逻辑。React 元素是 React 应用中最基础的构建块，表示 UI 的各个部分。以下是对这个文件中关键部分的详细解释：

### React 元素的创建
- **`ReactElement`** 函数是用来创建一个新的 React 元素的工厂方法。它接收元素的类型（如 `div`、`span` 或任何自定义的组件）、`key`、`ref`、`props` 等属性，并返回一个 React 元素对象。

### `createElement` 方法
- **`createElement`** 是创建 React 元素的主要方法。它被开发者在编写 JSX 时广泛使用，JSX 代码在编译过程中会被转换成对 `createElement` 方法的调用。
- 它接收一个元素类型、一个配置对象（包括 `key`、`ref` 和其他属性）、以及任意数量的子元素。该方法处理这些参数，创建并返回一个新的 React 元素。

### `createFactory` 方法
- **`createFactory`** 是一个辅助方法，用于创建一个返回特定类型 React 元素的工厂函数。这在函数式编程模式中有时会很有用，但在现代 React 开发中很少使用。

### `cloneElement` 方法
- **`cloneElement`** 方法用于克隆并返回一个新的 React 元素，它基于传入的元素（`element`），并允许传入新的配置对象（`config`）和子元素（`children`）来覆盖原有的属性和子元素。

### `isValidElement` 方法
- **`isValidElement`** 方法用于检查一个对象是否是 React 元素。它通过检查对象的 `$$typeof` 属性是否等于 `REACT_ELEMENT_TYPE` 来确定。

### 关键属性
- **`$$typeof`**: 用于唯一标识一个对象是 React 元素。
- **`type`**: 元素的类型，可以是字符串（对于 DOM 元素），也可以是函数或类（对于组件）。
- **`key`**: 用于在列表中唯一标识元素，帮助 React 进行高效的更新。
- **`ref`**: 用于获取元素的引用。
- **`props`**: 包含元素的所有属性和子元素的对象。

### 使用场景
- 开发者在编写 JSX 时，实际上是在使用 `createElement` 方法。例如，`<div>` 在 JSX 中的写法在编译后会变成 `React.createElement('div')`。
- 当需要基于现有元素创建新元素，但又想修改一些属性或添加新的子元素时，可以使用 `cloneElement` 方法。
- 通过 `isValidElement` 方法，可以验证某个对象是否是有效的 React 元素，这在一些高阶组件或工具函数中很有用。

总的来说，`ReactElement.js` 文件中定义的方法和逻辑是 React 库构建和处理 UI 的基础。通过这些方法，React 能够管理虚拟 DOM，从而高效地更新浏览器中的实际 DOM。

## CreateElement 与 reactElement的关系
### `ReactElement`

`ReactElement` 是一个工厂函数，它负责生成一个描述 React 组件或 DOM 节点的轻量级对象——即 React 元素。这个对象包含了组件类型（`type`）、属性（`props`）、键（`key`）、引用（`ref`）等关键信息，这些信息将被 React 用来构建和管理虚拟 DOM。

```javascript
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: ref,
    props: props,
    _owner: owner
  };
  return element;
};
```

## createElement
createElement 是 React 公开的 API，它提供了一种更为方便、易用的方式来创建 ReactElement。开发者在编写 JSX 时实际上是在使用 createElement 方法。JSX 语法 <div /> 在被 Babel 等编译器处理后，会被转换成 React.createElement('div') 的形式。
```js
function createElement(type, config, children) {
  // 处理 config 和 children，提取 props
  // 最终调用 ReactElement 函数
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
```
`createElement` 函数在调用 `ReactElement` 生成 React 元素之前执行了一系列重要的操作来处理和准备元素的属性（props）、类型（type）、键（key）、引用（ref）等信息。以下是这些操作的详细解释：

### 1. 提取并处理 `key` 和 `ref`

`createElement` 首先检查配置对象（config）中是否存在 `key` 和 `ref` 属性。这两个属性在 React 中有特殊的用途：

- **`key`**: 帮助 React 识别列表中哪些元素改变了（比如被添加或删除）。通过给元素分配一个稳定的标识，React 能够重新渲染列表时更高效地比较差异。
- **`ref`**: 提供了一种方式来访问 React 元素（DOM 节点或组件实例）的引用。

如果配置对象中存在 `key` 和 `ref`，`createElement` 会将它们提取出来，并在之后的操作中将它们传递给 `ReactElement` 函数。

### 2. 处理 `self` 和 `source`

这两个属性主要用于开发过程中的调试：

- **`self`**: 指向当前的组件实例。这对于使用 `React.createElement` 调用时检测 `this` 是否与期望的实例相符很有用。
- **`source`**: 包含有关元素创建位置的信息，如文件名和行号。这有助于在调试时定位元素。

如果配置对象中存在这些属性，`createElement` 也会提取它们。

### 3. 提取并合并剩余的属性到 `props`

除了 `key`、`ref`、`self` 和 `source`，配置对象中的其他属性都被视为元素的 `props`。`createElement` 遍历配置对象，将这些属性合并到一个新的 `props` 对象中。这个过程中会跳过保留的属性名称。

### 4. 处理子元素

`createElement` 的参数不仅包括类型和配置对象，还可以接收任意数量的子元素作为后续参数。`createElement` 会检查这些子元素的数量：

- 如果只有一个子元素，直接将其赋值给 `props.children`。
- 如果有多个子元素，将它们放入一个数组中，然后赋值给 `props.children`。

这确保了 `props.children` 始终以一种一致的方式被处理。

### 5. 应用默认属性

如果元素类型指定了 `defaultProps`，`createElement` 会将这些默认属性合并到 `props` 中。对于任何未在配置对象中指定的属性，如果存在默认值，则会使用默认值。

### 6. 调用 `ReactElement`

完成上述所有预处理步骤后，`createElement` 会使用收集到的 `type`、`key`、`ref`、`self`、`source`、`owner`（当前 React 组件的所有者）和准备好的 `props` 调用 `ReactElement` 函数，创建并返回一个新的 React 元素。

### 结论

`createElement` 函数通过执行这些操作，确保了元素的创建过程既灵活又规范。它处理各种边界情况和特殊属性，使得开发者在使用 JSX 或直接调用 `createElement` 时能够以一种直观且错误少发生的方式来声明 UI。

## 其中。self 和 source 的作用 是什么
** React.createElement 函数其实是在babel转化的时候使用的，当前端写jsx的时候，其执行其实在babel转化阶段，而不是浏览器执行阶段 **
回答： 调试的时候用的。
如果转化的babel插件支持的话，才会出现 __self, this给调试的时候使用。
```jsx
const element = React.createElement("div", { className: "hello" }, "Hello, world!");

```
```json
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", {
      "development": true,
      "useBuiltIns": true
    }]
  ]
}
```
