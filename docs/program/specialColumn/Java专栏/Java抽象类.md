---
title: Java抽象类
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
---


```Java
package chapter5_3;  
  
// 抽象类  
public abstract class Person {  
  private String name;  
  public Person(String name) {  
    this.name = name;  
  }  
    
  // 抽象方法，获取人员描述  
  public abstract String getDescription();  
    
  public String getNmae() {  
    return name;  
  }  
}
```

```Java
package chapter5_3;  
  
// 继承抽象类的类  
// 实现了所有的抽象方法，则Student本身就不是一个抽象类  
// 如果不是实现了所有抽象方法，或者自身也包含抽象方法，Student就应该是一个抽象子类  
public class Student extends Person {  
  private String major;  
  public Student(String name, String major) {  
    super(name);  
    this.major = major;  
  }  
    
  public String getDescription() {  
    return "a student majoring in " + major;  
  }  
}
```

```Java
package chapter5_3;  
  
import java.time.*;  
  
public class Employee extends Person{  
  
private double salary;  
private LocalDate hireDay;  
  
public Employee(String name, double salary, int year, int month, int day) {  
  super(name);  
  this.salary = salary;  
  hireDay = LocalDate.of(year, month, day);  
}  
  
public double getSalary() {  
  return salary;  
}  
  
public LocalDate getHireDay() {  
  return hireDay;  
}  
  
public String getDescription() {  
  return String.format("an employee with a salary of $%.2f", salary);  
}  
  
public void raiseSalary(double byPercent) {  
  double raise = salary * byPercent / 100;  
  salary+=raise;  
}  
}
```
