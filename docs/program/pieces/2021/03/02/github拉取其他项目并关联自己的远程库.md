---
title: github拉取其他项目并关联到自己的远程库
author: Zack Zheng
date: 2021/03/02 22:36
categories:
 - 大海拾遗
tags:
 - Git
 - Github
---



使用[degit项目脚手架工具](https://zack-xy.github.io/knownNet/program/pieces/2023/03/24/%E9%A1%B9%E7%9B%AE%E8%84%9A%E6%89%8B%E6%9E%B6%E5%B7%A5%E5%85%B7.html)拉取项目    
`degit https://github.com/nestjs/typescript-starter.git my-name`  

拉取的项目没有git初始化，所以进入项目目录，执行  

`git init`  

关联自己的远程仓库  

`git remote add origin https://github.com/zack-xy/my-name.git`  

commit本地代码，强推到远程仓库(一般远程是新建的，没有代码，如果有会覆盖原有代码)  

`git push -u origin main -f`  
