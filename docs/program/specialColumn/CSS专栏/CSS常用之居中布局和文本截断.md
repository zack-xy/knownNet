---
title: CSS常用之居中布局和文本截断和块截断
author: Zack Zheng
date: 2022/11/09 00:00
categories:
 - CSS专栏
tags:
 - CSS
---

css盒模型   
css水平垂直居中   
css三栏布局   
css文本截断    

<simple-img src="https://s11.ax1x.com/2024/02/24/pFU7sdf.png"></simple-img>


块容器内容显示指定行数，超过行数的显示......    

```css

display: -webkit-box /* 值必须为-webkit-box或者-webkit-inline-box */
-webkit-box-orient: vertical; /* 值必须为vertical */
-webkit-inline-clamp: 2 /*值为数字，表示显示几行*/
overflow: hidden; 

```
