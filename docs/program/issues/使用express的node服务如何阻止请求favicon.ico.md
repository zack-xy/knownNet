---
title: Expressjs阻止GET/favicon.ico
lang: en-US
date: 2023/02/21 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

我本身是没有遇到这个问题的   
因为帮助别人解决问题时发现的，因为后续可能不会再遇到，这里记录一下，以防找不到   


> 在每个请求中，我的服务器都会接收到/favicon.ico 的 GET 请求，即使它是不包含 html 文件的 REST api。为什么会发生这种情况？如何阻止此请求？

默认情况下，浏览器会尝试从主机名的根目录请求 /favicon.ico，以便在浏览器选项卡中显示图标。

如果您想避免此请求返回 404，您可以:

1. 提供一个 favicon.ico 文件，该文件位于您网站的根目录。
2. 使用模块，例如 serve-favicon将请求指向特定文件。
3. 捕获 favicon.ico 请求并发送 204 No Content 状态:
`app.get('/favicon.ico', (req, res) => res.status(204));`
