---
title: 手写js高阶函数
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - JavaScript专栏
tags:
 - JavaScript
---

#### forEach的实现
考虑forEach的使用，传入的函数callback，回调第1个参数是数组的项，第2个参数是索引
```javascript
Array.prototype.myForEach = function(callback) {
    var len = this.length
    if(typeof callback !== 'function') {
        throw new Error('must be function')
    }
    for(var i=0;i<len;i++) {
        callback.call(this, this[i], i)
    }
}
```

#### map的实现
map的实现基本和forEach相同，但是map有返回，返回一个新的数组，是callback处理后的数组
```javascript
Array.prototype.myMap = function(callback) {
    var len = this.length
    var arr = []
    if(typeof callback !== 'function') {
        throw new Error('must be function')
    }
    for(var i=0;i<len;i++) {
        arr.push(callback.call(this, this[i], i))
    }
    return arr
}
```

#### reduce的实现

```javascript
Array.prototype.myReduce = function(fn, init) {
    var i = 0
    var len = this.length
    var pre = init
    if(init == undefined) {
        pre = this[0]
        i = 1
    }
    for(i;i<len;i++) {
        pre = fn.call(this, pre, this[i], i, this)
    }
    return pre
}

```

#### filter的实现

```javascript

Array.prototype.myFilter = function(fn) {
    ver _newArray = []
    var len = this.length
    for(var i=0;i<len;i++) {
        if(fn.call(this, this[i], i)) {
            if(typeof this[i] === 'object') {
                _newArray.push(Object.create(this[i]))
            } else {
                _newArray.push(this[i])
            }
        } 
    }
    return _newArray
}

```

#### 自定义实现一个高阶函数-查找属性

```javascript

function findProperty(obj, fn) {
    var _obj = Object.create(obj)
    var _propertyArr = []
    for(var item in _obj) {
        if(fn.call(this, _obj[item], item)) {
            _propertyArr.push(item)
        }
    }
    return _propertyArr
}

```

[相关文章-手写js系列](./手写js相关系列.md)
