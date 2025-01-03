---
title: Dockerfile构建Docker镜像一
author: Zack Zheng
date: 2024/01/02 13:48
categories:
  - Docker专栏
tags:
  - Docker
---

+ Dockerfile是用于构建docker镜像的文件
+ Dockerfile里包含了构建镜像所需的“指令”   
+ Dockerfile有其特定的语法规则

### 根据dockerfile构建镜像

在ubuntu:21.04中运行hello.py代码

1、Dockerfile

```dockerfile
FROM ubuntu:22.04
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y python3.10 python3-pip python3.10-dev
ADD hello.py /
CMD ["python3", "/hello.py"]
```

（CMD就是容器启动默认启动的程序）

2、hello.py

```python
print("hello docker")
```

3、以上2个文件在同一文件夹下，运行

`docker image build -t hello .`

(-t就是tag，名字，这里的名字是hello，后面可以跟版本，比如hello:1.0，什么都不加，默认是latest，最后面的点. 是当前文件夹的意思 )


### 上传镜像到Docker hub

#### 1. 将镜像的名字改成规范的【用户名/镜像名:版本】

##### 方法一：重新生成镜像，需要符合镜像名规范

`docker image build -t zackzheng94/hello:1.0 .`

##### 方法二：改已生成的镜像的tag

`docker image tag hello zackzheng94/hello:1.0`

#### 2. 将镜像推送到docker hub

##### 登陆docker hub

`docker login`

##### 推送

`docker image push zackzheng94/hello:1.0`



