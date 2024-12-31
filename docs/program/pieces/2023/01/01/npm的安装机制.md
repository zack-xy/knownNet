---
title: npm的安装机制
author: Zack Zheng
date: 2023/01/01 00:00
categories:
 - 大海拾遗
tags:
 - JavaScript
---


<simple-img src="npm的安装机制.svg" />

##### npm缓存机制    

查看npm缓存目录路径   

`npm config get cache`  

缓存存放在`_cacache`文件夹中   
可以使用如下命令清除这个文件夹中的内容    

`npm cache clean --force`     

_cacache文件夹中有3个目录    

> content-v2     ---     二进制文件
> 

> index-v5  ---  content-v2里文件索引

> tmp   --- 

1. 当npm install执行时，通过pacote把相应的包解压在对应的node_module下面
2. pacote依赖npm-registry-fetch来下载包，在给定的路径下根据IRTF RFC 7234生成缓存数据 
3. 在每次安装资源时，根据package-lock.json中存储的integrity、version、name信息生成一个唯一key 
4. 这个key会对应到index-v5下的缓存记录，发现有缓存资源，就会找到tar包的hash，再次通过pacote把对应的二进制文件解压到相应的项目node_modules下面

---------------------------

#### 如何高效率在本地验证包的可用性

`npm link`用于在开发过程中将本地npm包链接到全局npm目录，从而可以在其他项目中使用这个本地包，而不需要发布到npm仓库。

##### 基本用法和步骤

1. 在本地包目录中创建链接

   首先，进入要链接的本地包的目录，运行以下命令

   `npm link`

   这个命令会在全局npm目录中创建一个符号链接，指向你当前的本地包

2. 在项目中使用链接的包

   进入希望使用这个本地包的项目目录，运行以下命令

   `npm link <package-name>`

   `<package-name>`是你本地包的名称（通常在package.json文件中的name字段定义），这个命令会在项目的node_modules目录中创建一个符号链接。指向全局npm目录中的本地包

3. 取消链接

   如果你需要取消链接，可以按照以下步骤操作

   + 在项目目录中运行以下命令，取消项目中的链接

     `npm unlink <package-name>`

   + 在本地包目录中运行以下命令，取消全局链接

     `npm unlink`

   [参考资料地址](https://www.cnblogs.com/an-shiguang/p/18269056)

-------------------------------------

#### 如何部署一个私有npm镜像

使用nexus、verdaccio、cnpm



-------------------------------

#### npm配置优先级

优先级从左到右，依次降低

命令行设置npm配置   --->  env环境变量设置npm配置  --->  项目级.npmrc  ---> 用户级.npmrc   --->  全局级.npmrc    --->  npm内置.npmrc    
