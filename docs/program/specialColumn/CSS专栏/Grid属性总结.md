---
title: Grid属性总结
author: Zack Zheng
date: 2025/06/18 09:21
categories:
 - CSS专栏
tags:
 - CSS
---


<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/Grid属性.png"></simple-img>


#### 什么是隐式行，什么是隐式列   

如上图，`grid-template-rows`和`grid-template-columns`分别是指定行高和列宽的，可以指定有几行和几列，如果网格项目被放在指定的这些行和列之外的话，浏览器会自动生成额外的行和列（隐式行、隐式列）来容纳这些项目。大小默认由内容决定。也可以通过`grid-auto-rows`和`grid-auto-columns`来设置。    

<!-- <my-xmind></my-xmind> -->
