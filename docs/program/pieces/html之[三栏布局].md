---
title: 假设高度已知，请写出三栏布局，其中左栏、右栏宽度为300px，中间自适应
author: Zack Zheng
date: 2021/09/01 09:51
categories:
 - 大海拾遗
tags:
 - CSS
 - HTML
---

##### 假设高度已知，请写出三栏布局，其中左栏、右栏宽度为300px，中间自适应

###### 回答：
1. 浮动   `codes1.html`
2. 绝对定位 `codes2.html`
3. flex box `codes3.html` 
4. table布局 `codes4.html`
5. 网格布局 `codes5.html`

###### 延伸

1. 优缺点
2. 如果高度不已知，需要自动撑开
3. 兼容性


###### 优缺点
1. 浮动方案好处：兼容性比较好，缺点可能需要清除浮动
2. 绝对定位：兼容性比较好，缺点因为脱离文档流，可使用性差
3. flex布局：比较完美，兼容性比较差
4. 表格布局：兼容性非常好，单元格高度会同时变化
5. 网格布局：兼容性比较差，代码非常少

###### 如果高度不已知
flex表格布局和table布局可以在不改动的代码的情况下兼用
浮动方案的解决，延伸到BFC


::: code-group

```html [浮动解决]
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面布局</title>
  <style>
    html * {
      padding: 0;
      margin: 0;
    }

    .layout article div {
      min-height: 100px;
    }
  </style>
</head>

<body>
  <section class="layout float">
    <!-- 针对不同的屏幕媒介类型，适用不同的样式 -->
    <style media="screen">
      .layout.float .left {
        float: left;
        width: 300px;
        background: red;
      }

      .layout.float .right {
        float: right;
        width: 300px;
        background: blue;
      }

      .layout.float .center {
        background: yellow;
      }
    </style>
    <article class="left-right-center">
      <div class="left"></div>
      <div class="right"></div>
      <div class="center">
        <h1>浮动解决方案</h1>
        1.这个是三栏布局的中间部分
      </div>
    </article>
  </section>
</body>

</html>
````

```html [绝对定位]
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面布局</title>
  <style>
    html * {
      padding: 0;
      margin: 0;
    }

    .layout article div {
      min-height: 100px;
    }
  </style>
</head>

<body>
  <section class="layout absolute">
    <style media="screen">
      .layout.absolute .left-center-right>div {
        position: absolute;
      }

      .layout.absolute .left {
        left: 0;
        width: 300px;
        background: red;
      }

      .layout.absolute .center {
        left: 300px;
        right: 300px;
        background: yellow;
      }

      .layout.absolute .right {
        right: 0;
        width: 300px;
        background: blue;
      }
    </style>
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h2>绝对定位解决方案</h2>
        这是三栏布局的中间部分
      </div>
      <div class="right"></div>
    </article>
  </section>
</body>

</html>
```


```html [flex box]
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面布局</title>
  <style>
    html * {
      padding: 0;
      margin: 0;
    }

    .layout article div {
      min-height: 100px;
    }
  </style>
</head>

<body>
  <section class="layout flexbox">
    <style media="screen">
      .layout.flexbox .left-center-right {
        display: flex;
      }

      .layout.flexbox .left {
        width: 300px;
        background: red;
      }

      .layout.flexbox .center {
        flex: 1;
        background: yellow;
      }

      .layout.flexbox .right {
        width: 300px;
        background: blue;
      }
    </style>
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h2>flex box解决方案</h2>
        1. 这是三栏布局的中间部分
      </div>
      <div class="right"></div>
    </article>
  </section>
</body>

</html>
```


```html [表格布局]
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面布局</title>
  <style>
    html * {
      padding: 0;
      margin: 0;
    }

    .layout article div {
      min-height: 100px;
    }
  </style>
</head>

<body>
  <section class="layout table">
    <style media="screen">
      .layout.table .left-center-right {
        width: 100%;
        display: table;
        height: 100px;
      }

      .layout.table .left-center-right>div {
        display: table-cell;
      }

      .layout.table .left {
        width: 300px;
        background: red;
      }

      .layout.table .center {
        background: yellow;
      }

      .layout.table .right {
        width: 300px;
        background: blue;
      }
    </style>
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h2>表格布局</h2>
        1. 这是三栏布局的中间部分
      </div>
      <div class="right"></div>
    </article>
  </section>
</body>

</html>
```


```html [网格布局]
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面布局</title>
  <style>
    html * {
      padding: 0;
      margin: 0;
    }

    .layout article div {
      min-height: 100px;
    }
  </style>
</head>

<body>
  <section class="layout grid">
    <style media="screen">
      .layout.grid .left-center-right {
        display: grid;
        width: 100%;
        grid-template-rows: 100px;
        grid-template-columns: 300px auto 300px;
      }

      .layout.grid .left {
        background: red;
      }

      .layout.grid .center {
        background: yellow;
      }

      .layout.grid .right {
        background: blue;
      }
    </style>
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h1>网格布局解决方案</h1>
        1. 这是三栏布局的中间部分
      </div>
      <div class="right"></div>
    </article>
  </section>
</body>

</html>
```

:::
