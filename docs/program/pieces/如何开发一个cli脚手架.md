---
title: 如何开发一个cli脚手架
author: Zack Zheng
date: 2025/07/18 10:38
categories:
 - npm
tags:
 - npm
 - node
 - 脚手架
---

+ 为什么全局安装@vue/cli后会添加的命令为vue  
答：在package.json中通过"bin"字段指定的  
+ 全局安装@vue/cli时发生了什么？  
答：把包下载到node相应版本的全局node_modules目录下，解析package.json中的"bin"字段，创建软链接  
+ 执行vue命令时发生了什么？  
答：看bin中是否注册，`#!/usr/bin/env node`表明，使用node来执行对应的js文件


##### [发布和测试npm包常用命令](./发布npm包常用命令.md)






