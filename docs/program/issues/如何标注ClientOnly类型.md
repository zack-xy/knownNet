---
title: 本站如何标注ClientOnly类型
lang: en-US
date: 2023/02/21 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- 问题
- 前端
- TypeScript
---

写这个[tag功能](https://github.com/zack-xy/knownNet/issues/353)时，应该要标注组件是ClientOnly的，ClientOnly是全局组件，但是我这里是tsx的（为了摆脱老是写vue模板组件）。结果就是ts不认识ClientOnly，所以需要自己标注一下类型，如下：

<Suspense>
  <my-codes repo="knownNet" path="docs/.vitepress/types/shim.d.ts" />
</Suspense>

