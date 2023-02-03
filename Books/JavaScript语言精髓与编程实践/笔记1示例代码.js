var str = 'abcde'
var obj = new String(str)

function newToString() {
  return 'hello world'
}

function func(val) {
  val.toString = newToString
}


// 示例1:传入值
func(str)
console.log(str)  // 'abcde'

// 示例2:传入引用
func(obj)
console.log(String(obj)) // 'hello world'




// 每行结尾使用\
var aTextBlock = '\
adasdsasadsadsadasdsadsa\
 \
123456789\
 \
+-*/'


// 模板字符串，避免换行符，每行末尾使用\
var text2 = `3ewqeqe\
weqwewq\
1233445\
wqewqe\
ewqeqw\
ewqewq`
