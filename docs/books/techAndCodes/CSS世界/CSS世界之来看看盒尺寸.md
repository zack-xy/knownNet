---
title: CSS世界之来看看盒尺寸
author: Zack Zheng
date: 2023/03/06 21:09
categories:
 - CSS世界
tags:
 - CSS
 - 读书笔记
---


<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/CSS世界之来看看盒尺寸.svg"/>


#### Loading动画

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loading ...动画效果</title>
  <style>
    dot {
      display: inline-block;
      height: 1em;
      line-height: 1;
      text-align: left;
      vertical-align: -.25em;
      overflow: hidden;
    }
    dot::before {
      display: block;
      content: '...\A..\A.';
      white-space: pre-wrap;
      animation: dot 3s infinite step-start both;
    }
    @keyframes dot {
      33% { transform: translateY(-2em); }
      66% { transform: translateY(-1em); }
    }
  </style>
</head>
<body>
  正在加载中<dot>...</dot>
</body>
</html>

```


#### content计数器

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>content计数器</title>
  <style>
    .counter,.counter2 {
      counter-reset: zack 1 zack2 2; /* 一次性可以命名2个 */
      counter-increment: zack2; /* 一次性可以2个，空格分开 */
      /* increment默认是1，可以设置(可以负数)即  counter-increment: zack 2 */
      font-size: 32px;
      font-family: Arial Black;
      color: #cd0000;
    }
    /* 
      zack初始值是1
      before是increment一次即1+1
    */
    .counter::before {
      content: counter(zack);
      counter-increment: zack;
    }
    /*
      zack2初始值是2
      父increment了一次是2+1
      after中又increment了一次2+1+1
    */
    .counter::after {
      content: counter(zack2);
      counter-increment: zack2;
    }

    /*
      before和after两个数字，各自increment一次
      before是初始值1+1，after是1+1+1
    */
    .counter2::before,.counter2::after {
      content: counter(zack);
      counter-increment: zack;
    }
        /* 递增的不一定是数字，也可以是其他值，比如罗马文 */
    .counter3 {
      counter-reset: zackRoman 2;
      font-size: 32px;
      font-family: Arial, Helvetica, sans-serif;
      color: #cd0000;
    }
    .counter3::before,
    .counter3::after {
      display: block;
      content: counter(zackRoman, lower-roman);
      counter-increment: zackRoman;
    }

    /* content支持级联 */
    .counter5 {
      counter-reset: zackRoman 2 zack 1;
    }
    .counter5::before {
      content: counter(zackRoman, lower-roman) '\A' counter(zack);
      counter-increment: zackRoman zack 2;
      white-space: pre;
    }

    /* 使用counters,生成诸如1.1，1.3的子序号 */
    .count6 {
      padding-left: 20px;
      counter-reset: peiqi;
    }
    .element::before {
      content: counters(peiqi, '-') '. ';
      counter-increment: peiqi;
    }
  </style>
</head>
<body>
  <p> 我是一段文字</p>
  <p class="counter"></p>
  <p class="counter2"></p>
  <p class="counter3"></p>
  <p class="counter4"></p>
  <p class="counter5"></p>
  <div class="count6">
    <div class="element">
      我是猪爷爷
      <div class="count6">
        <div class="element">
          我是猪爸爸1
        </div>
        <div class="element">
          我是猪爸爸2
          <div class="count6">
            <div class="element">
              我是小猪佩奇
            </div>
            <div class="element">
              这是我的弟弟乔治
            </div>
            <div class="element">
              这是我的弟弟ToTo
            </div>
          </div>
        </div>
        <div class="element">
          我是猪爸爸3
        </div>
      </div>
    </div>
    <div class="element">
      我是猪爷爷2
      <div class="count6">
        <div class="element">
          我是猪爸爸2.1
          <div class="count6">
            <div class="element">
              我是小猪佩奇2.1.1
            </div>
            <div class="element">
              这是我的弟弟DoDo
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="element">
      我是猪爷爷3
    </div>
  </div>
</body>
</html>
```
