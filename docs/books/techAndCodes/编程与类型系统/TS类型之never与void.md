---
title: TS类型之never与void
author: Zack Zheng
date: 2023/03/08 21:50
categories:
 - 编程与类型系统
tags:
 - TypeScript
 - 计算机
---

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/TS类型之never与void.svg" />


::: code-group

```ts [自定义空类型]
// 如果两个类型具有相似的结构，TS会认为它们是兼容的
// 注释1: TS中用来确保具有相同形状的其他对象不会被解释为这个类型的一种方式

declare const EmptyType: unique symbol // 注释1

class Empty {
  [EmptyType]: void // 注释1
  private constructor() {} // 私有构造函数确保其他代码不能实例化这个类型
}

// 这个函数使用了【自定义空类型Empty】
function raise(message: string): Empty {
  console.error(`Error "${message}" raised at ${new Date()}`)
  throw new Error(message)
}
```

```ts [自定义单元类型]
// unique symbol属性确保相似形状的类型不会被解释为Unit
declare const UnitType: unique symbol

class Unit {
  [UnitType]: void
  // Unit类型的静态只读属性是唯一能够创建的Unit实例
  static readonly value: Unit = new Unit()
  // 私有构造函数确保其他代码不能实例化这个类型
  private constructor() {}
}

// 这个函数等效于一个返回void的函数
// 因为它总是返回相同的值
function greet(): Unit {
  console.log('Hello World!')
  return Unit.value
}
```

:::


