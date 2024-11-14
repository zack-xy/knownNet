---
title: 在浏览器输入URL回车后都发生了什么
author: Zack Zheng
date: 2021/09/01 09:51
categories:
 - 大海拾遗
tags:
 - Chrome
---


[键入网址到网页显示，期间发生了什么](https://xiaolincoding.com/network/1_base/what_happen_url.html#%E5%AD%A4%E5%8D%95%E5%B0%8F%E5%BC%9F-http)

1. 第一次访问

2. 解析url

   DNS域名系统匹配真实ip

   拿到真实ip，TCP三次握手建立连接

   请求数据，渲染页面

   连接断开，四次挥手



#### Html是如何渲染的

<simple-img src="HTML如何渲染在浏览器.svg" />
