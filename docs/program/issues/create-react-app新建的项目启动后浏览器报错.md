---
title: create-react-app 新建的项目，启动后，浏览器报错'globalThis is not defined'
lang: en-US
date: 2023-03-23 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

create-react-app 新建的项目，启动后，浏览器报错'globalThis is not defined'
原因：package.json中配置的开发环境支持的浏览器版本比你本地的浏览器版本高
解决：升级浏览器到最新/或者修改package.json中的browserslist配置项中的development，可以直接复制production的配置
