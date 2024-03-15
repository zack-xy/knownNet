---
title: CSS属性之flex属性
author: Zack Zheng
date: 2022/11/09 00:00
categories:
 - CSS专栏
tags:
 - CSS
---

介绍css中的flex

<simple-img src="https://s11.ax1x.com/2024/02/24/pFU7NJe.png"></simple-img>

上面漏了一个容器属性：gap：设置行与行，列与列之间的距离   

属性大致可以分为：空间分配属性和对齐属性

空间分配属性：    
justify-content: 沿Flex容器的主轴分配Flex容器的剩余空间   
align-content:沿Flex容器的侧轴分配Flex容器的剩余空间   
place-content： 是justify-content和align-content的简写

对齐属性：    
align-self: 沿Flex容器的侧轴对齐单个Flex项目    
align-item: 将所有flex项目作为一个组，沿Flex容器侧轴对齐

   
justify-开头的属性，用于Flex容器主轴方向    
align-开头的属性，用于Flex容器侧轴的方向      
-content结尾的属性，用于空间分配    


#### justify-content属性的值 
##### 默认情况下(无justify-content或者值为flex-start)
第一个Flex项目位于主轴起始点对齐，紧挨着向后排列，剩余空间在最后   
`|[][][]剩余空间|`   
⚠️如果没有剩余空间：Flex项目会在终点溢出

`justify-content: flex-end`: Flex项目终点与主轴终点对齐，剩余空间在前方   
`|剩余空间[][][]|`  
⚠️如果没有剩余空间：Flex项目会在起点溢出



`justify-content: center`: 剩余空间均分在两侧，Flex项目在中间     
`|剩余空间A[][][]剩余空间A|`   
⚠️如果没有剩余空间：Flex两端溢出  


`justify-content: space-around`: 第一个和最后一个Flex项目距离主轴距离等于其他项目间距的1/2  `|间距A[]间距B[]间距B[]间距A|`：间距A = 1/2 * 间距B    
⚠️如果没有剩余空间：和center相同

`justify-content: space-between`: 第一个Flex项目与主轴起始点对齐，最后一个与主轴终点对齐，其他项目间距相等    
`|[]间距A[]间距A[]间距A[]|`   
⚠️如果没有剩余空间：和flex-start相同   

`justify-content: space-evenly`：所有项目间距相同   
`|间距A[]间距A[]间距A[]间距A|`   
⚠️如果没有剩余空间：和center相同   

#### align-content
分配侧轴的空间,属性的值和justify-content相同

如果Flex项目没有显示的设置height或block-size,默认会侧轴拉伸Flex项目

(Flex项目换行且高度固定的时候，侧轴可能才会有空余空间供分配，这时align-content才有效)

🔆justify-content和align-content可以合并为：place-content


#### 侧轴对齐Flex项目

Flex项目❗不换行❗，Flex项目在侧轴上的对齐方式就不能使用align-content了

align-items:控制Flex项目所在行在侧轴上的对齐方式    
align-self:用于控制单个Flex项目在侧轴的对齐方式


📢：如果在Flex容器上同时设置align-content和align-items时，如果align-content是stretch(默认值时)，浏览器会以align-items为主忽略align-content，如果align-content是非默认值strctch,则反之。


#### 控制主轴单个项目

margin: auto




