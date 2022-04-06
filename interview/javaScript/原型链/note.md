#### 创建对象有几种方法

```
// 字面量
var o1 = {name: 'o1}
var o11 = new Object({name: 'o11'})

// 构造函数
var M = function() {this.name = 'o2'}
var o2 = new M()

var P = {name: 'o3'}
var o3 = Object.create(P)
```

#### instanceof 
只要在原型链上就会是true
解决：使用constructor判断`o3.__proto__.constructor === M`