---
title: Dockerfile书写指南
author: Zack Zheng
date: 2025/01/03 09:53
categories:
 - Docker专栏
tags:
 - Docker
---

#### RUN执行指令

1. 指令写一行，也就是一个run，通过&&连接指令，多个RUN会导致镜像多层，体积大

#### 文件复制和目录操作

`COPY`和`ADD`都可以把本地的一个文件复制到镜像里，如果目标目录不存在，自动创建     

`ADD`如果复制一个gzip等压缩文件的话，会自动解压缩      


`WORKDIR`用于目录切换:`WORKFIR /app`就是切换到app目录(目录不存在自动创建)   


#### 构建参数和环境变量(ARG vs ENV)

二者都可以用来设置变量   

##### ENV

```
FROM ubuntu:20.04
ENV VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
```

##### ARG

```
FROM ubuntu:20.04
ARG VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
```

##### 区别

+ ARG作用范围是Dockerfile和构建镜像的过程中（在build的时候可以动态指定值`--build-arg VERSION=2.0.0`）       
+ ENV作用范围是构建镜像和容器中(ENV作为环境变量保存在容器中)    

#### CMD容器启动命令

CMD可以用来设置容器启动时默认会执行的命令    

+ 容器启动时默认执行的命令    
+ 如果docker container run启动容器时指定了其他命令，则CMD命令会被忽略     
+ 如果定义了多个CMD，只有最后一个会被执行(`CMD ["ipinfo"]`, 也可以写成`CMD[]`因为没有指定命令，所以在运行容器时，需要指定命令，否则报错)       
  

比如ipinfo这个镜像里面写了`CMD[]`   
`docker container run --rm -it ipinfo ipinfo 8.8.8.8`   
`--rm`表示运行完删除容器    
`-it`表示进入交互式    
第一个`ipinfo`镜像的名字    
第二个`ipinfo`是指定的命令    
`8.8.8.8`是命令的参数     

#### 容器启动命令ENTRYPOINT

ENTRYPOINT也可以设置容器启动时要执行的命令    

##### 区别：

+  `CMD`设置的命令，可以在docker container run时传入其他的命令覆盖CMD，但是`ENTRYPOINT`设置的命令一定会执行
+  `ENTRYPOINT`和`CMD`可以联合使用，`ENTRYPOINT`设置执行的命令，`CMD`传递参数

联合使用的例子:

```dockerfile
FROM ubuntu:21.04
ENTRYPOINT ["echo"]
CMD []
```

##### Shell格式和Exec格式

CMD和ENTRYPOINT都支持shell格式和Exec(可执行命令)格式

+ Shell格式

  `CMD echo "hello docker"`

  `ENTRYPOINT echo "hello docker"`

  ```dockerfile
  FROM ubuntu:21.04
  ENV NAME=docker
  CMD echo "hello $NAME"
  ```

+ Exec格式

  `ENTRYPOINT ["echo", "hello docker"]`

  `CMD ["echo", "hello docker"]`

​		上面的第三种shell需要改写如下：

```dockerfile
FROM ubuntu:21.04
ENV NAME=docker
CMD ["sh", "-c", "echo hello $NAME"]
```

#### 合理应用缓存

不经常改变的放在前面，经常改动的放在后面（因为改动后，从改动的语句开始，后面的语句都不会使用缓存）

比如：

`COPY app.py /src/app.py`这一句可以放在`RUN pip install flask`后面

因为app.py文件经常改动，pip install flask可以应用缓存



#### dockerignore

`docker image build -t flask-demo .`

最后的.表示当前目录，会把当前目录的所有东西都作为上下文传给Docker守护进程，如果这个目录里有些在构建镜像时不需要的很大很多的文件，那么构建的时间就会很长

可以创建`.dockerignore`文件忽略不需要的文件\夹



#### 镜像的多阶段构建

镜像中不需要编译的环境，只需要编译的结果

两个阶段：

阶段1:  编译c代码，起名builder

阶段2:  --from=builder, 运行c代码

```dockerfile
FROM gcc:9.4 AS builder

COPY hello.c /src/hello.c

WORKDIR /src

RUN gcc --static -o hello hello.c



FROM alpine:3.13.5

COPY --from=builder /src/hello /src/hello

ENTRYPOINT [ "/src/hello" ]

CMD []
```



#### 尽量使用非root用户

+ 通过`groupadd`和`useradd`创建一个flask的组和用户

+ 通过USER指定后面的命令要以flask这个用户的身份运行

  （如下useradd的第一个flask就是groupadd创建的系统组flask，后一个flask表示用户flask）

```dockerfile
FROM python:3.9.5-slim

RUN pip install flask && \
    groupadd -r flask && useradd -r -g flask flask && \
    mkdir /src && \
    chown -R flask:flask /src

USER flask

COPY app.py /src/app.py

WORKDIR /src
ENV FLASK_APP=app.py

EXPOSE 5000

CMD ["flask", "run", "-h", "0.0.0.0"]
```

