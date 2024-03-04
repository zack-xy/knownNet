---
title: JavaScript面试题
author: Zack Zheng
date: 1999/01/01 00:00
categories:
 - 面试题
tags:
 - JavaScript
---

### 以下代码输出什么

```javascript
({}+{}).length
([]+[]).length
(function(){}).length
```

{}.toString => "[object Object]" 所以第一个是30

[].toSting => "" 所以第二个是0  ( [1,2,3].toString() => "1,2,3" )

函数的长度是形参的个数，所以是0

扩展(function(){})+{} => 'function(){}[object Object]'


--------------


#### 模块化

##### CommonJS   

服务端解决方案，加载速度快（模块文件一般存在本地硬盘） 
Commonjs规定，每一个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性是对外的接口(module.exports)，加载某个模块，就是加载这个exports属性     

+ 每一个文件是一个模块，有自己的作用域。在文件内定义的变量、函数等都是私有的，对其他文件不可见   
+ 运行时加载，只能在运行时确定一些东西   
+ 同步加载，只有加载完成才能执行后序操作   
+ 导出时都是值拷贝，即使导出的值变了，导入的值也不会变，如果要更新导入的值，需要重新导入    
+ 模块在首次执行后会缓存，再次加载只返回缓存结果，若想再次执行，可清除缓存    
+ 模块加载的顺序是代码出现的顺序   

基本语法：  
暴露模块：`module.exports = value或exports.xxx = value`   
引入模块：`require(xxx)`     


因为nodejs主要用于服务器编程，模块文件一般已经存在在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式 。如果是浏览器环境，要从服务器加载模块，使用commonJS需要等到所有模块都下载完并运行后才能使用，阻塞后面代码的运行。所以浏览器需要采用非同步的方式。    

 
 ##### AMD    
 
 会编译成require/exports来执行(RequireJS)    
 
 使用异步方式加载模块，模块的加载不影响后面代码的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数
 
 定义暴露模块   
 
 ```
 // 定义没有依赖的模块
 
 define(function () {
     return 模块
 })
 
 // 定义有依赖的模块
 define(['module1', 'module2'], function(m1, m2)) {
     return 模块
 }
 ```
 
 引用模块   
 
 ```
 require(['module1', 'module2'], function(m1, m2) {
     // 使用m1,m2
 })
 
 ```
 
 ##### CMD
 
 专门用于浏览器端，异步加载模块，使用模块时才会加载执行，整合了CommonJS和AMD的特点    
 
 定义暴露模块   
 
 ```
 // 定义没有依赖的模块
 define(function(require, exports, module) {
     exports.xxx = value
     module.exports = value
 })
 
 // 定义有依赖的模块
 define(function(require, exports, module) {
     // 引入依赖的模块 - 同步
     var module2 = require('./module2')
     
     // 引入依赖模块 - 异步
     require.async('./module3', function(m3) {
     })
     
     // 暴露模块
     exports.xxx = value
 })
 ```
 
 引入使用模块   
 
 ```
 
 define(function (require) {
     var m1 = require('./module1')
     var m2 = require('./module2')
     
     m1.show()
     m2.show()
     
 })
 
 ```
 
 ##### ES6
 使用import和export形式导入和导出模块，  
 异步导入   
 导入和导出的值都指向一个内存地址，导入值会随导出值变化  
 会编译成require/exports执行。   
 编译阶段，import会被提到头部，首先执行  
 允许动态加载模块import()函数   
 ```
 import('/modules/myModule.mjs').then((module) => {
     // 模块已经导入
 })
 
 ```
 
 ##### 对比
 
 ES6输出值的引用，CommonJS输出值的拷贝   
 ES6模块编译时输出接口，CommonJS运行时加载   
 ES6异步加载模块，CommonJS同步加载模块  
 
 


