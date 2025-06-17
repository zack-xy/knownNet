---
title: CSS布局之flex
author: Zack Zheng
date: 2022/11/09 00:00
categories:
 - CSS专栏
tags:
 - CSS
---

<simple-img src="https://s11.ax1x.com/2024/02/24/pFU7NJe.png"></simple-img>

#### Flex容器属性

<simple-img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/584b5a15ed2b45bba8615773ca4291cc~tplv-k3u1fbpfcp-zoom-1.image"></simple-img>

##### justify-content

<simple-img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea9308d6f3fb47a4ade43903e5e2fe11~tplv-k3u1fbpfcp-zoom-1.image"></simple-img>


##### align-item和align-content的区别是什么      

align-content是分配侧轴剩余空间，<b>只有当flex-wrap属性的值非`nowrap`才生效，也就是要换行</b>        
align-item是侧轴对齐方式（不必非得换行），如果是多行的话，每一行有自己的主轴和侧轴          

:::warning

+ Flex容器上，如果同时设置了`align-content`为<b>非`stretch`</b>和`align-item`的任意值，以`align-content`为主，`align-item`被忽略
+ Flex容器上，如果设置了`align-content`为`stretch`(默认值)和`align-item`的任意值，以`align-item`为主，`align-content`被忽略
+ Flex项目上的`align-self`只有`align-content`属性值为`stretch`时，`align-self`属性的值才有效
+ `align-items`和`align-self`可以同时使用

:::

##### 主轴对齐方式

侧轴有对齐方式，但是主轴没有相应的对齐方式属性，只有分配侧轴的空间`justify-content`        
想要设置主轴对齐方式，需要使用`margin`（设置在Flex项目上）

<simple-img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b097664d9f44f878037c2ed37d81496~tplv-k3u1fbpfcp-zoom-1.image"></simple-img>

<Suspense>
  <my-codes title="margin:auto对溢出的处理" repo="o-bricks" path="web_layout/flex/overflow.html" lazy/>
</Suspense>


#### Flex项目属性

<simple-img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d832f3e72844710b90bfb3f067cb0c7~tplv-k3u1fbpfcp-zoom-1.image"></simple-img>

##### flex的设置

+ `flex: auto`Flex项目被分配不同大小，较大的Flex项目获得更多空间        
+ `flex: 1`Flex项目（几乎）平均分配空间大小        
+ `flex: initial`Flex根据自身确定尺寸，不会扩展，但是会收缩适应Flex容器       
+ `flex: none`Flex根据自身确定尺寸，即不会扩展也不会收缩适应Flex容器         


##### 实现所有项目宽度相等

```css

.item {
  flex: 1;
  min-width: 0;
}

```
