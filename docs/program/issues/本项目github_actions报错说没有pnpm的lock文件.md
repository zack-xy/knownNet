---
title: 本项目github_actions报错说没有pnpm的lock文件
lang: en-US
date: 2025-02-05 16:34
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

一直跑的很好，lock文件也没有改动，也有pnpm-lock.yaml文件   
检查了下deploy.yml，和本地的pnpm版本，本地的pnpm版本是8.15.3       
将deploy.yml中pnpm版本固定为8，问题解决     
