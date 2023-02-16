---
title: js中的Date类型相关
author: Zack Zheng
date: 2022/11/09 09:51
categories:
 - 大海拾遗
tags:
 - JavaScript
---

### 常见引用类型
#### Date
常见方法：
1.Date.parse()方法接收一个表示日期的字符串参数，尝试将这个字符串转换为表示该日期的毫秒数
参数：月/日/年”，如"5/23/2019"、月名日, 年”，如"May 23, 2019"、周几月名日年时:分:秒时区”，如"Tue May 23 2019 00:00:00 GMT-0700"；
2.Date.UTC()方法也返回日期的毫秒表示
参数：年、零起点月数（1月是0，2月是1，以此类推）、日（1~31）、时（0~23）、分、秒和毫秒。这些参数中，只有前两个（年和月）是必需的。如果不提供日，那么默认为1日。
3.Date.now()方法，返回表示方法执行时日期和时间的毫秒数
4.new Date().toLocaleString() // "2021/10/20 下午5:05:13"  1⃣️
5.new Date().toString() // "Wed Oct 20 2021 17:06:17 GMT+0800 (中国标准时间)" 1⃣️
6.new Date().valueOf() // 返回日期的毫秒表示
可用于确保日期先后的一个简单方式(无法判等???)
```
let date1 = new Date(2019, 0, 1);    // 2019年1月1日
let date2 = new Date(2019, 1, 1);    // 2019年2月1日
let date3 = new Date(date1.getTime()) 
console.log(date1 < date2); // true 
console.log(date1 > date2); // false 
console.log(date1 == date3); // false 
console.log(date1 == date3); // false 
console.log(date1.valueOf() == date3.valueOf()) // true
```
7.new Date().toDateString()  // "Wed Oct 20 2021" 1⃣️
8.new Date().toTimeString()  // "17:18:12 GMT+0800 (中国标准时间)" 1⃣️
9.new Date().toLocaleDateString() // "2021/10/20" 1⃣️
10.new Date().toLocaleTimeString() // "下午5:19:58" 1⃣️
11.new Date().toUTCString()  // "Wed, 20 Oct 2021 09:20:32 GMT" 1⃣️
1⃣️：因浏览器而异。因此不能用于在用户界面上一致地显示日期
#### RegExp
匹配模式的标记
g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。
i：不区分大小写，表示在查找匹配时忽略pattern和字符串的大小写。
m：多行模式，表示查找到一行文本末尾时会继续查找。
y：粘附模式，表示只查找从lastIndex开始及之后的字符串。
u：Unicode模式，启用Unicode匹配。
s：dotAll模式，表示元字符.匹配任何字符（包括\n或\r）
RegExp实例是有属性的
