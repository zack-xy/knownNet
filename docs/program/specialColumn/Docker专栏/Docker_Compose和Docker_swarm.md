---
title: Docker Compose
author: Zack Zheng
date: 2025/01/06 15:51
categories:
 - Docker专栏
tags:
 - Docker
---

Docker Compose是一个用于定义和运行多容器Docker应用程序的工具。允许使用YAML文件来配置应用程序的服务，并通过单个命令启动、停止和管理整个应用程序。

#### compose文件的结构和版本

[compose官方指引](https://docs.docker.com/reference/compose-file/)

##### 基本语法结构

```yaml
version: "3.8"

services: # 容器
  servicename: # 服务名字，这个名字也是内部 bridge网络可以使用的 DNS name
    image: # 镜像的名字，会从本地加载镜像，如果本地没有，从docker hub拉取
    build: ./test # 也可以使用build，即从当前目录的test文件夹中使用Dockerfile构建镜像（镜像的名字可以用上面的image配置指定）
    build: # 指定参数的方式
			context: ./test  # 指定目录
			dockerfile: Dockerfile.dev  # 指定Dockerfile文件
    command: # 可选，如果设置，则会覆盖默认镜像里的 CMD命令
    environment: # 可选，相当于 docker run里的 --env
    volumes: # 可选，相当于docker run里的 -v
    networks: # 可选，相当于 docker run里的 --network
    ports: # 可选，相当于 docker run里的 -p
  servicename2:

volumes: # 可选，相当于 docker volume create

networks: # 可选，相当于 docker network create
```

##### 常用命令

⚠️运行docker-compose命令需要在docker-compose.yml文件目录

+ 启动：`docker-compose up`  (前台执行)
+ 启动:`docker-compose up -d` (后台运行)
+ 查看log: `docker-compose logs `     /  `docker-compose logs -f` (持续动态查看)

+ 查看运行：`docker-compose ps`

+ 停止:  `docker-compose stop`

+ 删除：`docker-compose rm`   (删除后台停止的通过compose创建的容器，只能删除容器，不会删除网络，需要手动删除网络，或者使用`docker system prune -f`清理网络）

+ 指定名字：`docker-compose -p myproject up -d`(默认是文件夹的名字，这里使用-p指定了名字为myproject, ‼️ps命令和删除命令都要加 -p )

+ 构建镜像：`docker-compose build` (从本地Dockerfile中构建镜像)
+ 拉取镜像：`docker-compose pull`



-------------------------

##### Docker compose服务更新

如果本地镜像的文件变更了，本地镜像不会自动重新build，如果只是使用up，compose启动的镜像使用的是旧的镜像。需要下面这样启动

`docker-compose up -d --build`

其他常用

`docker-compose up -d --remove-orphans` （删除无用的容器）

`docker-compose restart` (重启)



-------

##### 水平扩展

`docker-compose up -d --scale flask=3` (扩展flask容器 = 3)

去ping flask，docker会做负载均衡，就是每次ping，返回3个flask中之一



-----------------------------

##### 环境变量

1、创建.env文件 内容：REDIS_PASSWORD=abc123

2、在docker-compose.yml中使用

```yaml
environment:
	- REDIS_PASS=$(REDIS_PASSWORD)
```

验证配置文件：

`docker-compose config`

----------

健康检查

---------------------

‼️Docker compose是单机的，不建议在生产环境使用

 Docker swarm是用来做多机器容器编排的，k8s是领先地位
