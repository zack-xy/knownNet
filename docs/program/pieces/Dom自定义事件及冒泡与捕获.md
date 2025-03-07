---
title: Dom自定义事件及冒泡与捕获
author: Zack Zheng
date: 2022/11/07 00:00
categories:
 - 大海拾遗
tags:
 - Html
---

### DOM事件

#### DOM事件级别
1. DOM0 `element.onclick=function(){}`
2. DOM2 `element.addEventListener('click', function(){}, false)`
3. DOM3 `element.addEventListener('keyup', function(){}, false)`


#### 事件模型
捕获和冒泡

#### 事件流
3个阶段：捕获->目标->冒泡

#### 描述DOM事件捕获的具体流程
window->document->html->body->....->目标元素

#### Event对象常见应用
event.preventDefault()  // 阻止默认行为
event.stopPropagation()  // 阻止冒泡
event.stopImmediatePropagation()  // 事件响应优先级
event.currentTarget  // 事件委托，当前被点击的元素
event.target

#### 自定义事件

1. 
```
var eve = new Event('custome');
ev.addEventListener('custome', function() {
  console.log('custome')
})
ev.dispatchEvent(eve)   // 触发事件
```

2. CustomEvent // 可以设置参数

#### 代码示例
`DOM事件`


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM事件</title>
</head>

<body>
  <div id="ev">
    <style>
      #ev {
        width: 300px;
        height: 100px;
        background: red;
        color: #fff;
        text-align: center;
      }
    </style>
    目标元素
  </div>
  <script type="text/javascript">
    var ev = document.getElementById('ev')

    window.addEventListener('click', function () {
      console.log("window capture");
    }, true)   // 设置true为捕获阶段触发

    document.addEventListener('click', function () {
      console.log("document capture");
    }, true)

    // html标签
    document.documentElement.addEventListener('click', function () {
      console.log("html capture");
    }, true)

    ev.addEventListener('click', function () {
      console.log("ev capture");
      ev.dispatchEvent(eve)  // 触发自定义事件
    }, true)

    // 自定义事件
    var eve = new Event('test')
    ev.addEventListener('test', function () {
      console.log('test dispatch');
    })
  </script>
</body>

</html>
```
