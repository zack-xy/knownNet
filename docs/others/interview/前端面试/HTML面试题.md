---
title: HTML面试题
author: Zack Zheng
date: 1999/01/01 00:00
categories:
 - 面试题
tags:
 - HTML5
---

#### 介绍下iframe
iframe元素可以在网站中嵌入另一个网站的内容
优点：  
+ 1. 可以实现一个窗口加载多个第三方域名下内容    
+ 2. 增加代码复用性   

缺点：  
+ 1. 搜索引擎无法识别  
+ 2. 影响首页首屏加载时间   
+ 3. 兼容性差    

如何防止页面被其他网站嵌入到iframe   
（为什么防止其他网站嵌套我？为了防止点击劫持：攻击者会使用透明iframe诱导用户点击）

+ 1. 设置响应头X-Frame-Options   
DENY（禁止网页嵌套）、SAMEORIGIN（只允许同源访问）     
+ 2. 设置响应头`"Content-Security-Policy":"frame-ancestors 'self'"  // 限定iframe的嵌套`  
+ 3. 使用js判断：如果`window.top`和`window.self`相等，则没有嵌入iframe，如果不相等，就是嵌入了iframe 

--------------

#### 介绍下defer和async   

defer和async是script标签的两个属性，用于在不阻塞文档解析的前提下，控制脚本的下载和执行     

defer： 开启新的线程下载脚本，脚本在文档解析后执行，在load和DOMContentLoaded事件之前执行    
async：HTML5新增属性，异步下载脚本，下载完成后立即执行，无法预测每个脚本的下载顺序和执行顺序    


--------------------


#### 介绍下meta标签   

meta标签用于描述一个HTML文档的属性，例如作者、时间和日期、网页描述、关键词、页面刷新等    
meta标签的作用：搜索引擎优化（seo）、定义页面使用语言、自动刷新并指向新页面、实现网页转换中的动态效果、控制页面缓冲、网页定级评价、控制网页显示窗口等     

例子：自动刷新并指向新页面     
```
// 3秒后刷新页面
<meta http-equiv="Refresh" content="3" />

// 3秒后跳转页面
<meta http-equiv="Refresh" content="3;url=https://www.baidu.com" />

```


--------------------------

#### HTML5有哪些新特性

+ 新的选择器document.querySelector、document.querySelectorAll   
+ 媒体播放的video和audio标签   
+ 本地存储localStorage和sessionStorage   
+ 浏览器通知Notifications   
+ 语义化标签  
+ websocket  
+ 拖拽相关API  
+ 跨窗口通信PostMessage  
+ 表单FormData对象  
+ canvas+SVG   
+ ......

-------------------------------

#### link和@import的区别 

```
// link
<link href="路径" rel="stylesheet" type="text/css"/>

// import
@import url(路径地址)
```

+ 1.@import是css定义的语法规则，只有导入css的作用，link是HTML提供的标签，不光可以加载css文件，也可以定义RSS、rel连接属性等        
+ 2.link引入会和html同时加载，@import引入的css会在页面加载完毕后被加载   
+ 3.@import是后来加的，可能有兼容性问题   
+ 4.link标签可以受控动态插入和移除样式。@import不行，不能被js修改    
+ 5.link的权重高于@import

--------------------------------

#### 页面生命周期

DOMContentLoaded:浏览器已经完全加载HTML，并构建了DOM树，但js和样式表之类的外部资源可能尚未加载完成(可以查找DOM节点)    
load: 不仅加载完HTML，还加载完成所有外部资源：图片和样式等（图片大小已知）     
beforeunload/unload: 用户正在离开页面时   

