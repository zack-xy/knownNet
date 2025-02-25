---
title: Debian12配置ssh远程连接
date: 2024/01/02 00:00:00
categories: 
- Debian
tags: 
- Debian
---

+ 1、检查是否安装openssh-server，没有则安装之

  检查： `dpkg -l | grep openssh-server`

  安装：`apt install openssh-server`

+ 2、配置sushi_config文件，允许ssh远程连接

​		`nano /etc/ssh/sshd_config`

（nano命令：ctrl+o然后回车保存，ctrl+x退出）

![](https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/截屏2025-01-09 10.50.07.png)

增加配置如上

```
PermitRootLogin yes
ClientAliveInterval 60
ClientAliveCountMax 100
```

`ClientAliveInterval` 用于设置 SSH 服务端每隔多长时间（以秒为单位）向客户端发送一个空的消息（可以理解为一种 “心跳” 检测消息），来检查客户端是否仍然处于连接状态、是否还存活。

`ClientAliveCountMax`设置重试的次数，这里重试100次，都没有客户端的回应，认为客户端已经断开连接，进而关闭对应的 SSH 连接通道，释放相关资源等。

+ 3、重启服务，查看服务状态

  重启：`service ssh restart`

  查看：`service ssh status`

+ 4、连接

  查看ip：`ip a`

  连接：`ssh root@ip地址 -p 22` (默认端口是22)
