---
title: 常用js代码片段及手写代码
author: Zack Zheng
date: 2022/11/09 00:00
categories:
 - JavaScript专栏
tags:
 - JavaScript
---

#### 常用代码片段

##### 禁止打印、截图、复制和粘贴

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/NoPrint.js" lang="js" lazy/>
</Suspense>

##### Date日期转字符串

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/dateFormat.js" lang="js" lazy/>
</Suspense>

##### 日期字符串转时间戳

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/dateStrToTimestamp.js" lang="js" lazy/>
</Suspense>

##### 时间戳转日期Date

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/timestampToDate.js" lang="js" lazy/>
</Suspense>

##### 全屏显示（某个DOM）

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/fullscreen.js" lang="js" lazy/>
</Suspense>

##### 数字增加千分符号

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/percentagePoint.js" lang="js" lazy/>
</Suspense>

##### 个位数高位补0

```js
// 个位数补两位数(字符串)
// 例：'1'-'9' => '01'-'09'
let num = '1'
num = ('00' + num).substr(num.length)
```

##### 范围内随机数

```js

function selectFrom(lowerValue, upperValue) {    
    let choices = upperValue - lowerValue + 1;   
    return Math.floor(Math.random() * choices + lowerValue); 
} 
let num = selectFrom(2,10); 
console.log(num);  // 2~10范围内的值，其中包含2和10 


// 随机数公式
// total: 总共的数字有几个
// lowest：最小的数字
let number = Math.floor(Math.random() * total + lowest)
// 例：[1-10],总共10个数字，最小1
number = Math.floor(Math.random() * 10 + 1)  // [1-10] 

```

##### 动态加载js和css

<Suspense>
  <my-codes title="代码演示" repo="o-bricks" path="jsFragment/jsDynamicLoad.js" lang="js" lazy/>
</Suspense>

-----------------------------------

#### 手写实现

##### 手写new

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/new.js" lang="js" lazy/>
</Suspense>

##### 手写apply、call、bind

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/bind/apply_call_bind.js" lang="js" lazy/>
</Suspense>

##### 手写浅拷贝

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/DeepClone/shallowClone.js" lang="js" lazy/>
</Suspense>

##### 手写深拷贝

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/DeepClone/other2-version.js" lang="js" lazy/>
</Suspense>

##### 手写Promise

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Promise/promise.js" lang="js" lazy/>
</Suspense>

##### 手写数组迭代器interator

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Array/interator.js" lang="js" lazy/>
</Suspense>

##### 手写实现JSON.stringify

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/jsonStringify.js" lang="js" lazy/>
</Suspense>

##### 手写数组扁平化flat

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Array/flat.js" lang="js" lazy/>
</Suspense>

##### 手写数组push方法

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Array/push.js" lang="js" lazy/>
</Suspense>

##### 手写数组pop方法

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Array/pop.js" lang="js" lazy/>
</Suspense>

##### 手写数组map方法

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Array/map.js" lang="js" lazy/>
</Suspense>

##### 手写数组reduce方法

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Array/reduce.js" lang="js" lazy/>
</Suspense>

##### 手写数组forEach方法

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Array/forEach.js" lang="js" lazy/>
</Suspense>

##### 手写数组filter方法

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Array/filter.js" lang="js" lazy/>
</Suspense>

##### 手写EventEmitter

<Suspense>
  <my-codes repo="o-bricks" path="jsFragment/implement/Event/eventEmitter.js" lang="js" lazy/>
</Suspense>
