---
title: 常见CLI工具用法模式
author: Zack Zheng
date: 2025/07/18 10:38
categories:
 - npm
tags:
 - npm
 - node
---

##### 参数选项式：`mycli --name zack --env prod`

##### 子命令式：`mycli init`、`mycli build`、`mycli deploy`

##### 管道式输入（stdin）：`echo "hello" | mycli`

##### 交互式（prompt）：mycli 启动后引导用户输入
比如说：`npx create-react-app`

##### 文件参数式：`mycli ./config.json`

##### 多参数式：`mycli name1 name2 name3`

##### 环境变量控制：`ENV=prod mycli`

##### 组合式参数：`mycli --font=Standard --align=center`

##### 调用系统命令：`mycli exec "ls -la"`

##### 配置文件式：`.zxyrc, zxy.config.js`


