---
title: CSS都有哪些选择器
author: Zack Zheng
date: 2022/11/09 00:00
categories:
 - CSS专栏
tags:
 - CSS
---


# CSS选择器
## 1.基本选择器   
### 1.1 通配选择器（*）  
### 1.2 元素选择器  
### 1.3 id选择器  
### 1.4 类选择器  
### 1.5 群组选择器 （selector1,selectorN......）   

## 2. 层次选择器   
### 2.1 后代选择器(E F) 【F包含在E内】     
### 2.2 子选择器(E > F) 【F是E的子元素】     
### 2.3 相邻兄弟选择器(E + F)  【F紧邻E之后】    
### 2.4 通用选择器(E ~ F) 【E之后所有的F】 

## 3. 伪类选择器（写法：` E: pseudo-class {property: value}` E为HTML元素，pseudo-class是伪类选择器名称）  
### 3.1 动态伪类选择器       
#### 3.1.1 链接(锚点)伪类    
#### 3.1.2 用户行为伪类 
| 选择器    | 类型           | 描述                    |
| --------- | -------------- | ----------------------- |
| E:link    | 链接伪类选择器 | E为超链接，且未被访问过 |
| E:visited | 链接伪类选择器 | E为超链接，已被访问过   |
| E:active  | 用户行为伪类   | E元素被激活             |
| E:hover   | 用户行为伪类   | 鼠标停留在E元素上       |
| E:focus   | 用户行为伪类   | E元素获得焦点           |

### 3.2 目标伪类选择器  
E:target 匹配E的所有元素，且匹配元素被相关URL指向（在URL中#指向）    
代码示例：

```html
<!DOCTYPE HTML>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <title>垂直手风琴</title>
    <style type="text/css">
      .accordionMenu {
        background: #fff;
        color: #424242;
        font: 12px Arial, Vardana, sans-serif;
        margin: 0 auto;
        padding: 10px;
        width: 500px;
      }
      .accordionMenu h2 {
        margin: 5px 0;
        padding: 0;
        position: relative;
      }
      .accordionMenu h2:before {
        border: 5px solid #fff;
        border-color: #fff transparent transparent;
        content: "";
        height: 0;
        position: absolute;
        right: 10px;
        top: 15px;
        width: 0;
      }
      .accordionMenu h2 a {
        background: #8f8f8f;
        background: linear-gradient(top, #cecece, #8f8f8f);
        border-radius: 5px;
        color: #424242;
        display: block;
        font-size: 13px;
        font-weight: normal;
        margin: 0;
        padding: 10px;
        text-shadow: 2px 2px 2px #aeaeae;
        text-decoration: none;
      }
      .accordionMenu :target h2 a,
      .accordionMenu h2 a:focus,
      .accordionMenu h2 a:hover,
      .accordionMenu h2 a:active {
        background: #2288dd;
        background: linear-gradient(top, #6bb2ff, #2288dd);
        color: #fff;
      }
      .accordionMenu p {
        margin: 0;
        height: 0;
        overflow: hidden;
        padding: 0 10px;
        transition: height 0.5s ease-in
      }
      .accordionMenu :target p {
        height: 100px;
        overflow: auto;
      }
      .accordionMenu :target h2:before {
        border-color: transparent transparent transparent #fff;
      }
    </style>
  </head>
  <body>
    <div class="accordionMenu">
      <div class="menuSection" id="brand">
        <h2>
          <a href="#brand">Brand</a>
        </h2>
        <p>Lorem ipsum dolor......</p>
      </div>
      <div class="menuSection" id="promotion">
        <h2>
          <a href="#promotion">Promotion</a>
        </h2>
        <p>Lorem ipsum dolor Promotion......</p>
      </div>
      <div class="menuSection" id="event">
        <h2>
          <a href="#event">Promotion</a>
        </h2>
        <p>Lorem ipsum dolor Event......</p>
      </div>
    </div>
  </body>
</html>
```
### 3.3 语言伪类选择器 
网站不同语言，对应不同样式  
`E:lang(language) {}` 例如 `E:lang(en) {......}`
### 3.4 UI状态伪类选择器  

| 选择器     | 类型               | 描述                                 |
| ---------- | ------------------ | ------------------------------------ |
| E:checked  | 选中状态伪类选择器 | 匹配选中的复选按钮或单选按钮表单元素 |
| E:enabled  | 启用状态伪类选择器 | 匹配所有启用状态的表单元素           |
| E:disabled | 不可状态伪类选择器 | 匹配所有禁用状态的表单元素           |

### 3.5 结构伪类状态选择器   


| 选择器                | 功能描述                                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| E:first-child         | 作为父元素的第一个子元素E。与E:nth-child(1) 等同                                                                                                    |
| E:last-child          | 作为父元素的最后一个子元素E。与E:nth-last-child(1) 等同                                                                                             |
| E:root                | 匹配E元素所在文档的根元素，在HTML文档中，根元素始终是html，此时与html选择器相同                                                                     |
| E F:nth-child(n)      | 匹配父元素的第n个子元素F，n可以是整数（1，2，3），也可以是关键字(even, odd)，也可以是公式(2n+1,-n+5)，**n是从0开始，但是整体的2n+1的值是从1开始**的 |
| E F:nth-last-child(n) | 匹配父元素的倒数第n个子元素F，与nth-child类似                                                                                                       |
| E:nth-of-type(n)      | 选择父元素内具有指定类型的第n个E元素                                                                                                                |
| E:nth-last-of-type(n) | 选择父元素内具有指定类型的倒数第n个E元素                                                                                                            |
| E:first-of-type       | 选择父元素内具有指定类型第一个E元素，与E:nth-of-type(1)相同                                                                                         |
| E:last-of-type        | 选择父元素内具有指定类最后一个E元素，与E:nth-last-of-type(1)相同                                                                                    |
| E:only-child          | 选择父元素只包含一个子元素，且该子元素匹配E元素                                                                                                     |
| E:only-of-type        | 选择父元素只包含一个同类型的子元素，且该子元素匹配E元素                                                                                             |
| E:empty               | 选择没有子元素的元素，且该元素也不包含任何文本节点                                                                                                  |

示例：   

```html
<!DOCTYPE HTML>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <title>结构伪类</title>
    <style type="text/css">
      li:first-child { /* 选中li第1个 */
        color: red;
      }
      li:nth-child(2n+1) {   /* 选中li第1个和第3个 */
        color: red;  
      }
      li:nth-child(2) {  /* 选中li第2个 */
        color: blue; 
      }
      li:last-child { /* 选中li最后一个 */
         color: red; 
      }
      ul:only-of-type { /* 选中ul */
        border: 1px solid #333;
      }
      div div:first-of-type { /* 匹配div - abc */
        color: yellow;
      }
      div div:last-of-type {  /* 匹配div - def */
        color: lightblue;
      }
      p:nth-of-type(2) {  /* 匹配第2个p - para2 */
        color: lightgreen;
      }
      ul>li:nth-of-type(2) {  /* 选中ul里的第2个li 同li:nth-child(2) */
          background-color: blueviolet; 
      }
    </style>
  </head>
  <body>
    <div>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
      <div>abc</div>
      <p>para</p>
      <div>def</div>
      <p>para2</p>
      <b>ghi</b>
    </div>
  </body>
</html>
```


### 3.6 否定伪类选择器 

| 选择器   | 功能描述                 |
| -------- | ------------------------ |
| E:not(F) | 匹配所有除元素F外的E元素 |

举例：  

`input:not([type=submit]) {......}` 除了type是submit的其他input


## 4. 伪元素


| 选择器             | 功能描述                                |
| ------------------ | --------------------------------------- |
| ::first-letter     | 选择文本块的第一个字母                  |
| ::first-line       | 匹配第一行文本                          |
| ::before / ::after | 插入额外内容的位置，需要配合content属性 |
| ::selection        | 选中文本的样式                          |

例子：


```html
<!DOCTYPE HTML>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <title>伪元素</title>
    <style type="text/css">
      div {
        width: 200px;
        border: 1px solid #333;
      }
      div > p:first-child::first-letter {
        float: left;
        color: #903;
        padding: 4px 8px 0 3px;
        font: 75px/60px Georgia;
      }
      div > p:last-child::first-line {
        font: italic 16px/18px Georgia;
        color: #903;
      }
      a[href^=http]::after {
        content: "(" attr(href) ")";
      }
      p::selection {
        background: red;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div>
      <p>To-do applications are one of the ways you can use to manage a set of tasks. As developers, learning how to build a to-do application will also help to understand certain concepts one of which includes an understanding of how to build an application with a database.</p>
      <p>
        In this article, you will learn how to build a to-do web app by making use of React.js and Firebase Database.
      </p>
      <a href="http://www.google.com">Google</a>
    </div>
  </body>
</html>

```

## 5. 属性选择器

| 选择器        | 功能描述                                                           |
| ------------- | ------------------------------------------------------------------ |
| E[attr]       | 选择匹配具有attr属性的E元素，E可以省略，表示具有attr属性的所有元素 |
| E[attr=val]   | 选择匹配具有attr属性且值为val的E元素，                             |
| E[attr\|=val] | 选择匹配具有attr属性且值为val即val-开始的属性值的E元素             |
| E[attr~=val]  | 选择匹配具有attr属性，属性有多个值，其中一个属性值是val的E元素     |
| E[attr*=val]  | 选择匹配具有attr属性，属性值任意位置包含了val的E元素               |
| E[attr^=val]  | 选择匹配具有attr属性，属性值以val开头的E元素                       |
| E[attr$=val]  | 选择匹配具有attr属性，属性值以val结尾的E元素                       |
