---
title: mac更改全局npm包安装路径
lang: en-US
date: 2023/02/21 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- 问题
---

#### 查看全局包位置
`npm root -g`

#### 修改全局包位置

`npm config set prefix 目标路径`

#### 查看修改结果

`npm config get prefix`

#### 配置环境变量

`vim ~/.bash_profile`

写入:    

`export PATH = "目标目录/bin:${PATH}"`

运行：

`source ~/.bash_profile`



