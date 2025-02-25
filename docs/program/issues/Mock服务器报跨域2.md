---
title: Mock服务器报跨域2
lang: en-US
date: 2023/07/14 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

Mock服务器使用的是CORS跨域方案

对于CORS方案，分为两种请求，一种是简单请求和非简单请求

###### 简单请求

```
（1) 请求方法是以下三种方法之一：HEAD，GET，POST
（2）HTTP的头信息不超出以下几种字段：
	Accept
	Accept-Language
	Content-Language
	Last-Event-ID
	Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
```

简单请求，又区分是否携带cookie，可以查看[上一篇文章](./Mock服务器报跨域.md)

###### 非简单请求

不满足上述情况，就是非简单请求，写这篇文章，就是因为，前端axios请求配置了Content-Type为application/json

导致Mock服务器报了跨域。这时，服务器会检查请求的域名是否在许可名单之中，服务器不能配置成`origin:'*'`，需要具体指定，可以配置白名单。

这里代码演示Mock使用的koa2-cors如何配置

```
const cors = require('koa2-cors');// CORS是一个W3C标准，全称是"跨域资源共享"

app.use(
    cors({
        origin: function(ctx) { //设置允许来自指定域名请求
            const whiteList = ['http://weipxiu.com','http://localhost:8081']; //可跨域白名单
            let url = ctx.header.referer.substr(0,ctx.header.referer.length - 1);
            if(whiteList.includes(url)){
                return url //注意，这里域名末尾不能带/，否则不成功
            }
            return 'http://localhost::3000' //默认允许本地请求3000端口可跨域
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
);
```

