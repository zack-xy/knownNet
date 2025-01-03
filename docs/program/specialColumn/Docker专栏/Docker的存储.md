---
title: Docker的存储
author: Zack Zheng
date: 2025/01/03 14:07
categories:
 - Docker专栏
tags:
 - Docker
---

默认情况下，在运行中的容器里创建的文件，被保存在一个可写的容器层

+ 如果容器被删除了，数据就没有了
+ 这个可写的容器层和特定的容器绑定，这些数据无法和其他容器共享

有2种方式做数据的持久化

+ Data Volume

  由Docker管理，(/var/lib/docker/volumes/Linux)，持久化数据的最好方式

+ Bind Mount

  由用户指定存储的数据具体mount在系统什么位置



#### Data Volume

比如说在Dockerfile文件中加一行(一个Dockerfile可以有多个VOLUME)

```dockerfile
VOLUME ["/app"]
```

这里的意思是把容器中的/app目录的内容持久化(挂载)到本地磁盘

如果在启动容器的时候不指定，docker会给VOLUME一个随机的hash名字

每次启动，都会有一个不一样的VOLUME名字

如果想要在启动时，使用同一个VOLUME，需要在启动的时候指定VOLUME的名字

`docker container run -d -v cron-data:/app my-cron`

(这里-v表示VOLUME，cron-data是VOLUME的名字，/app表示是/app这个路径的VOLUME，my-cron是镜像名字  )

⚠️(Dockerfile文件中也可以不写VOLUME，那就需要启动容器时使用-v指定VOLUME)

⚠️（使用Data Volume实际持久化在宿主机上的数据直接访问不到，因为是在Linux虚拟机里。如果宿主机是Linux系统中的Docker，可以直接访问到）

#### Bind Mount

可以直接指定mac系统中的路径存储数据

`docker container run -d -v $(pwd):/app my-cron`

（这里-v表示VOLUME，$(pwd)pwd命令显示当前路径、/app表示启动的容器要持久化数据的目录、my-cron是镜像名字 ）



#### 多个机器之间的容器共享数据

依靠driver

具体就是nfs、aws或者ssh

以ssh为例(最简单)，比如说3台Linux机器，ip互通，可以通过SSH相互通信

##### 安装plugin

其中2台机器上安装plugin:  `vieux/sshfs`

安装命令`docker plugin install --grant-all-permissions vieux/sshfs ` `

##### 创建volume

```shell
docker volume create --driver vieux/sshfs \
                          -o sshcmd=vagrant@192.168.200.12:/home/vagrant \
                          -o password=vagrant \
                          sshvolume
```

（vieux/sshfs是指定的driver，vagrant是用户名，192.168.200.12是第三台机器的ip，/home/vagrant是机器3的共享数据目录、sshvolume是volume的名字 ）

##### 创建容器挂载volume

`docker run -it -v sshvolume:/app busybox sh`

（在机器1或者2上运行上面容器，在容器中的/app目录中创建文件，机器3也会看到）
