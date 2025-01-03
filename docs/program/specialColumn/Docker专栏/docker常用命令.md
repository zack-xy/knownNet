---
title: Docker常用命令
author: Zack Zheng
date: 2023/03/24 15:59
categories:
 - Docker专栏
tags:
 - Docker
---

### 帮助启动类命令
== systemctl是Centos中管理后台运行的服务 ==
+ 启动Docker: `systemctl start docker`
+ 停止Docker: `systemctl stop docker`
+ 重启Docker: `systemctl restart docker`
+ 查看Docker状态: `systemctl status docker`
+ 开机启动: `systemctl enable docker`
+ 查看Docker概要信息: `docker info`
+ 查看Docker总体帮助文档: `docker --help`
+ 查看Docker命令帮助文档: `docker 具体命令 --help`


### 镜像命令

+ 列出本地主机上的镜像：`docker image ls`  
  OPTIONS:  
  -a: 列出本地所有镜像（含历史镜像层）  
  -q: 只显示镜像id  

+ 查看镜像的详细信息：`docker image inspect 镜像id`

+ 查某个镜像：`docker image search 某个xx镜像名字 `

  OPTIONS: 

  --limit: 只列出N个镜像，默认25个 

+ 拉某个镜像: `docker image pull 某个xx镜像名字`

  docker pull 镜像名字[:TAG]，比如docker pull redis:6.0.8

  没有TAG就是最新版，等价于docker pull 镜像名字:lates

+ 查看镜像/容器/数据卷所占的空间：`docker image system df`

+ 删除镜像：`docker image rm 镜像id`

  -f 强制删除

  删除全部：docker image rm -f $(docker images -qa)   // 注释：$()里面是【镜像命令】第一个列出了所有镜像只显示镜像id 

  :question:什么是虚悬镜像:question::就是Repository(仓库名)和Tag(标签)都是`<none>`,这种镜像没什么用，可以删除

 + 删除所有没有使用的镜像：`docker image prune -a`   

+ 保存镜像
  `docker image save nginx:1.20.0 -o nginx.image`      
  (-o表示导出，nginx.image是导出的文件名)

+ 导入镜像
  `docker image load -i .\nginx.image`    
  (-i表示导入)  

+ 容器生成镜像
`docker container commit container的id 镜像:版本`


### 容器命令

#### 命令基本格式：`docker container 操作`     
（container可以省略，最好写上，清晰一些）   

+ 新建+启动容器：`docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]`

  OPTIONS: 

  --name="容器新名字"

  -d: 后台运行容器并返回容器id，即启动守护式容器（后台运行）  

  将后台运行的容器attach到前台:`docker attach 容器id`   （不推荐，ctrl+c会退出容器的运行）

  -i:  以交互模式运行容器，通常与-t同时使用

  -t：为容器重新分配一个伪输入终端，通常与-i一起使用（启动交互式容器）

  (例子：docker run -it --name=my-ubuntu ubuntu /bin/bash)

  -P：随机端口映射

  -p：指定端口映射.  -p 8080:80

+ 列出正在运行的容器：`docker container ps [OPTIONS]`

  OPTIONS: 

  -a:  列出当前所有正在运行的容器+历史运行过的

  -l:  显示最近创建的容器

  -n：显示最近n个创建的容器

  -q： 静默模式，只显示容器编号 
  

+ 退出容器

  + exit   run进去容器，exit退出，容器停止
  + ctrl+p+q     run进去容器,容器不停止

+ 启动停止的容器：`docker start 容器ID或者容器名 `

+ 重启容器： `docker restart 容器ID或者容器名`

+ 停止容器: `docker stop 容器ID或者容器名`    
一次性停止所有的容器：`docker container stop $(docker container ps -aq)`    
（`docker container ps -aq`会列出所有容器的id）    

+ 强制停止容器: `docker kill  容器ID或者容器名`

+ 删除已停止的容器:  `docker rm 容器ID`

  一次性删除多个容器：

  `docker container rm -f $(docker ps -a -q)`   
  rm不能删除正在运行的容器，-f表示强制删除。   

+ 清理所有已停止的容器: `docker system prune -f`  

+ 查看容器网络

  `docker network ls`

  `docker network inspect 容器名`

+ 查看容器日志： `docker logs 容器ID `   
  (动态跟踪logs:`docker logs -f 容器ID`)

+ 查看容器内运行的进程： `docker top 容器ID `

+ 查看容器内部细节： `docker inspect 容器ID  ` 

+ 进入正在运行的容器并以命令行交互： 

  + `docker exec -it 容器ID sh`   （打开新的终端，启动新的进程，使用exit退出不会导致容器停止  ）
  + `docker attach 容器ID`   （直接进入容器启动的命令终端，不会启动新的进程，用exit退出会导致容器停止）

+  从容器内拷贝文件到主机 ： `docker cp 容器ID:容器内路径 目的主机路径`

+ 导入和导出容器：  

  `docker export 容器ID > 文件名.tar`

  `cat 文件名.tar | docker import  - 镜像用户/镜像名：镜像版本号 `
  
---------------------------------------------------------------

### Volume命令

+ 列出volume: `docker volume ls`
+ 查看具体信息：`docker volume inspect volume的名字`
+ 删除未使用的所有volume：`docker volume prune`

---------------------------------------------------------------
### 运行`docker container run`后发生了什么？

下面以这一行语句为例：   
`docker container run -d -p 80:80 --name webhost nginx`    

+ 1. 在本地查找是否有nginx这个image镜像     
+ 2. 去远程image registry查找nginx镜像(默认的registry是Docker Hub)     
+ 3. 下载最新版本的nginx镜像（nginx:latest默认）   
+ 4. 基于nginx镜像来创建一个新的容器，并且准备运行    
+ 5. docker engine分配给这个容器一个虚拟ip地址    
+ 6. 在宿主机上打开80端口并把这个容器的80端口转发到宿主机上   
+ 7. 启动容器，运行指定的命令（这里是一个shell脚本去启动nginx）      


---------------------------------------------------------------

### docker-compose是啥

Compose 项⽬是 Docker 官⽅的开源项⽬，负责实现对 Docker 容器集群的快速编排

允许⽤户通过⼀个单独的 docker-compose.yml 模板⽂件（YAML 格式）
来定义⼀组相关联的应⽤容器为⼀个项⽬

```yaml
# Use root/example as user/password credentials
version: '3.1'

services:

  db:
    image: mysql
    # NOTE: use of "mysql_native_password" is not recommended: https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password
    # (this is just an example, not intended to be a production configuration)
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    ports:
      - 3090:3306 # 前面一个端口是宿主机的端口，后面一个是adminer镜像端口, adminer是一个mysql管理客户端

  adminer:
    image: adminer
    restart: always
    ports:
      - 8090:8080 # 前面一个端口是宿主机的端口，后面一个是adminer端口
```



运行`docker-compose up`启动多个镜像（参数-d后台启动）
