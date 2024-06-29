/** @license React vundefined
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




if (process.env.NODE_ENV !== "production") {
  (function() {


var _assign = require('object-assign');

/***************** debugger packages/shared/ReactVersion.js == start *****************/
// TODO: this is special because it gets imported during build.
// 版本号是单独一个文件的，react dom或者react native这些有平台差异的
var ReactVersion = '17.0.0';
/***************** debugger packages/shared/ReactVersion.js == end *****************/

/***************** debugger packages/shared/ReactSymbols.js == start *****************/
// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.


// 用于标记react类型，我们使用过的几个标签，居然是常量

var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb; // `Fragment` 允许你将子列表分组，而无需向 DOM 添加额外节点。这是一种组织组件的方式，不会在生成的 HTML 结构中添加额外的元素，有助于保持 DOM 结构的简洁。- **为什么是常量**: 在源码中，`Fragment` 被赋予了一个常量值（如 `0xeacb`），这样 React 内部就可以用一个独特且一致的标识符来快速识别 Fragment 类型的元素。这个常量值对于开发者来说是透明的，因为在使用 JSX 时，你会使用 `<React.Fragment>` 或 `<>`（短语法）这样的标签形式，而这背后的转换由 Babel 或其他 JSX 转译器处理。
exports.StrictMode = 0xeacc; // 
exports.Profiler = 0xead2; // 常量 用于收集渲染阶段的性能信息。它允许你测量应用中一部分 UI 渲染的性能，例如渲染时间和“提交”阶段的花费时间。- **为什么是常量**: `Profiler` 也是通过一个常量值（如 `0xead2`）来标识的。这使得 React 能够识别出 `<Profiler>` 组件并进行特殊处理，比如搜集性能数据。在 JSX 中，你直接使用 `<Profiler>` 标签来声明性能分析器，而其背后的常量值则是在库的内部使用的。
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1; // Suspense 也是常量
exports.unstable_SuspenseList = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
exports.unstable_DebugTracingMode = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
exports.unstable_LegacyHidden = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  exports.unstable_SuspenseList = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  exports.unstable_DebugTracingMode = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  exports.unstable_LegacyHidden = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}
/***************** debugger packages/shared/ReactSymbols.js == end *****************/

/***************** debugger packages/react/src/ReactCurrentDispatcher.js == start *****************/
/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};
/***************** debugger packages/react/src/ReactCurrentDispatcher.js == end *****************/

/***************** debugger packages/react/src/ReactCurrentBatchConfig.js == start *****************/
/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};
/***************** debugger packages/react/src/ReactCurrentBatchConfig.js == end *****************/

/***************** debugger packages/react/src/ReactCurrentOwner.js == start *****************/
/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};
/***************** debugger packages/react/src/ReactCurrentOwner.js == end *****************/

/***************** debugger packages/react/src/IsSomeRendererActing.js == start *****************/
/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};
/***************** debugger packages/react/src/IsSomeRendererActing.js == end *****************/

/***************** debugger packages/react/src/ReactSharedInternals.js == start *****************/
// 用于在 React 的不同模块间共享内部变量，如当前的 Dispatcher。
// react 的不同包（如 `react` 和 `react-dom`）需要访问和使用同一套内部逻辑和状态。通过 `ReactSharedInternals`，这些包可以访问到 Dispatcher、BatchConfig 等内部变量，从而保持行为的一致性。例如，`react-dom` 在处理事件和调度更新时，需要使用到 `BatchConfig` 来合并多个 `setState` 调用。
var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher, // 用于存储当前渲染或更新环境下的 Hooks 方法。这包括了 `useState`, `useEffect`, `useContext` 等 Hooks。 **使用场景**: 在函数组件的执行过程中，Dispatcher 会根据组件的执行阶段（如渲染阶段或提交阶段）指向不同的实现，以确保 Hooks 能够正确地工作。
  ReactCurrentBatchConfig: ReactCurrentBatchConfig, // **作用**: `BatchConfig` 用于存储批处理的配置信息，如当前是否处于批更新模式。 **使用场景**: 在事件处理或异步任务中，React 可以将多个 `setState` 调用合并为一个批处理，以减少不必要的重渲染。`BatchConfig` 用于控制这一行为。
  ReactCurrentOwner: ReactCurrentOwner, // **Owner**: 好像fiber就是他 用于追踪当前正在渲染的组件的所有者，主要用于调试和错误处理中。 **使用场景**: `Owner` 在开发者工具中特别有用，它可以帮助开发者理解组件树的结构。
  IsSomeRendererActing: IsSomeRendererActing, // 而 `Act` 主要在单元测试中使用，以确保组件的行为与预期一致。
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};
/***************** debugger packages/react/src/ReactSharedInternals.js == end *****************/

/***************** debugger packages/shared/formatProdErrorMessage.js == start *****************/
// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
// 这里是用来格式化错误的
function formatProdErrorMessage(code) {
  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

  for (var i = 1; i < arguments.length; i++) {
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
}
/***************** debugger packages/shared/formatProdErrorMessage.js == end *****************/

/***************** debugger packages/react/src/ReactNoopUpdateQueue.js == start *****************/
/**
 * This is the abstract API for an update queue.
 */


// 这段代码定义了 `ReactNoopUpdateQueue`，一个 React 内部使用的更新队列的“空操作（noop）”版本。这个队列提供了一组方法，这些方法在其默认形态下不执行任何操作。主要用于组件在未被挂载或与具体渲染器（如 `react-dom`）脱离时的行为。下面详细介绍这个更新队列的作用以及开发者可能遇到的应用场景：

// ### 作用

// - **`isMounted`**: 检查一个组件是否已经挂载到 DOM 上。这个方法在 `ReactNoopUpdateQueue` 中总是返回 `false`，因为它是一个空操作的实现。实际的逻辑应由渲染器（如 `react-dom`）提供。
// - **`enqueueForceUpdate`**: 强制更新组件。这个方法在 `ReactNoopUpdateQueue` 中不做任何事情，但在真实的更新队列实现中，它会触发组件的强制更新，即使 `shouldComponentUpdate` 返回 `false`。
// - **`enqueueReplaceState`**: 替换组件的状态。这个方法在 `ReactNoopUpdateQueue` 中也是空操作。在实际的队列中，它允许直接设置组件的新状态，而不是合并。
// - **`enqueueSetState`**: 设置组件的状态的子集。与 `enqueueReplaceState` 类似，这在 `ReactNoopUpdateQueue` 中不执行任何操作，但在真实的更新队列中，它用于触发状态的更新和组件的重渲染。

// ### 应用场景

// - **开发阶段**: `ReactNoopUpdateQueue` 主要在开发阶段作为占位符使用，以防止在组件未完全挂载或初始化时调用状态更新方法导致的错误。
// - **单元测试**: 在单元测试中，当测试组件的行为而不依赖于特定的渲染器时（如不使用 `react-dom` 或 `react-native`），`ReactNoopUpdateQueue` 可以用来避免执行实际的状态更新逻辑。
// - **服务器端渲染（SSR）**: 在服务器端渲染场景中，由于组件不会真正挂载到 DOM 上，`ReactNoopUpdateQueue` 可能被用来替代实际的更新队列，尽管 SSR 通常有其专用的处理逻辑。

var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
  }
};
/***************** debugger packages/react/src/ReactNoopUpdateQueue.js == end *****************/

/***************** debugger packages/react/src/ReactBaseClasses.js == start *****************/
var emptyObject = {};
/**
 * Base class helpers for the updating state of a component.
 */

// `Component` 类是所有类组件的基类。它提供了设置组件状态、强制更新组件等基本功能。
// 这里就是react class 写法中的类的定义
function Component(props, context, updater) {
  this.props = props; // props 
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( formatProdErrorMessage(85));
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

// 用这个区分是不是 PureComponent ，
pureComponentPrototype.isPureReactComponent = true;
/***************** debugger packages/react/src/ReactBaseClasses.js == end *****************/

/***************** debugger packages/react/src/ReactCreateRef.js == start *****************/
// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  return refObject;
}
/***************** debugger packages/react/src/ReactCreateRef.js == end *****************/

/***************** debugger packages/react/src/ReactElement.js == start *****************/
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

// 判断ref属性是否存在
function hasValidRef(config) {

  return config.ref !== undefined;
}

// 判断key属性是否存在
function hasValidKey(config) {

  return config.key !== undefined;
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */

/**
 * 将属性弄成一个json返回
 * 这个json 是虚拟dom吗？
 */
/**
 * 创建一个新的 React 元素。
 * 注意，这个函数不应该使用 new 关键字来调用，因为它不遵循类的模式。
 * 要检查一个对象是否为 React 元素，请使用 $$typeof 字段与 Symbol.for('react.element') 比较。
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // 标记这个对象为一个 React 元素
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

/**
 * 
 * @param {*} type 元素类型
 * @param {*} config ref，key，各种props
 * @param {*} children 子元素
 * @returns 
 */
// 很遗憾这里不会在jsx转化的时候被前端调用，而是在babel转化的时候调用的
// 通常我们不直接使用 createElement 而是写jsx
function createElement(type, config, children) {
 // 
 //  console.log('此处调用了 createElement', type, config, children)

  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // 调试用的，某些babel插件会
    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.

  // 巧妙的判断后面有多少个子元素，秀
  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    // 创建长度适合的空数组
    var childArray = Array(childrenLength);

    // 赋值
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */

function createFactory(type) {
  var factory = createElement.bind(null, type); // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook: remove it

  factory.type = type;
  return factory;
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( formatProdErrorMessage(267, element));
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
/***************** debugger packages/react/src/ReactElement.js == end *****************/

/***************** debugger packages/react/src/ReactChildren.js == start *****************/
//  用于在生成子元素的 key 时，构造复合 key。
var SEPARATOR = '.'; // 用作不同层级之间的分隔符
var SUBSEPARATOR = ':'; // `SUBSEPARATOR` 用于同一层级内不同元素的分隔。
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

// 用于字符转译的
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


// 根据元素的位置和/或开发者提供的 key 来生成一个最终的 key。如果元素有显式设置的 key，则使用转义后的该 key；如果没有，则使用元素在集合中的索引。
function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( formatProdErrorMessage(31, childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString));
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( formatProdErrorMessage(143));
    }
  }

  return children;
}
/***************** debugger packages/react/src/ReactChildren.js == end *****************/

/***************** debugger packages/react/src/ReactContext.js == start *****************/
// calculateChangedBits 可以接受一个函数，当返回true的时候会触发重新渲染，用于性能优化
function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  {
    context.Consumer = context;
  }

  return context;
}
/***************** debugger packages/react/src/ReactContext.js == end *****************/

/***************** debugger packages/react/src/ReactLazy.js == start *****************/
var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;

    // 执行后的promise函数
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  return lazyType;
}
/***************** debugger packages/react/src/ReactLazy.js == end *****************/

/***************** debugger packages/react/src/ReactForwardRef.js == start *****************/
function forwardRef(render) {

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  return elementType;
}
/***************** debugger packages/react/src/ReactForwardRef.js == end *****************/

/***************** debugger packages/react/src/ReactMemo.js == start *****************/
function memo(type, compare) {

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  return elementType;
}
/***************** debugger packages/react/src/ReactMemo.js == end *****************/

/***************** debugger packages/react/src/ReactBlock.js == start *****************/

function lazyInitializer$1(payload) {
  return {
    $$typeof: REACT_BLOCK_TYPE,
    _data: payload.load.apply(null, payload.args),
    _render: payload.render
  };
}

function block(render, load) {

  if (load === undefined) {
    return function () {
      var blockComponent = {
        $$typeof: REACT_BLOCK_TYPE,
        _data: undefined,
        // $FlowFixMe: Data must be void in this scenario.
        _render: render
      }; // $FlowFixMe: Upstream BlockComponent to Flow as a valid Node.

      return blockComponent;
    };
  } // Trick to let Flow refine this.


  var loadFn = load;
  return function () {
    var args = arguments;
    var payload = {
      load: loadFn,
      args: args,
      render: render
    };
    var lazyType = {
      $$typeof: REACT_LAZY_TYPE,
      _payload: payload,
      _init: lazyInitializer$1
    }; // $FlowFixMe: Upstream BlockComponent to Flow as a valid Node.

    return lazyType;
  };
}
/***************** debugger packages/react/src/ReactBlock.js == end *****************/

/***************** debugger packages/react/src/ReactHooks.js == start *****************/

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( formatProdErrorMessage(321));
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useOpaqueIdentifier() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useOpaqueIdentifier();
}
function useMutableSource(source, getSnapshot, subscribe) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMutableSource(source, getSnapshot, subscribe);
}
/***************** debugger packages/react/src/ReactHooks.js == end *****************/

/***************** debugger packages/react/src/ReactMutableSource.js == start *****************/
function createMutableSource(source, getVersion) {
  var mutableSource = {
    _getVersion: getVersion,
    _source: source,
    _workInProgressVersionPrimary: null,
    _workInProgressVersionSecondary: null
  };

  return mutableSource;
}
/***************** debugger packages/react/src/ReactMutableSource.js == end *****************/

/***************** debugger packages/react/src/ReactStartTransition.js == start *****************/
function startTransition(scope) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = 1;

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;
  } 
}
/***************** debugger packages/react/src/ReactStartTransition.js == end *****************/

/***************** debugger packages/react/src/React.js == start *****************/

var createElement$1 =  createElement;
var cloneElement$1 =  cloneElement;
var createFactory$1 =  createFactory;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};
/***************** debugger packages/react/src/React.js == end *****************/

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1; // 这里是根据元素来创建
exports.createFactory = createFactory$1;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.unstable_block = block;
exports.unstable_createMutableSource = createMutableSource;
exports.unstable_startTransition = startTransition;
exports.unstable_useDeferredValue = useDeferredValue;
exports.unstable_useMutableSource = useMutableSource;
exports.unstable_useOpaqueIdentifier = useOpaqueIdentifier;
exports.unstable_useTransition = useTransition;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
