---
title: JavaScript中常见的几种继承方式
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - JavaScript专栏
tags:
 - JavaScript
 - 面试题
---

::: code-group

```js [类的声明]
/**
     * 类的声明
     */
function Animal() {
  this.name = 'name'
}
/*
    ES6的class的声明
    */
class Animal2 {
  constructor() {
    this.name = name
  }
}
```

```js [构造函数继承]
// 继承方式
// 1.借助构造函数实现继承
// 缺点：Parent1原型对象上的方法不能被child继承
function Parent1() {
  this.name = 'parent1'
}
function Child1() {
  Parent1.call(this)
  this.type = 'child1'
}

console.log(new Child1())
```

```js [原型链实现继承]
// 2. 借助原型链实现继承
// 缺点：如果父有个属性是引用类型，子修改了引用类型则所有子里的该引用都被修改
function Parent2() {
  this.name = 'parent2'
}
function Child2() {
  this.type = 'child2'
}
Child2.prototype = new Parent2()
console.log(new Child2())
```

```js [组合方式继承]
// 3. 组合方式继承
// 缺点：父级构造函数执行了2次
function Parent3() {
  this.name = 'parent3'
  this.play = [1, 2, 3]
}
function Child3() {
  Parent3.call(this)
  this.type = 'child3'
}
Child3.prototype = new Parent3()
const s3 = new Child3()
const s4 = new Child3()
s3.play.push(4)
console.log(s3.play, s4.play)
```

```js [组合方式继承优化1]
// 4.组合继承的优化1
// 缺点：无法区分子对象是Child的实例还是Parent的实例
function Parent4() {
  this.name = 'parent4'
  this.play = [1, 2, 3]
}
function Child4() {
  Parent4.call(this)
  this.type = 'child4'
}
Child4.prototype = Parent4.prototype
```

```js [组合方式继承优化2]
// 5.组合继承优化2(寄生组合式继承 extends的原理)
function Parent5() {
  this.name = 'parent5'
  this.play = [1, 2, 3]
}
function Child5() {
  Parent5.call(this)
  this.type = 'child5'
}
Child5.prototype = Object.create(Parent5.prototype)
Child5.prototype.constructor = Child5
```

:::

 
