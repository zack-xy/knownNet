---
title: 常见的状态码/post请求与get请求的区别
author: Zack Zheng
date: 2021/09/01 09:51
categories:
 - 大海拾遗
tags:
 - Http
---

## HTTP协议类

#### HTTP协议的主要特点
1. 简单快速 
2. 灵活 
3. 无连接(连接一次就断掉)
4. 无状态(无法区分两次连接的身份)


#### HTTP报文的组成部分
1. 请求报文(请求行(http方法、页面地址、http协议、版本)、请求头(key-value)、空行(间隔请求体)、请求体)
2. 响应报文(状态行、响应头、空行、响应体)

例子：请求报文 
来自百度请求
```
//这一行是请求行，标明了GET方法，请求地址， HTTP协议，版本1.1
GET /s?ie=utf-8&newi=1&mod=1&isbd=1&isid=9c8abbd50003b69c&wd=CustomEvent&rsv_spt=1&rsv_iqid=0xa2a552d400038e82&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=0&rsv_dl=tb&oq=%2526lt%253Bustom%2526gt%253Bvent&rsv_btype=t&rsv_t=66b0IUdF14ruMj1LxB9qeluQg88MmIY10NLZZdHdcC8em0o29fY7KWd7AONfcvyhjZcr&rsv_pq=9c8abbd50003b69c&prefixsug=%2526lt%253Bustom%2526gt%253Bvent&rsp=0&bs=CustomEvent&rsv_sid=36072_36178_31253_34812_35911_36165_34584_36144_36121_35994_35317_26350_36114_22159_36061&_ss=1&clist=&hsug=&f4s=1&csor=11&_cr1=43239 HTTP/1.1
// 以下都是是请求头
Host: www.baidu.com
Connection: keep-alive
sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"
is_xhr: 1
sec-ch-ua-mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36
is_pbs: CustomEvent
Accept: */*
.....
Cookie: .....
// 浏览器network看不到空行和请求体
```

#### HTTP方法
GET  --- 获取资源
POST  --- 传输资源
PUT  --- 更新资源
DELETE  --- 删除资源
HEAD  --- 获得报文首部


#### POST和GET的区别
+ GET在浏览器回退时是无害的，而post会在此提交请求
+ GET产生的URL地址可以被收藏，而POST不可以
+ GET请求会被浏览器主动缓存，而POST不会，除非手动设置
+ GET请求只能进行url编码，而POST支持多种编码方式
+ GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留
+ GET请求在URL中传送的参数是有长度限制的，而POST没有限制
+ 对参数的数据类型，GET只接受ASCII字符，而post没有限制
+ GET比POST更不安全，因为参数直接暴露
+ GET参数通过URL传递，POST放在Request body中

#### HTTP状态码

1xx：指示信息 - 表示请求已接收，继续处理
2xx：成功 - 表示请求已被成功接收
3xx:重定向 - 要完成请求必须进行更进一步的操作
4xx:客户端错误 - 请求有语法错误或者请求无法实现
5xx: 服务器错误 - 服务器未能实现合法的请求

200: 客户端请求成功
206: 客户发送了一个带有Range头的GET请求，服务器完成了它
301: 所请求的页面已经转移至新的url
302：所请求的页面已经临时转移至新的url
304：客户端有缓冲的文档并发出了一个条件性的请求，服务器告诉客户，原来缓冲的文档还可以继续使用
400: 客户端请求有语法错误，不能被服务器理解
401: 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
403: 对被请求的页面的访问被禁止
404: 请求资源不存在
500: 服务器发生不可预期的错误原来缓冲的文档还可以继续使用
503: 请求未完成，服务器临时过载或宕机，一段时间后可能恢复正常


#### 持久连接

使用Keep-Alive模式，版本1.1支持

#### 管线化

多个响应打包返回

管线化通过持久连接完成，仅1.1版本支持
只有GET和HEAD请求可以进行管线化，POST有限制
服务器不一定支持1.1协议
