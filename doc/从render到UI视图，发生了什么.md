## 概述
本文要回答的问题
- react 从调用 render 到 完成视图的渲染，发生了什么？
- 期间的函数调用链是什么样的？
- 这些函数都是做什么？

希望此文能让我们更好的了解react的运行机制，对react有个系统的理解。

## 本文叙述目录
预备知识：
- jsx 的转化
- ReactElement 与 fiber 的区别

初始化阶段
- render 函数的作用
- updateContainer 还是 legacyRenderSubtreeIntoContainer
- scheduleUpdateOnFiber

协调阶段
- performSyncWorkOnRoot
- renderRootSync
- workLoopSync
- performUnitOfWork
- beginWork（updateFunctionComponent）
- completeWork

提交阶段
- commitRoot
- commitBeforeMutationEffects
- commitMutationEffects
- commitLayoutEffects
- commitWork

