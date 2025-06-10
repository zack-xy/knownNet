---
title: new的原理和call和bind和apply
author: Zack Zheng
date: 2022/11/09 00:00
categories:
 - JavaScript专栏
tags:
 - JavaScript
---

#### new原理

+ 1.创建一个新对象
+ 2.将构造函数的作用域赋给新对象(this指向新对象)
+ 3.执行构造函数中的代码（为这个新对象添加属性）
+ 4.返回新对象

```javascript
// 基本语法
function Person() {
  this.name = 'Jack'
}

var p = new Person()
console.log(p.name)
```

##### 手写new

<Suspense>
  <my-codes title="手写new演示代码" repo="o-bricks" path="jsFragment/implement/new.js" lang="js" lazy/>
</Suspense>

#### call & apply & bind原理介绍

call & apply & bind是挂在Function对象上的3个方法，调用这3个方法的必须是一个函数 

```javascript
// 基本语法
func.call(thisArg, param1, param2, ...)   // 参数列出来
func.apply(thisArg, [param1, param2, ...])   // 参数数组
func.bind(thisArg, param1, param2, ...)  // 不立即执行
```

几个使用场景

+ 判断数据类型

  ```javascript
  Object.prototype.toString.call(obj)
  ```

+ 类数组借用方法

   ```javascript
   var arrayLike = {
     0: 'java',
     1: 'script',
     length: 2
   }
   
   Array.prototype.push.call(arrayLike, 'jack', 'lily')
   console.log(typeof arrayLike)  // object
   console.log(arrayLike)  // {0: 'java', 1: 'script', 2: 'jack', 3: 'lily', length: 4}
   ```

+ 获取数组最大/最小值

  ```javascript
  let arr = [13,6,10,11,16]
  const max = Math.max.apply(Math, arr)
  const min = Math.min.apply(Math, arr)
  
  console.log(max)
  console.log(min )
  ```

+ [继承](https://zack-xy.github.io/knownNet/program/specialColumn/JavaScript%E4%B8%93%E6%A0%8F/JavaScript%E4%B8%AD%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BB%A7%E6%89%BF%E6%96%B9%E5%BC%8F.html)

##### 手写call & apply & bind

<Suspense>
  <my-codes title="手写call、apply、bind" repo="o-bricks" path="jsFragment/implement/bind/apply_call_bind.js" lang="js" lazy/>
</Suspense>

