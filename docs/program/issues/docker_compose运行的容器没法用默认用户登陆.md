---
title: docker_compose运行的PostgreSQL容器没法用默认用户登陆
lang: en-US
date: 2025/07/01 16:55:00
editLink: true
categories: 
  - 困难冲冲
tags: 
  - Bug
---

我是使用docker compose跑的，最开始没有设置`POSTGRESQL_POSTGRES_PASSWORD`     
默认密码是空，我尝试登陆了一下，登陆不上去，所以就修改了一下，设置了`POSTGRESQL_POSTGRES_PASSWORD`    
发现还是登陆不上去，报`password authentication failed for user "postgres"`     
原因是我这里使用的是绑定挂载，`docker compose down -v`删不掉卷，需要自己手动删除     
手动清空挂载卷目录，再运行一下就好了。   
登陆`docker exec -it my_postgres psql -U postgres -W`   


