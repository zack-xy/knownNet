---
title: Mock服务器报跨域
lang: en-US
date: 2023/03/23 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---


报错：`The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request's credentials mode is 'include'`

服务器后台使用(node)koa，跨域处理使用了koa2-cors  
经检索原因是：   
前端请求中携带了安全信息，即axios.defaults.withCredentials= true
后端supportsCredentials一般为false，后端需要修改res.addHeader("Access-Control-Allow-Credentials","true");
就koa2-cors而言查阅npm需要配置credentials为true
以及origin   
修改配置如下   

```js
const cors = require('koa2-cors')
app.use(cors({
  origin(ctx) {
    return ctx.request.header.origin
  },
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
```
当然，也可以修改前端配置  

```js
const service = axiom.create({
  baseURL: '',
  withCredentials: false,
  timeout: 30000,
})
```
