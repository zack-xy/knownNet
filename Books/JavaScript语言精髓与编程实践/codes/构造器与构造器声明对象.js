// 对象的声明和实例创建

// 1. 使用构造器创建对象实例
// 语法：new  Constructor[(arguments)]
// 构造器可以是普通函数也可以是js内置的或者宿主程序扩展的构造器
// 按照惯例，构造器函数名首字母应该大写


// 可以被对象方法引用的外部函数
function getValue() {
  return this.value
}

// 构造器函数
function MyObject() {
  this.name = 'Object1'
  this.value = 123
  this.getName = function() {
    return this.name
  }

  this.getValue = getValue
}

// 使用new运算符，实现实例创建
var aObject = new MyObject()
// 没有参数也可以写作obj = new MyObject


/*************************************** */
// 将构造器作为普通函数来使用
// 示例：将foo()视为普通函数
function foo() {
  var data = this // 这里暂存了this，这是一个技巧（保存私有数据）
  return {}
}
var obj = new foo()
// obj也会被赋值为一个对象，但它并不是由new运算产生的对象实例
// 而是foo函数中返回的对象字面量
// 使用这种方法，只能返回引用类型的值，不能返回值类型
// 如果返回值类型，会被忽略，依然使用原来的this引用,如下


function foo(a) {
  this.value = a
  return 'aaa'
}

var obj = new foo('bbb')

