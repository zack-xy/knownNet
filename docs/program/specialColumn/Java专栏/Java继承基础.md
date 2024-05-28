---
title: Java继承基础
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
---

包chapter5_2

```Java
package chapter5_2;  
  
import java.time.LocalDate;  
  
// 雇员类  
public class Employee {  
// 姓名  
private String name;  
// 薪资  
private double salary;  
// 就职日期  
private LocalDate hireDay;  
// 自增id  
private static int nextId = 1;  
  
public Employee(String n, double s, int year, int month, int day) {  
  name = n;  
  salary = s;  
  hireDay = LocalDate.of(year, month, day);  
}  
  
// 获取姓名  
public String getName() {  
  return name;  
}  
  
// 获得薪资  
public double getSalary() {  
  return salary;  
}  
  
// 获得就职日期  
public LocalDate getHireDay() {  
  return LocalDate.of(hireDay.getYear(), hireDay.getMonth(), hireDay.getDayOfMonth());  
}  
  
// 涨薪  
public void raiseSalary(double byPercent) {  
  double raise = salary * byPercent / 100;  
  salary += raise;  
}  
}
```

```Java
package chapter5_2;  
  
import chapter5_2.Employee;  
  
// 经理类，继承雇员类  
public class Manager extends Employee {  
  
// 奖金  
private double bonus;  
  
public Manager(String name, double salary, int year, int month, int day) {  
  // Manager类的构造器不能访问Employee类的私有域，通过super实现对超类构造器的调用  
  // 如果没有显式的调用超类的构造器，默认调用超类的默认(无参数)构造器。（如果超类没有无参数的默认构造器，报错）  
  super(name, salary, year, month, day);  
  bonus = 0;  
}  
  
// 设置奖金  
public void setBonus(double bonus) {  
  this.bonus = bonus;  
}  
  
// 获得薪资  
public double getSalary() {  
  // 不能直接访问Employee的私有域  
  double baseSalary = super.getSalary();  
  return baseSalary + this.bonus;  
}  
}
```

```Java
package chapter5_2;  
  
public class Test {  
public static void main(String[] args) {  
  Manager boss = new Manager("zack", 100000, 1986, 1, 5);  
  boss.setBonus(5000);  
  
  Employee[] staff = new Employee[3];  
  staff[0] = boss;  
  staff[1] = new Employee("Harry Hacker", 50000, 1989, 10, 1);  
  staff[2] = new Employee("Tony Tester", 40000, 1990, 3, 15);  
  
  // e的类型既可以是Employee，也可以是Manager  
  // 一个对象变量可以指示多种实际类型的现象被称为【多态】  
  for (Employee e: staff) {  
    // getSalary这个方法运行时，Java知道是调用Employee的getSalary还是Manager的getSalary  
    // 在运行时能够自动选择调用哪个方法的现象被称为【动态绑定】  
    System.out.println(e.getName() + " " + e.getSalary());  
  }  
}  
}
```
