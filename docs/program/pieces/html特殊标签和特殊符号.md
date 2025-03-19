---
title: html特殊标签和特殊符号
author: Zack Zheng
date: 2021/02/05 22:36
categories:
 - 大海拾遗
tags:
 - HTML
---

---

#### 符集介绍
gb2312 国标6763个汉字
BIG5 繁体中文
GBK 全部中文，国标扩展 gb2312扩展包含繁体
UTF-8基本包含全世界所有国家包含的字符

---

#### 横线、换行、加粗、删除线、下划线标签

```
<hr />   
横线
<br />   
换行
<b></b><strong></strong>   
加粗   (XHTML都推荐用后面的)
<i></i> <em></em>                
倾斜
<s></s><del></del>               
删除线
<u></u><ins></ins>               
下划线
<a href="#"></a>                     
空链接  target="_blank" 新窗口
<base target="_blank"/>  
写在<head></head>中，使全体链接都新窗口打开
```

---

#### 锚点定位

```
1、使用相应的id名标注跳转目标的位置
<div id="zackTest">网页内容</div>

2、使用<a href="#zackTest">锚点链接</a>  
href指向id
```


---
#### 特殊符号

```
不换行空格：&nbsp; （空白键）
半角空格：&ensp;    （二分之一em宽）
全角空格：&emsp;    （一个em宽）
窄空格： &thinsp;      （六分之一em宽）
零宽不连字：&zwnj;（不打印字符，抑制连字）
零宽连字：&zwj;      (不打印字符，使字相连)
其他空白：
空格（&#x0020;）、
制表位（&#x0009;）、
换行（&#x000A;）
回车（&#x000D;）
（&#12288;）
<小于号：&lt;
>大于号：&gt;
&和号：&amp;
¥人民币：&yen;
©版权：&copy;
®注册商标：&reg;
。摄氏度: &deg;
±正负号：&plusmn;
x乘号：&times;
➗除号：&divide;
2 平方2（上标2）：&sup2;
3 立方3（上标3）：&sup3;
```
