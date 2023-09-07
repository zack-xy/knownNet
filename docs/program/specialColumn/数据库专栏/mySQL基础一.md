---
title: mySQL基础
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - 数据库专栏
tags:
 - 数据库
 - MySQL
---

### 基础SELECT
> SELECT 1;

相当于
> SELECT 1 FROM DUAL; #dual 伪表

### 列的别名
列名后面空格（别名e_id)
列名后面双引号（别名里面有空格）
使用AS关键字
> SELECT employe_id  e_id FROM employees;

> SELECT employe_id AS e_id FROM employees;

### 去除重复行

> SELECT DISTINCT department_id FROM employees;

- DISTINCT要放在所有列名前面
- 如果同时列了2个列名，就是去重同时2个列都相同的数据

### 空值参与运算
null值

> SELECT employee_id,salary "月工资",salary * (1+commission) * 12 "年工资" FROM employees;

这里的commission有可能是null，则计算出来的年工资就是null

> SELECT employee_id,salary "月工资",salary * (1+IFNULL(commission,0)) * 12 "年工资" FROM employees;

加了IFNULL，如果是null，则以0替换

### 着重号`
表名或者字段名与数据库关键字一样，用着重号括起来用

### 查询常数
SELECT "常数" as coporate,employee_id FROM employees;
多一列coporate，值都是“常数”

### 显示表结构
> DESCRIBE employees;  
> DDESC employees;

### 过滤数据

> SELECT * FROM employees WHERE department_id = 90;

### 运算符
算数运算符：+、-、*、/、div、%、mod
比较运算符：  
= 等于（等于返回1，否则0，隐式转换，隐式无法转换，转换为0，null参与运算就是null）    
<=> 安全等于（用来null判断，不是其他语言中的严格相等）  
<>（!=）不等于  
“<”   
">"    
"<="  
">="  
IS NULL 为空  
IS NOT NULL 不为空  
LEAST 最小值  
GREATEST 最大值  
BETWEEN AND 两值之间  
ISNULL 为空(函数)  
IN 属于  
NOT IN 不属于  
LIKE 模糊匹配  
REGEXP 正则匹配  

> SELECT name,salary,commission FROM employees WHERE commission IS NULL;  
> SELECT name,salary,commission FROM employees WHERE ISNULL(commission);  

> SELECT LEAST('g','b','t'),CREATEST('g','b','t') FROM DUAL;
> SELECT LEAST(last_name,first_name) FROM employees; # 相当于js中的sort函数
> SELECT LEAST(LENGTH(last_name),LENGTH(first_name)) FROM employees; # 比较两个字段的长度，较小长度的，列出来
> SELECT employee_id,last_name,salary FROM employees WHERE salary bbetween 6000 AND 8000; # 包含边界，也可以这样写WHERE salary>=6000 && salary<=8000


### IN / NOT IN是在离散的集合里查找
in(10,20,30)

### LIKE 模糊查询
> SELECT last_name FROM employees WHERE last_name LIKE '%a%' # %表示不确定个数的字符（0个或者多个）   
> SELECT last_name FROM employees WHERE last_name LIKE '_a%' # _表示有一个字符，这句就是查询第二个字符是a的（转义字符是\）   

> SELECT last_name FROM  employees WHERE last_name LIKE '_$_a' ESCAPE 
'$' # 自定义转义字符为$，这句表示第2个字符为下划线，第三个字符为a

LIKE使用正则：REGEXP

### 排序：ORDER BY 字段 ASC/DESC
### 分页：LIMIT 偏移 每页数目
