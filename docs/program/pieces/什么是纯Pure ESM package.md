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

1、使用默认导入

```js
// 原来的命名导入方式（会报错）
// import { sync } from 'fast-glob';

// 修改为默认导入
import fastGlob from 'fast-glob';

// 使用 sync 方法
const result = fastGlob.sync(['**/*.js']);
console.log(result);
```


2、使用动态导入（适用于异步场景）  

如果你的代码允许异步操作，可以使用动态导入 import() 来加载 fast-glob 模块。

```js
async function main() {
    const fastGlob = await import('fast-glob');
    const result = fastGlob.sync(['**/*.js']);
    console.log(result);
}

main();
```

3、配置 TypeScript（如果是 TypeScript 项目）

```json
{
    "compilerOptions": {
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true
    }
}
```
`esModuleInterop`：启用后，TypeScript 会生成一些额外的代码来支持 CommonJS 和 ESM 之间的互操作。    
`allowSyntheticDefaultImports`：允许从没有默认导出的模块中进行默认导入。

##### 纯ESM项目下cjs的包配置项怎么修改

最简单的解决方案。即使你的项目是 ESM，仍然可以在项目中保留部分文件为 CommonJS 格式。

比如将配置文件重命名为 .cz-config.cjs：

将 .cz-config.js 或 .cz-config.mjs 重命名为 .cz-config.cjs。

.cjs 扩展名会告诉 Node.js 这是一个 CommonJS 模块。


