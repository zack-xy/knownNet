---
title: Java反射
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
 - 后端
---


能够分析类能力的程序称为反射   
（使用它的主要人员是工具构造者，不是应用程序员）

反射机制可以用来： 
+ 在运行时分析类的能力   
+ 在运行时查看对象，例如，编写一个toString方法供所有类使用   
+ 实现通用的数组操作代码   
+ 利用Method对象，类似C++中的函数指针    


在程序运行期间，Java运行时系统始终为所有对象维护一个被称为运行时的类型标识     
保存这些信息的类被称为Class，Object类中的getClass()方法返回一个Class类型的实例  
如同用一个Employee对象表示一个特定的雇员属性一样，一个Class对象表示一个特定的类的属性。   


```Java
package reflection;  
  
import java.util.*;  
import java.lang.reflect.*;  
  
public class ReflectionTest {  
public static void main(String[] args) {  
String name;  
if(args.length > 0) name = args[0];  
else {  
Scanner in = new Scanner(System.in);  
System.out.println("Enter class name (e.g. java.util.Date): ");  
name = in.next();  
}  
  
try {  
Class cl = Class.forName(name);  
Class supercl = cl.getSuperclass();  
String modifiers = Modifier.toString(cl.getModifiers());  
if(modifiers.length() > 0) System.out.print(modifiers + " ");  
System.out.print("class " + name);  
if(supercl != null && supercl != Object.class) System.out.print(" extends " + supercl.getName());  
System.out.print("\n{\n");  
printConstructors(cl);  
System.out.println();  
printMethods(cl);  
System.out.println();  
printFields(cl);  
System.out.println("}");  
} catch (ClassNotFoundException e) {  
e.printStackTrace();  
}  
System.exit(0);  
}  
  
public static void printConstructors(Class cl) {  
Constructor[] constructors = cl.getDeclaredConstructors();  
  
for(Constructor c : constructors) {  
String name = c.getName();  
System.out.print(" ");  
String modifiers = Modifier.toString(c.getModifiers());  
if(modifiers.length() > 0) System.out.print(modifiers + " ");  
System.out.print(name + "(");  
  
Class[] paramTypes = c.getParameterTypes();  
for(int j=0;j<paramTypes.length;j++) {  
if(j>0) System.out.print(", ");  
System.out.print(paramTypes[j].getName());  
}  
System.out.println("):");  
}  
}  
  
public static void printMethods(Class cl) {  
Method[] methods = cl.getDeclaredMethods();  
  
for(Method m: methods) {  
Class retType = m.getReturnType();  
String name = retType.getName();  
  
System.out.print(" ");  
String modifiers = Modifier.toString(m.getModifiers());  
if(modifiers.length() > 0) System.out.print(modifiers + " ");  
System.out.print(retType.getName() + " " + name + "(");  
Class[] paramsTypes = m.getParameterTypes();  
for(int j=0;j<paramsTypes.length;j++) {  
if(j>0) System.out.print(", ");  
System.out.print(paramsTypes[j].getName());  
}  
System.out.println(");");  
}  
}  
  
public static void printFields(Class cl) {  
Field[] fields = cl.getDeclaredFields();  
  
for(Field f:fields) {  
Class type = f.getType();  
String name = f.getName();  
System.out.print(" ");  
String modifiers = Modifier.toString(f.getModifiers());  
if(modifiers.length() > 0) System.out.print(modifiers + " ");  
System.out.println(type.getName() + " " + name + ";");  
}  
}  
}
```
