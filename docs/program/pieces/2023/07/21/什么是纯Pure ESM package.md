---
title: 什么是纯Pure ESM package
author: Zack Zheng
date: 2023/07/21 00:00
categories:
 - JavaScript
tags:
 - ESM
---

在玩项目的过程中，引入chalk发现报错了，看了一下它的库，发现自己的项目不是Pure ESM package

整理几个关于Pure ESM package的几个文章链接



[介绍Pure ESM package和一些常见的坑](https://www.albertaz.com/blog/pure-esm-package)

[chalk作者关于Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)


##### 如何在纯ESM项目中使用commonjs的包

1、修改commonjs的包，修改其package.json（Dual Package）   
[模块化热点 Pure ESM 与 Dual Package](https://zhuanlan.zhihu.com/p/619502466)

2、增加babel转换commonjs为ESM

ESM（ECMAScript Modules）和 CommonJS 是两种不同的模块系统，通常不会同时使用。但是如果你想在纯 ESM 项目中使用 CommonJS 模块，可以考虑使用一些工具或者技巧来实现。

一种常见的方法是使用 Babel 转译器，将你的代码转换为兼容的 ES 模块语法。另外，你也可以考虑安装一些适配器或 shim，来帮助在 ESM 中使用 CommonJS 模块。

以下是一个示例，演示如何使用 Babel 转译器和 @babel/preset-env 插件来在纯 ESM 项目中使用 CommonJS 模块：

首先安装 Babel 相关包：
```bash
npm install @babel/core @babel/preset-env babel-loader --save-dev
```
创建一个 `.babelrc` 文件，并配置 `@babel/preset-env`：
```json
{
  "presets": ["@babel/preset-env"]
}
```
配置你的项目（如 Webpack）使用 Babel 转译器处理 CommonJS 模块：
```javascript
module.exports = {
  // 其他配置...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```
通过以上步骤，你可以让你的纯 ESM 项目支持 CommonJS 模块。记得根据你的具体项目环境和需求，做适当的调整和优化。


