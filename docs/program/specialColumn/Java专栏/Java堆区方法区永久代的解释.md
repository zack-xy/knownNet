---
title: Java堆区方法区永久代的解释
author: Zack Zheng
date: 2023/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
---

##### Java程序内存划分

###### 线程私有

+ 程序计数器        
记录当前线程执行的字节码指令地址，唯一无OOM(OutOfMemoryError)区域     
Java方法执行时：存储指令地址     
Native方法执行时：值为undefined      
+ Java虚拟机栈        
存储方法调用的栈帧（局部变量表，操作数栈等）      
+ 本地方法栈        
JVM调用Native方法服务，功能类似虚拟机栈        

###### 线程共享     

+ 堆     
存储对象实例和数组，是垃圾回收的主要区域     
`新生代`: 包括Eden区和两个Survivor区(s0/s1)，使用复制算法回收      
`老生代`: 存放长期存活对象，采用标记-整理算法      

+ 方法区     
存储类信息、常量、静态变量等     
`JDK 7及之前`: 永久代实现       
`JDK 8+`: 元空间替代，使用本地内存      

+ 运行时常量池     
方法区的一部分，存放编译期生成的常量   

###### 直接内存        
通过NIO的`ByteBuffer.allocateDirect()`分配，不受JVM堆限制        
需手动管理，溢出时抛出`OutOfMemoryError: Direct buffer memory`         


<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/Java堆区方法区永久代的解释.png"></simple-img>

