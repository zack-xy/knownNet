---
title: Java如何编写一个equals方法
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
---

1. 显示参数命名为otherObject，稍后需要将它转换成另一个叫做other的变量
2. 检测this与otherObject是否引用同一个对象
3. 检测otherObject是否为null，如果为null，返回false
4. 比较this与otherObject是否属于同一个类
5. 将otherObject转换为相应的类类型变量
6. 对所有需要比较的域进行比较


```Java
public boolean equals(Object otherObject) {  
  if(this == otherObject) return true;  
  if(otherObject == null) return false;  
  if(getClass() != otherObject.getClass()) return false;  
  Employee other = (Employee) otherObject;  
  return name.equals(other.name) && salary == other.salary && hireDay.equals(other.hireDay);  
}
```


```Java
package chapter5_4;  
  
import java.time.*;  
import java.util.Objects;  
  
public class Employee {  
private String name;  
private double salary;  
private LocalDate hireDay;  
  
public Employee(String name, double salary, int year, int month, int day) {  
  this.name = name;  
  this.salary = salary;  
  hireDay = LocalDate.of(year, month, day);  
}  
  
public String getName() {  
  return name;  
}  
  
public double getSalary() {  
  return salary;  
}  
  
public LocalDate getHireDay() {  
  return hireDay;  
}  
  
public void raiseSalary(double byPercent) {  
  double raise = salary * byPercent / 100;  
  salary+=raise;  
}  
  
public boolean equals(Object otherObject) {  
  if(this == otherObject) return true;  
  if(otherObject == null) return false;  
  if(getClass() != otherObject.getClass()) return false;  
  Employee other = (Employee) otherObject;  
  return Objects.equals(name, other.name) && salary == other.salary && Objects.equals(hireDay, other.getHireDay());  
}  
  
public int hashCode() {  
  return Objects.hash(name, salary, hireDay);  
}  
  
public String toString() {  
  return getClass().getName() + "[name=" + name + ",salary=" + ",hireDay=" + hireDay + "]";  
}  
  
}
```

```Java
package chapter5_4;  
  
public class Manager extends Employee{  
private double bonus;  
  
public Manager(String name, double salary, int year, int month, int day) {  
  super(name, salary, year, month, day);  
  bonus = 0;  
}  
  
public double getSalary() {  
  double baseSalary = super.getSalary();  
  return baseSalary + bonus;  
}  
  
public void setBonus(double bonus) {  
  this.bonus = bonus;  
}  
  
public boolean equals(Object otherObject) {  
  if(!super.equals(otherObject)) return false;  
  Manager other = (Manager) otherObject;  
  return bonus == other.bonus;  
}  
  
public int hasCode() {  
  return super.hashCode() + 17 * new Double(bonus).hashCode();  
}  
  
public String toString() {  
  return super.toString() + "[bonus=" + bonus + "]";  
}  
}
```

