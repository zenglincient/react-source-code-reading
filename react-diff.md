## diff 过程

### Fiber的更新宏观上是什么样的，他是深度优先遍历吗，那为什么他的 reconcileChildFibers 函数diff的时候会区别迭代器类型和 （reconcileChildrenIterator）和单个元素（reconcileSingleElement）两种diff的方式
在 React 的 Fiber 架构中，尽管整个渲染和更新过程是通过深度优先遍历实现的，
React 为不同类型的子元素集合提供了不同的处理策略，
如 reconcileChildFibers 函数中区分处理迭代器类型（通过 reconcileChildrenIterator）和单个元素（通过 reconcileSingleElement）。这种区分主要基于几个理由：
1. 优化更新策略
不同类型的子元素集合（如数组、单个元素、字符串、迭代器等）具有不同的特性和更新需求。例如：

单个元素（使用 reconcileSingleElement）通常意味着没有兄弟节点的简单场景，处理起来相对直接，不需要额外的遍历或键（key）匹配。
迭代器类型（使用 reconcileChildrenIterator）涉及到更复杂的数据结构，如 Map 或 Set，这些结构可能不提供索引和稳定的顺序，而且可能含有大量元素，这要求 React 使用不同的策略来高效地遍历和匹配现有的 Fiber 节点。
2. 处理键（Keys）和索引
迭代器可能不提供稳定的键或直接的索引访问，这对于 React 的 diff 算法是一个挑战。React 使用 keys 来优化重排时元素的重新渲染：

当处理常规数组时（不通过迭代器），React 可以直接通过索引和 key 属性来优化对子元素的比较和重排。
对于迭代器，React 需要首先转换迭代器输出到一个中间表示（如数组或键映射），以便可以有效地进行比较和找到对应的旧 Fiber 节点。
3. 性能优化
不同的处理方法允许 React 针对特定场景进行性能优化。例如：

在处理单个元素时，省去了迭代和比较的开销，可以直接创建或更新一个节点。
在处理复杂的子元素集合时，特别是使用迭代器时，React 通过建立映射和批量处理操作来优化更新，尽可能地复用现有的 Fiber 节点。
4. 通用性与灵活性
通过区分处理不同类型的子元素输入，React 可以支持更广泛的用例和数据结构，同时保持核心算法的通用性和灵活性。这种方法使得开发者可以使用各种类型的数据来构建 UI，而无需担心性能问题。

总结
虽然 Fiber 的更新过程本身是深度优先遍历，React 在实际处理子元素时根据子元素的类型采用了不同的策略。这种设计使得 React 能够在不牺牲性能的前提下，处理各种复杂的场景，并优化整个应用的响应速度和渲染效率。

## 核心类 ChildReconciler
### 核心函数 reconcileChildFibers
![IMG_0197](https://github.com/zenglincient/react-source-code-reading/assets/18399043/0de375a2-4b3b-4ebb-804e-4c96cbee314a)

```js
区分fiber类型
if (isObject)  reconcileSingleElement
if (typeof newChild === 'string' || typeof newChild === 'number')   reconcileSingleTextNode
if (isArray(newChild))  reconcileChildrenArray
if (getIteratorFn(newChild))  reconcileChildrenIterator
```

#### 解读 reconcileSingleElement
初始化变量：

key：新 React 元素的键（如果有的话）。
child：当前正在比较的子 Fiber 节点，初始为 currentFirstChild。
遍历子节点：

使用循环遍历现有的子节点以寻找可以复用的节点。
如果找到具有相同键的节点，则进入更详细的比较。
详细比较：

根据不同的 tag（即 Fiber 类型），如 Fragment 或 Block，执行不同的逻辑：
Fragment：如果当前元素是 Fragment 类型且与之前的 Fiber 类型匹配，则删除余下兄弟节点，并复用此节点。
Block：如果是懒加载组件，解析其实际类型后进行匹配。
默认情况：如果元素类型与 Fiber 节点类型相同，则复用此节点，并更新引用。
删除不匹配的子节点：

如果当前节点的键与新元素的键不匹配，删除这个节点。
创建新的 Fiber 节点：

如果没有找到可以复用的节点，根据 element.type 的类型，创建新的 Fiber 节点。如果是 Fragment，创建 Fragment 类型的 Fiber；否则，创建普通的元素 Fiber。
设置返回链接：

新创建的或复用的 Fiber 节点的 return 属性设置为 returnFiber，确保新节点链接回其父节点。
返回处理结果：

返回新创建或复用的 Fiber 节点。
结果
这个函数的执行结果是对单个 React 元素进行了处理，要么通过创建新的 Fiber 节点，要么通过复用现有的 Fiber 节点，并正确设置了父子关系。这是 React 协调算法中的关键部分，它确保了 React 应用的 UI 更新可以高效且准确地反映数据变化。

#### 我有一个疑问，element是固定的吗？但是child似乎是一直变化的，他们是怎么对比的, 所以此处的比较是将整个childList 和某个element进行对比，找到可以复用的单个节点？



是的，您的理解是正确的。在 reconcileSingleElement 函数中，React 实际上是将整个 childList（通过 currentFirstChild 开始的链表）与单个传入的 element 进行比较，以寻找可以复用的节点。

这个过程涉及以下几个步骤：

遍历现有子节点：函数通过 while 循环遍历当前 Fiber 节点的所有子节点（即 childList），这些子节点由 currentFirstChild 开始，通过 sibling 属性连接成一个链表。

比较 key 和类型：

对于每个子节点（child），React 首先检查其 key 是否与新元素（element）的 key 相匹配。
如果 key 匹配，React 接下来比较两者的类型（即 React 元素类型与 Fiber 节点的 elementType）。
确定复用或删除：

如果找到 key 和类型都匹配的节点，React 认为这个节点可以被复用。React 将更新此节点的属性以匹配新元素的属性，并停止遍历。
如果 key 或类型不匹配，React 继续检查下一个兄弟节点，直到找到匹配的节点或遍历完所有子节点。
处理未找到复用节点的情况：

如果整个子节点列表被遍历完毕，没有找到可以复用的节点，React 将为新的 element 创建一个全新的 Fiber 节点。
新节点将被初始化，并设置正确的属性和状态，以便在渲染过程中正确地反映新的 React 元素。
这个过程的关键在于尽可能复用现有的 DOM 节点和相应的 Fiber 数据结构，从而优化性能，减少不必要的 DOM 操作和组件状态的重建。这种精细的协调机制是 React 高效更新 UI 的基础。


### 解读 reconcileChildrenIterator
著名的两次循环


函数 reconcileChildrenIterator 是 React Fiber 协调器的一部分，用于处理具有迭代器的新子元素。这个函数的主要作用是通过迭代器来逐一比较和协调新旧子节点，适用于当子节点以迭代器（例如，Map 或 Set）的形式出现时。这个过程涉及新旧节点的匹配、复用或创建新的 Fiber 节点，并适当地处理副作用。下面是对函数内部的逐行中文注释：
```js
function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
  // 这个函数与 reconcileChildrenArray 实现相同的功能，但使用迭代器来处理。
  var iteratorFn = getIteratorFn(newChildrenIterable);  // 获取迭代器函数

  if (!(typeof iteratorFn === 'function')) {
    throw Error( formatProdErrorMessage(150));  // 如果不是函数，抛出错误
  }

  var newChildren = iteratorFn.call(newChildrenIterable);  // 调用迭代器函数获取新的子元素集合

  if (!(newChildren != null)) {
    throw Error( formatProdErrorMessage(151));  // 如果没有成功获取新的子元素，抛出错误
  }

  var resultingFirstChild = null;  // 结果中的第一个子 Fiber 节点
  var previousNewFiber = null;  // 前一个新的 Fiber 节点
  var oldFiber = currentFirstChild;  // 当前的第一个旧 Fiber 节点
  var lastPlacedIndex = 0;  // 上一个放置的索引
  var newIdx = 0;  // 新节点的索引
  var nextOldFiber = null;  // 下一个旧 Fiber 节点
  var step = newChildren.next();  // 获取第一个元素

  for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
    if (oldFiber.index > newIdx) {
      nextOldFiber = oldFiber;
      oldFiber = null;  // 如果旧 Fiber 的索引大于当前索引，暂停处理这个旧 Fiber
    } else {
      nextOldFiber = oldFiber.sibling;  // 准备下一个旧 Fiber 节点
    }

    var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);  // 更新或创建新的 Fiber 节点

    if (newFiber === null) {
      if (oldFiber === null) {
        oldFiber = nextOldFiber;  // 如果没有新 Fiber 创建，且旧 Fiber 为空，恢复旧 Fiber
      }
      break;  // 跳出循环
    }

    if (shouldTrackSideEffects) {
      if (oldFiber && newFiber.alternate === null) {
        deleteChild(returnFiber, oldFiber);  // 删除未被复用的旧 Fiber 节点
      }
    }

    lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);  // 定位新 Fiber 节点

    if (previousNewFiber === null) {
      resultingFirstChild = newFiber;  // 记录结果中的第一个子节点
    } else {
      previousNewFiber.sibling = newFiber;  // 链接前一个新 Fiber 到当前新 Fiber
    }

    previousNewFiber = newFiber;  // 更新前一个新 Fiber 节点
    oldFiber = nextOldFiber;  // 更新旧 Fiber 到下一个待处理的旧 Fiber
  }

  if (step.done) {
    deleteRemainingChildren(returnFiber, oldFiber);  // 删除所有剩余的旧子节点
    return resultingFirstChild;  // 返回结果中的第一个子节点
  }

  if (oldFiber === null) {
    for (; !step.done; newIdx++, step = newChildren.next()) {
      var _newFiber3 = createChild(returnFiber, step.value, lanes);  // 创建新的子节点

      if (_newFiber3 === null) {
        continue;
      }

      lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);  // 定位新创建的子节点

      if (previousNewFiber === null) {
        resultingFirstChild = _newFiber3;
      } else {
        previousNewFiber.sibling = _newFiber3;
      }

      previousNewFiber = _newFiber3;
    }
    return resultingFirstChild;  // 返回结果中的第一个子节点
  }

  // 为所有旧子节点创建快速查找的映射表
  var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

  // 继续扫描并使用映射表恢复被删除的项目作为移动
  for (; !step.done; newIdx++, step = newChildren.next()) {
    var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);

    if (_newFiber4 !== null) {
      if (shouldTrackSideEffects && _newFiber4.alternate !== null) {
        existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
      }

      lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);

      if (previousNewFiber === null) {
        resultingFirstChild = _newFiber4;
      } else {
        previousNewFiber.sibling = _newFiber4;
      }

      previousNewFiber = _newFiber4;
    }
  }

  if (shouldTrackSideEffects) {
    // 将所有未使用的旧子节点添加到删除列表
    existingChildren.forEach(function (child) {
      deleteChild(returnFiber, child);
    });
  }

  return resultingFirstChild;  // 返回处理结果中的第一个子 Fiber
}

```
   
