---
title: Shell脚本基础知识
author: Zack Zheng
date: 2024/07/16 10:51
categories:
 - 操作系统专栏
tags:
 - Shell
 - Remote Code
---

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/ Shell基础知识.png"></simple-img>

#### shell脚本的骨架模版

shell脚本可以是txt文件，也可以是sh文件，一般是sh文件，文本文件需要声明是一个shell脚本，也就是这里的骨架模版

<Suspense>
  <my-codes repo="o-bricks" path="shell/template.sh" lang="sh" />
</Suspense>


#### 运行脚本

##### 赋予执行权限后直接运行

1. 赋予执行权限
```bash
chmod +x test.sh
```
2. 直接运行
脚本文件在当前目录
```bash
./test.sh
```

##### 使用 sh 或 bash 命令运行

+ 使用 sh 命令
  ```bash
  sh test.sh
  ```
+ 使用 bash 命令
  ```bash
  bash test.sh
  ```

##### 使用 source 命令

source 命令（在某些系统中也可以用 . 来替代）可以在当前 shell 环境中执行脚本
用于加载配置文件或者函数库

+ 使用 source 命令
```bash
source test.sh
```
+ 使用 . 命令
```bash
. test.sh
```
