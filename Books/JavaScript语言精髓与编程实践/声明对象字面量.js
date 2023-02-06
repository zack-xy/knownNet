// 字面量声明对象
// 示例：一些已声明过的变量或标识符
function getValue() {
  // ......
}

// 对象字面量声明
var aObject = {
  name: 'Object Literal',
  value: 123,
  getName: function() {
    return this.name
  },
  getValue,
  get name2() {  // 使用存储器的属性
    return 'name: ' + this.name
  }
}
