---
title: vscode中使用Maven创建项目
lang: en-US
date: 2025/01/16 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

首先，确保你安装了Maven并且配置好了   
我已经保证了第一步没有问题了，而且在·vscode中也装好了插件    
但是创建项目的时候报找不到文件，无法启动Maven  
查了一下，需要vscode配置`maven.executable.path`默认配置是错的     
修改指向Maven的安装路径可执行文件   
我这里是`/Users/zhengxiyun/Zack/codes/maven3.9.9/apache-maven-3.9.9/bin/mvn`
然后可以启动了，但是创建模板项目的时候，`maven-archetype-plugin-3.1.2.pom`这个文件报错     
是因为阿里镜像配置中的url错了    
正确如下：
```xml
<mirror>
  <id>alimaven</id>
  <name>aliyun maven</name>
  <url>https://maven.aliyun.com/repository/public</url>
  <mirrorOf>central</mirrorOf>
</mirror>
```
