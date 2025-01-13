---
title: js原型相关的代码及示意图
author: Zack Zheng
date: 2023/11/14 00:00
categories:
 - JavaScript
tags:
 - JavaScript
---


```js
function User(name, age, mark) {
  this.name = name
  this.age = age
  this.mark = mark
  this.commonFirends = ['马云', '马化腾', '刘强东']
  this.show = function () {
    console.log(`name: ${this.name}, age: ${this.age}, mark: ${this.mark}`)
    console.log(`共同好友: ${this.commonFirends}`)
  }
}

// ming是对象变量，等号右边通过new出来一个实例
// 在运行期间在堆中开辟对象的内存空间
const ming = new User('小明', 30, '程序员')
const hua = new User('小花', 28, '时尚达人')

ming.show()
hua.show()
```

#### 上面代码的栈堆示意图

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/对象开辟的栈堆内存图.svg" />

可以看到commonFirends被开辟多次，希望commonFirends可以复用一个，则需要原型（继承）   

+ 原型的定义：原型是js自动分配给【函数】的一个可以被所有构造函数实例对象变量共享的对象
+ __proto__在创建对象的时候js自动分配的属性，指向原型对象空间
+ 增加或者修改原型对象的属性或方法后，所有的实例或对象立即可以访问到（但创建实例后再覆盖原型除外）
+ 面试题：创建实例后再覆盖原型，实例对象无法访问到，为什么？

```js
// 什么操作呢？大概就是这种

User.prototype = {}

// 这样再覆盖原型，因为prototype指向一个新的对象，覆盖前创建的实例指向另一个对象，所以无法访问覆盖后的原型
```

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/原型对象图.svg" />

