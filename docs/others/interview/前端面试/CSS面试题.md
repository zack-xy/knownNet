---
title: CSS面试题
author: Zack Zheng
date: 1999/01/01 00:00
categories:
 - 面试题
tags:
 - CSS
---



#### 伪元素和伪类

(:)用于伪类(:before、:after、:first-line、:first-letter)    
(::)用于伪元素（:hover、:active、:checked、:focus）

---------


#### display: none和visibility:hidden的区别

`display: none：  ` 
+ 会从渲染树中消失，不占据空间。  
+ 因为dom消失了，意味着子节点无论如何修改，是么无法显示的。  
+ 修改display会导致重排 
+ 读屏器不可读  
`visibility:hidden  `  
+ 还在渲染树中，占据空间。   
+ 因为还在渲染树中，子节点还是可以显示的。   
+ 只会导致重绘   
+ 读屏器可读


---------

#### 盒子模型
+ 普通盒子模型
`box-sizing:content-box`   
width只包含内容宽度，不包含border和padding    
offsetWidth = (width+padding+border),不算margin   
width和height属性只会应用到内容区域   

+ 怪异盒模型   
`box-sizing: border-box`     
offsetWidth = width(padding和border都挤压到内容里面)   
width包括内容区域、padding和border，不算margin    


---------------

#### 什么是外边距塌陷   
查看站内文章    

----------------

#### 什么是BFC

Block Format Context:块级格式化上下文   
一块独立的渲染区域，内部元素的渲染不会影响边界以外的元素   
形成BFC条件：    
float不设置为none   
position是absolute或fixed  
overflow不是visible   
display是flex或者inline-block 


#### 清除浮动有哪些方式   

浮动元素摆放规则：  
尽量一个挨着一个，靠左靠上，可能超出包含块，不能超过所在行的最高点，行内元素围绕着浮动元素摆放     

问题：     
父元素的高度无法被撑开，与浮动元素同级的非浮动元素会紧随其后   

清除浮动：     

+ 父级div定义height   
+ 最后一个浮动元素后加div标签，添加样式clear:both (不推荐)   
+ 父级div定义zoom   
+ 父级添加overflow: hidden/auto (不推荐)   
+ 浮动元素的容器增加浮动(不推荐)   
+ 伪元素清除浮动，伪元素样式clear:both (推荐)   
+ before和after双伪元素清除浮动   


-----------------------------

#### client、offset和scroll   

offsetParent是一个只读属性，返回一个最近的（包括层级），包含该元素的定位元素，如果没有定位元素，返回最近的table、td、th或body元素     

clientWidth和clientHeight，可视区的宽/高度，不包含滚动条、不包含border      
offsetWidth和offsetHeight,包含border   


clientTop获取元素上边框宽度，不包括顶内外边距     
clientLeft获取元素左边框宽度   
offsetTop获取元素到有定位父元素顶部距离   
offsetLeft获取元素到有定位父元素左侧距离     




scrollWidth、scrollHeight确定元素内容的实际大小        
scrollLeft、scrollTop可以确定滚动条的状态，可以可以设置滚动   





