---
title: 对比SSG和SSR和CSR
author: Zack Zheng
date: 2025/06/18 11:07
categories:
 - 大海拾遗
tags:
 - 前端
---

#### SSG (Static Site Generation) 静态站点生成

在构建时生成预渲染的HTML文件。

::: info 为什么不在构建时生成完整的HTML文件？

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/SSG为什么预渲染html.png"></simple-img>

:::

适用场景及特点：内容稳定、SEO优先、极快加载、CDN友好

#### SSR（Server-Side Rendering）服务器端渲染

在每次请求时由服务器动态生成完整的HTML并返回给客户端

::: info SSR的过程

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/SSR过程1.png"></simple-img>
<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/SSR过程2.png"></simple-img>
<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/SSR过程3.png"></simple-img>

:::


::: info 页面切换的时候，SSR怎么做

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/同构SSR1.png"></simple-img>
<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/同构SSR2.png"></simple-img>
<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/同构SSR3.png"></simple-img>
<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/同构SSR4.png"></simple-img>

:::

适用场景及特点：首屏快，SEO友好、服务器压力大、动态数据页面


#### CSR

服务器仅返回基础HTML骨架和JavaScript文件，浏览器加载后通过JS动态请求数据并构建DOM结构    

SPA（单页应用）通常采用CSR（客户端渲染）模式实现     


适用场景及特点：首屏性能较低、SEO不友好、交互性强、用户操作响应快   
