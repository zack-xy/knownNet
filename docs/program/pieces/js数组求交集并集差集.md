---
title: js数组求交集并集差集
author: Zack Zheng
date: 2022/11/09 09:51
categories:
 - 大海拾遗
tags:
 - JavaScript
---

表示最大最小数值
Number.MAX_VALUE
Number.MIN_VALUE

表示无穷大、无穷小
Infinity、-Infinity

--------------------------------------------------------------------------------
```
var a = [1,2,3,4,5]
var b = [2,4,6,8,10]
console.log("数组a：", a);
console.log("数组b：", b);
 
var sa = new Set(a);
var sb = new Set(b);
 
// 交集
let intersect = a.filter(x => sb.has(x));
 
// 差集
let minus = a.filter(x => !sb.has(x));
 
// 补集
let complement  = [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))];

 
// 并集
let unionSet = Array.from(new Set([...a, ...b]));
```
