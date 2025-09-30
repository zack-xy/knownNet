---
title: useRef的特性
author: Zack Zheng
date: 2025/02/25 14:05
categories:
 - 何以编程
tags:
 - React
 - Remote Code
---

作用：需要处理DOM元素或需要在组件渲染之间保持持久性数据

<Suspense>
  <my-codes repo="o-bricks" path="demoCodes/React/react-demo/src/useRefDemo.jsx" lang="js" lazy />
</Suspense>


::: warning 注意
1. 组件在重新渲染的时候，useRef的值不会被重新初始化
2. 改变ref的current属性不会引起组件重新渲染，因为ref是一个普通的js对象
3. useRef的值不能作为useEffect等其他hooks的依赖项，因为它不是一个响应式状态
4. useRef不能直接获取子组件的实例，需要使用forwardRef
:::
