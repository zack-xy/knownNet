---
title: 配置node项目支持es6模块
author: Zack Zheng
date: 2023/03/23 15:59
categories:
 - 大海拾遗
tags:
 - Node
---


### 1. es6模块转commonjs模块
#### 1.1. 安装依赖
全局安装
`npm install babel-cli browserify -g`
项目安装
`npm install babel-preset-es2015 --save-dev`

#### 1.2. 项目根目录新建文件.babelrc
```
    {
        "presets": ["es2015"]
    }
```
#### 1.3. 转换目标文件为commonjs模块(转换src文件夹内文件到lib文件夹)
`babel src -d lib`

### 2. 将commonjs模块转为浏览器可以执行的格式
(转换main.js为compiled.js可在浏览器执行)
browserify main.js > compiled.js

### 3. 二者区分和相互加载
http://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html

配置项目支持es6模块
node v13.2.0之前
在package.json中添加属性："type": "module"
在执行命令中添加如下选项：node --experimental-modules src/index.js

node v13.2.0之后
只需要在package.json中添加属性："type": "module"
