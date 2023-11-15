---
title: this全面解析
author: Zack Zheng
date: 2022/11/09 00:00
categories:
 - JavaScript专栏
tags:
 - JavaScript
---

内容来自《你不知道的JavaScript》   

### 绑定规则（4种）

#### 默认绑定

不带任何修饰的函数引用进行引用，无法应用其他规则，则就是默认绑定    

非严格模式下，this指向全局对象    
严格模式下，this指向undefined


```js
function foo() {
  conosle.log(this.a)
}

const a = 2

foo() // 2
```

#### 隐式绑定

调用是否有上下文对象，有则this指向这个对象    
引用链中的最后一层影响调用位置

```js
function foo() {
  conosle.log(this.a)
}

const obj = {
  a: 2,
  foo
}

obj.foo() // 2
```


```js
function foo() {
  conosle.log(this.a)
}

const obj2 = {
  a: 42,
  foo
}

const obj1 = {
  a: 2,
  obj2
}

obj1.obj2.foo() // 42
```

#### 隐式丢失

##### 情况一
bar引用的是foo函数本身

```js
function foo() {
  conosle.log(this.a)
}

const obj = {
  a: 2,
  foo
}

const bar = obj.foo

const a = 'oops, global'

bar() // oops, global
```

##### 情况二

这种情况与 `setTimeout(fn, delay)`中的fn类似

```js
function foo() {
  conosle.log(this.a)
}

function doFoo(fn) {
  // fn引用的是foo
  fn() // 调用位置
}

const obj = {
  a: 2,
  foo
}

const a = 'oops, global'

doFoo(obj.foo) // oops, global
```

#### 显式绑定（bind、call、apply）
#### new绑定

### 如何判断this

1. 函数是否在new中调用，是，则this绑定新创建的对象   
`var bar = new Foo()`
2. 函数是否call、apply、bind绑定调用，是，则this绑定指定对象        
(如果指定的对象是null或undefiend，则跳到4)     
传入null也许会导致一些奇怪的问题，建议使用`Object.create(null)`   
`var bar = foo.call(obj2)`   
3. 函数是否在某个上下文中调用，是，则this绑定那个上下文对象  
`var bar = obj1.foo()`   
4. 如果都不是，默认绑定，严格模式undefined、非严格模式全局对象   
`var bar = foo()`


#### 其他一些特例情况

1.
```js
function foo() {
  conosle.log(this.a)
}

const a = 2
const o = { a: 3, foo }
const p = { a: 4 }

o.foo(); // 3
(p.foo = o.foo)() // 2  因为赋值语句返回的是foo，相当于foo（）
```

2.箭头函数根据外层作用域来决定this




