---
title: js原型与原型链
author: Zack Zheng
date: 2022/11/09 00:00
categories:
 - JavaScript专栏
tags:
 - JavaScript
---

内容来自《你不知道的JavaScript》

JavaScript对象有一个[[prototype]]内置属性  
试图对象的属性时触发[[Get]]操作，首先检查本身是否有这个属性，有则使用之（这里不讨论Proxy）   
如果找不到，则需要使用[[prototype]]链，沿着链一直找，找不到就是undefined
尽头是`Object.prototype`    


-----

设置和屏蔽

如果我去设置foo属性`obj.foo = 'zack'`    
如果obj本身有这个属性，则重新修改这个值   
如果obj本身没有这个属性，但是原型链上有   
则分为3种情况：      

1.原型链上的foo属性没有被设为只读，则obj本身设置foo属性，它屏蔽原型链上的foo属性    
2.原型链上的foo属性为只读，没法改也不创建foo属性，严格模式报错   
3.原型链上的foo属性是一个setter，setter会调用，不创建foo属性，也不修改setter   

这里有坑有时候会产生隐式屏蔽



```js
const anotherObject = {
  a: 2
}

const myObject = Object.create(anotherObject)

anotherObject.a // 2
myObject.a // 2  这里是anotherObject的a

anotherObject.hasOwnProperty('a') // true
myObject.hasOwnProperty('a') // false

myObject.a++ // 隐式屏蔽，相当于myObject.a = myObject.a + 1，后一句取a因为没有myObject没有a，则会创建a

anotherObject.a // 2
myObject.a // 3

myObject.hasOwnProperty('a') // true
```

--------

```js
function Foo() {}
const fo = new Foo()
```

Foo有一个prototype属性，是一个对象，【默认情况下】这个对象上有一个不可枚举的constructor属性，指向Foo

代码：


```js
function People(name) {
  this.name = name
}

People.prototype.run = function () {
  console.log('people can run')
}

function Student(name, school) {
  People.call(this, name)
  this.school = school
}

Student.prototype = Object.create(People.prototype)
Student.prototype.constructor = Student

Student.prototype.study = function () {
  console.log(`${this.name} study in ${this.school}`)
}

const people = new People('zack')
people.run()
const std = new Student('zheng', 'Stanford')
std.run()
std.study()

// （构造）函数有prototype
// 对象（实例）有__proto__
// People.prototype是一个对象
People.prototype.__proto__ === Object.prototype // true
Student.prototype.__proto__ === People.prototype // true
Object.prototype.__proto__ === null // true
([]).__proto__ === Array.prototype // true
Array.prototype.__proto__ === Object.prototype // true
People.__proto__ === Function.prototype // true
People.prototype.constructor === People // true
People.prototype.constructor.__proto__ === Function.prototype // true
```
至此，链已形成

相关阅读

[前端_原型模式](../设计模式专栏/前端_原型模式.md)

