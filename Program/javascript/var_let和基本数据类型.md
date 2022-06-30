##### var的特点：
1.函数作用域，函数退出，函数内var销毁
2.声明提升
3.可反复重复声明
4.不指定var，声明全局变量，成为window对象的属性（不建议）
###### let特点：
1.块级作用域(函数作用域子集)
2.不允许重复声明
3.不能同时声明同名的var
4.暂时性死区（在let声明之前的执行瞬间被称为“暂时性死区”）
5.全局声明let不会成为window对象的属性
6.不能进行条件式声明
const特点：
1.基本与let相同
2.声明必须要赋值
3.不能更改变量的引用

⚠️对比：
```
// var声明，函数作用域
if (true) {   
    var name = 'Matt';   
    console.log(name); // Matt 
} 
console.log(name);   // Matt 
// let 声明，块作用域
if (true) {   
    let age = 26;   
    console.log(age);   // 26 
} 
console.log(age);     // ReferenceError: age没有定义
```
```
// for循环中-var
for (var i = 0; i < 5; ++i) {   
    setTimeout(() => console.log(i), 0) 
} 
// 会输出5、5、5、5、5
console.log(i); // 5
// for循环中-let
for (let i = 0; i < 5; ++i) {     
    setTimeout(() => console.log(i), 0) 
} 
// 会输出0、1、2、3、4
console.log(i); // ReferenceError: i没有定义
// for循环中的const
let i = 0;  
for (const j = 7; i < 5; ++i) {   
    console.log(j); 
} // 7, 7, 7, 7, 7 
for (const key in {a: 1, b: 2}) {   
    console.log(key); 
} // a, b 
for (const value of [1,2,3,4,5]) {   
    console.log(value); 
} // 1, 2, 3, 4, 5
```
-----
##### 数据类型
6种基本数据类型:Number、String、Boolean、Null、Undefined、Symbol
复杂数据类型：Object
typeof操作符的值：（可以指定未声明的变量，值是undefined）
+ "undefined"表示值未定义
+ "boolean"表示值为布尔值
+ "string"表示值为字符串
+ "number"表示值为数值
+ "symbol"表示值为符号。
+ "object"表示值为对象（而不是函数）或null；
+ "function"表示值为函数
-----
null值表示一个空对象指针，typeof null为"object"
变量如果以后要保存对象，则总是建议以null初始化

-----

boolean显示转换，所有数据都能通过Boolean转换为boolean
空字符串" "、0、NaN、null、undefined转换为false，其他为true,适用于if()判断

-----

##### number类型

八进制：以0开头（严格模式：0o）

十六进制：0x开头

存储浮点值使用的内存空间是存储整数值的两倍，所以ECMAScript总是想方设法把值转换为整数
如果小数点后没有数字或为0，则就会转换为整数

科学计数法：写的字母e，再加上一个要乘的10的多少次幂
isFinite()函数，判断是否是有限值
Number.NEGATIVE_INFINITY => Infinity
Number.POSITIVE_INFINITY => -Infinity
NaN:不是数值，使用isNaN()函数判断，如果可转换为数值，则为false，否则为true

-----

##### 模板字面量标签函数
标签函数会接收被插值记号分隔后的模板和对每个表达式求值的结果
```
let a = 6; 
let b = 9; 
function simpleTag (strings, ...expressions) { 
    console.log(strings); 
    for (const expression of expressions) { 
        console.log(expression); 
    } 
    return 'foobar'; 
} 
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
// [ "", " + ", " = ", ""]
// 6
// 9 
// 15
```