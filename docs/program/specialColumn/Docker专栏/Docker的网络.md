---
title: Docker的网络
author: Zack Zheng
date: 2025/01/03 16:30
categories:
 - Docker专栏
tags:
 - Docker
---

问题：

+ 1、容器为什么能获取到IP地址

+ 2、为什么宿主机可以ping通容器的IP

+ 3、为什么(同一宿主机)容器间的IP是互通的

  bridge网桥:docker0 （相当于路由器）

  查看:  `docker network ls`

  查看详细信息： `docker network inspect network的ID `

  信息如下

  ```
  .......
  "IPAM": {
      "Driver": "default",
      "Options": null,
      "Config": [
          {
              "Subnet": "172.17.0.0/16",
              "Gateway": "172.17.0.1"
          }
      ]
  },
  .......
  ```

  每个容器相当于一台台电脑，连接到docker0这个路由器上

  1. 创建bridge: `docker network create -d bridge mybridge `   (mybridge是bridge的名字)

  2. 使用bridge: `--network mybridge`   (docker container run -d --rm --name box3 --network mybridge busybox)

  3. 让一个容器连2个bridge： `docker network connect bridge box3` (容器box3又连了bridge(默认的那个docker0))

  4. 取消一个bridge连接：``docker network disconnect bridge box3``
  5. ⚠️注意⚠️：自定义的bridge（默认的bridge不行），同一个bridge的容器可以相互ping通容器的名字

+ 4、为什么容器能ping通外网

  宿主机可以ping通外网，容器访问外网，先到docker0

  经过NAT转换成eth0的ip出去，eth0是宿主机对外通信的

  ( NAT是用来解决IP4不够用的问题：私有ip地址  <----->  公有ip地址 )

+ 5、容器的端口转发是怎么回事

​       -p 8080:80.  =>  8080是宿主机端口，80是容器端口

​	   宿主机如果是Linux，可以使用如下命令查看端口转发的配置

​		`sudo iptables -t nat -nvxL`

​        (DNAT)



----------------------------

##### 除了【bridge】还有【host】和【null】

如果连接是【host】，就是容器和宿主机共享同一个网络。

【null】作为开发者不常用，连接到【null】意味着无法进行网络访问（第三方工具会使用）

--------

##### 

