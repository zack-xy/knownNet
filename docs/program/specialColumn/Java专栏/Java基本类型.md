---
title: Java基本类型
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
 - 后端
---


#### Java中有8种基本类型（4种整型、2种浮点、1种Unicode编码字符char、一种布尔boolean）   


##### 4种整型：  
> byte 1字节  
> short 2字节  
> int 4字节   
> long 8字节   

> int最常用，最大正负20亿、byte和short一般用于特定场合比如底层的文件处理或者需要控制占用存储空间量的大数组、long整型有一个后缀L或者l     


> 十六进制：前缀0x或0X  
> 八进制：前缀0  
> 二进制：前缀0b或0B

##### 2种浮点：

> float 4字节   
> double 8字节

一般都用double双精度，很少用float，float后缀f或者F，默认是double

正无穷大: Double.POSITIVE_INFINITY     
负无穷大：Double.NEGATIVE_INFINITY   
不是一个数字(NaN)：Double.NaN  

⚠️：浮点数不能用于金融计算中，会有误差，跟js计算误差一样的，需要用BigDecimal类



##### 1种char： 

Unicode字符，字面量值需要用''单引号括起来，'A'和"A"不一样，'A'是编码值为65所对应的字符常量，"A"是包含一个字符A的字符串。   

char类型可以用十六进制表示，范围从\u0000~\Uffff

建议不使用char


##### 1种boolean:

用于逻辑判断，整数值和布尔值之间不能进行相互转换(C++中0表示false，非0表示true，在Java里不行)

#### 声明常量

```java
final double CM_PER_INCH = 2.54;  // 使用final声明常量，常量一般全大写

public static final double CM_PER_INCH = 2.54;   // 声明在类中，static表示类的所有方法都可以用这个常量，public表示，可以在其他类中通过【类名.CM_PER_INCH】访问这个常量
```


#### 数值转换

无精度丢失：   
byte -> int   
short -> int  
char -> int  
int -> long  
int -> double   
float -> double   

有精度丢失：    

long -> double   
long -> float   
int -> float  


##### 强制类型转换

```java
double x = 9.977;
int nx = (int) x;
```


#### 枚举类型


```java
enum Size { SMALL, MEDIUM, LARGE, EXTRA_LARGE };

Size s = Size.MEDIUM;

```


#### 字符串

Java没有内置的字符串类型，Java字符串就是unicode字符序列     
标准Java类库中提供了预定义类String，每一个用双引号括起来的字符串都是String类的一个实例  
不能直接修改Java字符串中的字符，所以String类对象称为不可变字符串    


##### 构建字符串

连接字符串的效率比较低，每次连接字符串，都会构建一个新的String对象

如果需要许多小段字符串构建一个新的字符串，按以下步骤进行


```java

StringBuilder builder = new StringBuilder();

builder.append(ch);
builder.append(str);  // 拼接字符

String completedString = builder.toString();

```
