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
