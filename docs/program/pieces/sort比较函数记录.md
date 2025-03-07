---
title: sort比较函数记录
author: Zack Zheng
date: 2023/04/24 16:45
categories:
 - 大海拾遗
tags:
 - JavaScript
---


+ 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；（升序）
+ 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
+ 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。(降序)

#### sort底层实现：

1. 当n<10,采用插入排序
2. 当n>10,采用三路快速排序
3. 10<n<100,采用中位数作为哨兵元素
4. n>1000,每隔200～215个元素挑出一个元素放到新数组中，然后对它排序，找到中间的数，以此作为中位数 

