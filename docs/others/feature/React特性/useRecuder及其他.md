---
title: useRecuder和startTransition、useTransition、useDeferredValue
author: Zack Zheng
date: 2025/02/27 11:04
categories:
 - 何以编程
tags:
 - React18
---

#### useReducer

useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法

#### startTransition

利用startTransition这个方法来实现不紧急的任务操作,这会告诉 React 它们可以被中断执行。这样可以把紧急的任务先更新，不紧急的任务后更新。 

##### useTransition
辅助使用startTransition   
useTransition会得到一个表示过渡任务的等待状态，和一个启动该过渡任务的函数

##### useDeferredValue

startTransition的简化写法

