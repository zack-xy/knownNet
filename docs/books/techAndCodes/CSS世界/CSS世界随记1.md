---
title: CSS世界-随记1
author: Zack Zheng
date: 2023/02/28 21:42
categories:
 - CSS世界
tags:
 - CSS
 - 读书笔记
 - drawio
---


<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/CSS世界随记1.svg"/>


#### 块元素清除浮动  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      padding: 10px;
      background-color: #cd0000;
    }
    .box > img {
      float: left;
    }

    .clear:after {
      content: '';
      display: 'block';  /* block table list-item*/
      /* list-item一般不用，为啥不用？因为不好用 😂 */
      clear: both;
    }
  </style>
</head>
<body>
  <div class="box clear">
    <img src="./test.png" alt="">
  </div>
</body>
</html>

```
