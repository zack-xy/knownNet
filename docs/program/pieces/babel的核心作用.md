---
title: babel的核心作用
author: Zack Zheng
date: 2025/09/27 21:11
categories:
 - npm
tags:
 - npm
 - node
 - babel
 - 前端
---

#### Babel 本质是什么

Babel 是一个 JavaScript 编译器（compiler / transpiler），主要作用：

+ 把 `新版本 JS 语法`（ES6+、TSX、Flow 等）转换成 `老版本 JS`，让浏览器或 Node 能跑
+ 提供 插件体系，允许自定义语法转换

它的核心并不是“字符串替换”，而是一个 编译管道（Compiler Pipeline）

#### Babel 的编译流程（原理）

1. 解析（Parse）：Babel 使用 @babel/parser 把源码字符串转成 AST（抽象语法树）
2. 转换（Transform）：Babel 的 插件系统在 AST 层面对节点进行遍历和修改
3. 生成（Generate）：修改后的 AST 再交给 @babel/generator 转回 目标代码字符串，同时生成 Source Map（源码映射）

#### 核心包和职责

+ `@babel/core`: 编译的主入口，调度 parser、transform、generator
+ `@babel/parser`: 负责解析源码 → AST
+ `@babel/traverse`: 遍历 AST，供插件修改
+ `@babel/types`: 创建、检查和操作 AST 节点的工具
+ `@babel/generator`: AST → 目标代码
+ `@babel/preset-env`: 常用语法转换集合（按浏览器目标自动加载插件）

#### Babel 的特点

+ 插件化：Babel 自己不做具体转换，几乎所有语法降级都靠插件（如 transform-arrow-functions）。

+ 按需转换：通过 @babel/preset-env 和 browserslist，只转换目标环境不支持的语法。

+ 不可逆优化：它只做语法层面的转换，不做运行时 polyfill（用 core-js/regenerator 补）。

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/babel和corejs的作用对比.png"></simple-img>

<Suspense>
  <my-codes title="Babel的使用示例代码" repo="o-bricks" path="demoCodes/babelDemo/index.js" lang="js" lazy/>
</Suspense>

<Suspense>
  <my-codes title="如何写一个babel插件(箭头函数转普通函数)" repo="o-bricks" path="demoCodes/babelDemo/plugin.js" lang="js" lazy/>
</Suspense>

