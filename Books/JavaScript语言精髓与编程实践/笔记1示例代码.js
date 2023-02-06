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



// 1.NaN不等于自身
NaN == NaN  // false
NaN === NaN // false
NaN != NaN  // true
NaN !== NaN // true

// 2.符号可以转换为true，但不等值于true
Boolean(Symbol())  // true
!Symbol()  // false
Symbol() == true  // false
Symbol() === true  // false


// 3. 即使字面量相同的引用类型，也是不严格相等的
({})===({}) ({})==({})  // false
(/./)=== (/./)   // false
(function() {}) === (function() {}) // false
