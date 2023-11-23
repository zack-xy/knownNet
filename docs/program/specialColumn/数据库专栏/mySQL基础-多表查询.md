---
title: mySQL基础-多表查询
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - 数据库专栏
tags:
 - 数据库
 - MySQL
---


多表查询需要连接条件

--------

where 表1.field=表2.field

(field是2表关联字段)

如果要列出来关联字段，要指明哪个表，出于优化角度，多表查询都指明哪个表

因为写表名，sql太长，可以给表起别名

select 表1 别名,表2 别名2

----------


自连接也是看做2张表（逻辑上）

内连接：两表匹配的行 不包含不匹配的行

外连接：除了匹配的，也包含左表或右表不匹配的行（左外，右外，满外）

sql92语法：字段(+)
sql99语法：join on

内连接：
SELECT last_name,department_name,city
FROM employees e JOIN departments d
ON e.department_id = d.department_id
JOIN locations l
ON d.location_id = l.location_id


外连接；(左外连接，右RIGHT,满FULL) (OUTER可以省略)
SELECT last_name,department_name,city
FROM employees e LEFT OUTER JOIN departments d
ON e.department_id = d.department_id

FULL JOIN MySQL不支持

-------

关键字:UNION / UNION ALL
（要求列数和列的类型一致）
合并两个集合的结果(尽量使用UNION ALL)，因为UNION有去重的步骤，效率低一点儿

7种连接：
内连接
左外连接
右外连接
左外去交集
SELECT last_name,department_name,city
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id
WHERE d.department_id IS NULL;
右外去交集
满外连接（左外连接 UNION ALL 右外去交集）
满连接去交集（左外去交 UNION ALL 右外去交）

-----------



sql99语法新特性：

自然连接：NATURAL JOIN
查询表中所有相同的字段等值

连接USING(department_id)相当于：表1.department_id = 表2.department_id


