---
title: Java基础
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
---

#### Object通用方法
##### equals和hashCode
##### toString示例
##### clone示例
##### 浅拷贝
##### 深拷贝
##### clone()替代方案
##### 代码示例

<Suspense>
  <my-codes repo="o-bricks" path="src/example/ObjectCommonMethod.java" lang="java" lazy/>
</Suspense>

--------------------------------------

#### 继承的演示
##### 代码示例

<Suspense>
  <my-codes repo="o-bricks" path="src/example/extend_example.java" lang="java" lazy/>
</Suspense>


--------------------------------------

#### 类实现接口的演示
##### 代码示例

<Suspense>
  <my-codes repo="o-bricks" path="src/example/InterfaceImplementExample.java" lang="java" lazy/>
</Suspense>

--------------------------------------

#### 单例模式演示
##### 代码示例

<Suspense>
  <my-codes repo="o-bricks" path="src/example/singleCase.java" lang="java" lazy/>
</Suspense>

--------------------------------------

#### 泛型
##### 泛型的上限和下限
##### 多个泛型限制
##### 泛型方法、泛型类
##### 泛型数组

##### 代码示例

<Suspense>
  <my-codes repo="o-bricks" path="src/example/generics/GenericsRange.java" lang="java" lazy/>
</Suspense>

<Suspense>
  <my-codes repo="o-bricks" path="src/example/generics/GenericsDemo.java" lang="java" lazy/>
</Suspense>

<Suspense>
  <my-codes repo="o-bricks" path="src/example/generics/GenericsArray.java" lang="java" lazy/>
</Suspense>

--------------------------------------

#### 注解

作用：      
+ 生成文档 (生成javadoc文档)        
+ 编译检查          
+ 编译时动态处理 （编译时通过代码里标识的元数据动态处理，例如动态生成代码）         
+ 运行时动态处理 （运行时通过代码里标识的元数据动态处理，例如使用反射注入实例）          

分类：    
+ Java自带的标准注解：包括`@override`,`@Deprecated`,`@SuppressWarnings`     
+ 元注解：用于定义注解的注解    
JDK1.5提供4个:`@Target`、`@Retention`、`@Documented`、`@Inherited`      
JDK1.8提供2个：`@Repeatable`、`@Native`   
+ 自定义注解：自定义注解，可用元注解对自定义注解进行注解      

##### Java自带的标注注解（内置注解）
##### 元注解（JDK1.5/4个，JDK1.8/2个）
##### 注解与反射 （没有演示代码，有一揽子API，不一一列了）
##### 自定义注解
##### JSR308（类型注解）
扩展了注解使用范围，可以应用于类型本身(@NonNull、@Nullable、@Immutable、@ThreadSafe、@GuardedBy)
##### [注解的本质和原理CSDN](https://blog.csdn.net/qq_20009015/article/details/106038023)


##### 代码示例

<Suspense>
  <my-codes repo="o-bricks" path="src/example/annotations/demo.java" lang="java" lazy/>
</Suspense>

<Suspense>
  <my-codes repo="o-bricks" path="src/example/annotations/metaAnnotation.java" lang="java" lazy/>
</Suspense>

<Suspense>
  <my-codes repo="o-bricks" path="src/example/annotations/userDefined.java" lang="java" lazy/>
</Suspense>
