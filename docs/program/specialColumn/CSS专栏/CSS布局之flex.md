---
title: CSS布局之flex
author: Zack Zheng
date: 2022/11/09 00:00
categories:
 - CSS专栏
tags:
 - CSS
---

#### Flex容器属性

<simple-img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/584b5a15ed2b45bba8615773ca4291cc~tplv-k3u1fbpfcp-zoom-1.image"></simple-img>

##### justify-content

<simple-img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea9308d6f3fb47a4ade43903e5e2fe11~tplv-k3u1fbpfcp-zoom-1.image"></simple-img>


##### align-item和align-content的区别是什么      

align-content是分配侧轴剩余空间，<b>只有当flex-wrap属性的值非`nowrap`才生效，只有1行也必须设置</b>        
align-item是侧轴对齐方式，针对单行的     
align-item也能用于多行，如果是多行的话，每一行有自己的主轴和侧轴(默认不设置高度，flex项目竖向会被自动拉长，设置高度的话，打个比方，总共2行，每一行的固定高度都比flex容器一半的高度还要小，那么每一行都会有剩余空间，那么就是每一行都有自己的主轴和侧轴)          

:::warning 特点

+ 1. flex项目没设高度
  那么`align-content`就没有意义了，因为会自动拉长撑满flex容器    
  如果设置`align-item`，那么flex就不会自动拉长了，此时flex项目的高度为flex内容的最大高度

+ 2. flex项目设置了高度
  `align-content`默认是`stretch`，如果`align-content`不是`stretch`，同时设置以`align-content`为主；    
  否则`align-content`是`stretch`，以`align-item`为主

+ 3. `align-item`和`align-self`可以同时用，`align-item`是flex容器属性，`align-self`是flex项目属性     

+ 4. `align-self`只有`align-content`是`stretch`才生效

:::

##### 主轴对齐方式

侧轴有对齐方式，但是主轴没有相应的对齐方式属性，只有分配主轴的剩余空间`justify-content`        
想要设置主轴对齐方式，需要使用`margin`（设置在Flex项目上）

<simple-img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b097664d9f44f878037c2ed37d81496~tplv-k3u1fbpfcp-zoom-1.image"></simple-img>


#### Flex项目属性

<simple-img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d832f3e72844710b90bfb3f067cb0c7~tplv-k3u1fbpfcp-zoom-1.image"></simple-img>


-----------------------------------------------------------------------------------

#### flex项目的缩放

flex属性是`flex-grow`、`flex-shrink`、`flex-basis`三个属性的简写属性   
可以指定1个值、2个值和3个值

+ `flex-basis`:用于指定flex项目在主轴方向的初始值（基本跟width相同）
+ `flex-grow`:非负数字（包括小数），<b>默认值为0</b>;0表示不扩展;1会扩展填满剩余空间;其他正数：按比例分配剩余空间
+ `flex-shrink`:非负数字（包括小数），<b>默认值为1</b>;0表示不收缩;1表示默认收缩比例; 大于1的值：收缩得更积极

##### 1个值

```css

/* 情况一：无单位的数值，作为flex-grow的值，flex-shrink: 1;flex-basis: 0%; */
.item {
  flex: 1;

  /* 等同于 */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;   
}

/* 情况二：有效的长度值，作为flex-basis的值 */
.item {
  flex: 30vw;

  /* 等同于 */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 30vw;
}

```

##### 2个值
其中1个值必须为无单位的数值，作为flex-grow的值    
另1个值必须为：1、无单位数值，作为flex-shrink的值；2、有效的长度值，作为flex-basis属性的值   

```css

.item {
  flex: 1 2;

  /* 等同于 */
  flex-grow: 1;
  flex-shrink: 2;
  flex-basis: 0%;
}

.item {
  flex: 2 30vw;

  /* 等同于 */
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 30vw;
}

.item {
  flex: 30vw 2;

  /* 等同于 */
  flex-grow: 2; 
  flex-shrink: 1;
  flex-basis: 30vw;
}

```
##### 3个值
1个无单位的数值，作为`flex-grow`属性的值     
1个无单位的数值，作为`flex-shrink`属性的值     
1个有效的长度值，作为`flex-basis`属性的值      

```css

.item {
  flex: 2 1 200px;

  /* 等同于 */
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 200px;
}

.item {
  fles: 30vw 2 1;

  /* 等同于 */
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 30vw;
}

```
##### 其他取值

```css auto值

.item {
  flex: auto;

  /* 等同于 */
  flex-grow: 1; /* Flex项目可以扩展到超过其flex-basis  */
  flex-shrink: 1; /* Flex项目可以收缩小于其flex-basis */
  flex-basis: auto; /* Flex项目为基本大小auto，即max-content */
}

```

```css 1值

// Flex项目（几乎）平均分配空间大小(如果需要实现宽度相等，还要设置 min-width: 0;

.item {
  flex: 1;

  /* 等同于 */
  flex-grow: 1; /* Flex项目可以扩展到超过其flex-basis  */
  flex-shrink: 1; /* Flex项目可以收缩小于其flex-basis */
  flex-basis: 0%; /* Flex 项目为基本大小 0 */
}

```

```css initial值
/* Flex根据自身宽高来确定尺寸，不会扩展，会收缩来适应Flex容器 */
.item {
  flex: initial;

  /* 等同于 */
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
}

```

```css none值
/* 刚性的，即不会收缩，也不会扩展来适应Flex容器 */

.item {
  flex: none;

  /* 等同于 */
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
}

```      

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57ef89547ad04bfd9896d97828ff0322~tplv-k3u1fbpfcp-zoom-1.image)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cebbaa0a1e1046a9bcb6b285159a7b2c~tplv-k3u1fbpfcp-zoom-1.image)

-----------------------------------------------------------------------------------

#### 文本溢出

文本节点容器（Flex项目）上设置：

```css
// 长单词断行
.long-word {
  overflow-wrap: break-word;
  min-width: 0;
}

// 文本截取，末尾添加 ...
.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// 多行文本截取，末尾添加 ... 
.line-clamp {
  --line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: var(--line-clamp);
  -webkit-box-orient: vertical;
}
```
