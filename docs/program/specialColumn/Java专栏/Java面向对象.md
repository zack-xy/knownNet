---
title: Java面向对象
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
---

警告⚠️：不要编写返回引用可变对象的访问器方法。如果需要，返回一个可变数据域的拷贝,应该使用clone

```java
class Employee {
    ...
    public Date getHireDay() {
        return (Date) hireDay.clone();
    }
}
```

##### final实例域

final定义实例域，大多数为基本类型，或者不可变类的域(比如String类)，对于可变的类，表示对象引用不会指示其他对象，但是这个对象可以更改

```java
class Employee {
    private final String name;
}
```

final修饰的类无法被继承，其中方法自动成为final，不包括域    
final修饰的方法无法被重写

##### 静态域(类域)

每个对象有自己的实例域的拷贝，但只有一个静态域
(下例子,1000个Employee有1000个id，但只有共享一个nextId)

```java
class Employee {
    private static int nextId = 1;
    
    private int id;
}
```

##### 静态常量

可以使用Math.PI或者这个常量

```java
public class Math {
    ...
    public static final double PI = 3.141592653589;
}
```

##### 静态方法

静态方法不能向对象操作，即没有this参数，不能访问实例域    
但是静态方法可以访问静态域，通过类名.调用    

使用静态方法的2情况：   
+ 一个方法不需要访问对象状态，其所需参数都是通过显式参数提供(例如：Math.pow)
+ 一个方法只需要访问类的静态域(例如：Employee.getNextId)

```java
public static int getNextId() {
    return nextId; // return static field
}
```

##### 方法参数

Java程序总是采用按值调用，方法得到的是所有参数值的一个拷贝，方法不能修改传递给它的任何参数变量的内容。如果是基本数据类型，则不会修改传入的基本类型，如果是引用类型，则传入的是对象引用，也就是对象引用的值是不能修改的（即不能修改指向其他对象）


##### 重载

多个方法，有相同的名字，不同的参数    
要完整的描述一个方法，需要指出方法名及参数类型，这叫做方法的签名    
返回类型不是方法签名的一部分     

##### 显式域初始化

最好给域初始化值，良好的习惯

1.在构造器中设置值  
在构造器中可以使用this()调用其他构造器
2.在声明中赋值  
```java
class Employee {
    privte static int nextId;
    private int id = assignId();
    ...
    private static int assignId() {
        int r = nextId;
        nextId++;
        return r;
    }
    ...
}
```
3.初始化块

```java
class Employee {
    private static int nextId;
    
    private int id;
    private String name;
    private double salary;
    
    // 初始化块
    {
        id = nextId;
        nextId++;
    }
    
    public Employee(String n, double s) {
        name = n;
        salary = s;
    }
    
    public Employee() {
        name = "";
        salary = 0;
    }
}
```

对于静态域也可以使用静态初始化块

```java
static {
    Random generator = new Random();   
    nextId = generator.nextInt(10000);  // 小于10000的随机整数
}
```


##### 类设计技巧

+ 1.一定要保证数据私有   
+ 2.一定要对数据初始化   
+ 3.不要在类中使用过多的基本类型   
+ 4.不是所有的域都需要独立的域访问器和域更改器   
+ 5.将职责过多的类进行分解   
+ 6.类名和方法名要能够体现它们的职责   
+ 7.优先使用不可变的类（更改对象的问题在于，如果多个线程试图同时更新一个对象，就会发生并发更改。结果无法预料）   



