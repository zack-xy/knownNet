---
title: useRecuder和startTransition、useTransition、useDeferredValue、传送门
author: Zack Zheng
date: 2025/02/27 11:04
categories:
 - 何以编程
tags:
 - React
---

#### useReducer

useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/useReducer是什么.png" lazy />

`const [state, dispatch] = useReducer(reducer, initialArg, init);`
1. reducer是一个处理函数，用于更新状态，接收两个参数：当前状态和一个动作对象，返回一个新的状态。
2. initialArg是state的初始值
3. init是一个可选的函数，用于初始化修改state（修改state，传入的参数是初始化的state即initialArg），如果编写了init函数，默认使用init函数的返回值，否则使用initialArg

<Suspense>
  <my-codes title="useReducer使用示例代码" repo="o-bricks" path="demoCodes/React/react-demo/src/useReducer.tsx" lazy />
</Suspense>

------------------------

#### [useSyncExternalStore](https://zh-hans.react.dev/reference/react/useSyncExternalStore)

useSyncExternalStore = React 官方提供的“把外部数据源订阅+快照”封装成 Hook，使它表现得像 React 内部状态一样。

`const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)`

+ subscribe: 一个函数，接收一个callback参数(当store发生改变时应该调用提供的callback),返回一个函数用于取消订阅
+ getSnapshot: 一个函数，返回组件需要的 store 中的数据快照
+ getServerSnapshot: 可选，一个函数，返回 store 中数据的初始快照。用于服务端渲染


<Suspense>
  <my-codes title="自定义hook，store来自localStorage" repo="o-bricks" path="demoCodes/React/react-demo/src/useSyncExternalStore1.ts" lazy />
</Suspense>


<Suspense>
  <my-codes title="自定义hook，store来自window.location.href" repo="o-bricks" path="demoCodes/React/react-demo/src/useSyncExternalStore2.ts" lazy />
</Suspense>

------------------------

##### startTransition、useTransition
辅助使用startTransition   
useTransition会得到一个表示过渡任务的等待状态，和一个启动该过渡任务的函数

`const [isPending, startTransition] = useTransition()`

<Suspense>
  <my-codes title="useTransition使用示例" repo="o-bricks" path="demoCodes/React/react-demo/src/useTransition.tsx" lazy />
</Suspense>



------------------------

##### useDeferredValue

功能和useTransition类似，都是为了性能优化使用的

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/useTransition和useDeferredValue的区别.png" lazy />

------------------------

#### 传送门  
createPortal

#### 异步组件

React.lazy与React.Suspense

```jsx
import React, { Suspense } from 'react'
import { useState } from 'react'
const Welcome = React.lazy(() => import('./components/Welcome'))
const Welcome2 = React.lazy(() => import('./components/Welcome2')) 
export default function App() {
  const [ show, setShow ] = useState(true)
  const handleClick = () => {
    setShow(false)
  }

  return (
    <div>
      <h2>hello lazy</h2>
      <button onClick={handleClick}>点击</button>
      <Suspense fallback={<div>loading...</div>}>
        {show ? <Welcome /> : <Welcome2 />}
      </Suspense>
    </div>
  )
}
 
```
