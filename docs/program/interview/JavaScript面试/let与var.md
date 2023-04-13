---
title: let与var
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - 面向试试
tags:
 - JavaScript
 - 面试题
---

var

1.声明提升

```javascript
console.log(a)
var a = 'aaa'
```

2.没有局部作用域 

```javascript
function fn() {
  for(var i=0;i<5;i++) {
	}
	console.log(i)
}
```

3.声明覆盖

```javascript
var name = 'aaa'
var name = 'bbb'
```

