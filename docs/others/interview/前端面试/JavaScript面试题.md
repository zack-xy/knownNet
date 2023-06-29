---
title: JavaScript面试题
author: Zack Zheng
date: 1999/01/01 00:00
categories:
 - 面试题
tags:
 - JavaScript
---

### 以下代码输出什么

```javascript
({}+{}).length
([]+[]).length
(function(){}).length
```

{}.toString => "[object Object]" 所以第一个是30

[].toSting => "" 所以第二个是0  ( [1,2,3].toString() => "1,2,3" )

函数的长度是形参的个数，所以是0

扩展(function(){})+{} => 'function(){}[object Object]'


