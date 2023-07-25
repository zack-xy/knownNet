---
title: 使用ts-node启动项目，全局自定义的类型找不到
lang: en-US
date: 2023-07-21 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---


在tsconfig中加入如下几行(我的全局自定义类型在src/types/global.d.ts中)
```
"ts-node": {
  "files": true
},
"files": [
  "src/index.ts",
  "src/types/global.d.ts"
]
```
