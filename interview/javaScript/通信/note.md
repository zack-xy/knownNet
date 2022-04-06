#### 什么是同源策略及限制
同源策略限制从一个源（协议、域名和端口）加载的文档或脚本如何与来自另一个源的资源进行交互
这是一个用于隔离潜在恶意文件的关键的安全机制
+ Cookie、LocalStorage和IndexDB无法读取
+ DOM无法获得
+ Ajax请求不能发送
#### 前后端如何通信
+ Ajax
+ WebSocket（不受同源策略限制）
+ CORS（支持跨域）
#### 如何创建Ajax
+ XMLHttpRequest对象的工作流程
+ 兼容性处理
+ 事件的触发条件
+ 事件的触发顺序
#### 跨域通信的几种方式
+ JSONP
+ Hash
+ postMessage
+ WebSocket
+ CORS