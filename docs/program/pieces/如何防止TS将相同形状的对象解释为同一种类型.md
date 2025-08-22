---
title: 如何防止TS将相同形状的对象解释为同一种类型
author: Zack Zheng
date: 2023/03/10 15:59
categories:
 - 大海拾遗
tags:
 - TypeScript
---


```ts
declare const NsType: unique symbol // 这一行

class Ns {
  readonly value: number
  [NsType]: void // 这一行
  constructor(value: number) {
    this.value = value
  }
}

interface UniqueInterface {
  [NsType]: never
}
```
