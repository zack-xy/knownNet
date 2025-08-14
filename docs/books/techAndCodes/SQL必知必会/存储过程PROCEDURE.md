---
title: 存储过程PROCEDURE
author: Zack Zheng
date: 2025/06/19 09:38
categories:
 - SQL必知必会
tags:
 - SQL
 - Remote Code
---

存储过程就是为以后使用而保存的一条或多条SQL语句

##### 为什么使用存储过程？

+ 把处理封装在一个易用单元中，可以简化复杂的操作
+ 由于不要求反复建立一系列处理步骤，保证了数据一致性
+ 简化对于变动的管理
+ 安全性：通过存储过程限制对基础数据的访问
+ 因为存储过程通常以编译过的形式存储，DBMS处理命令所需工作量少，提高了性能
+ 存在一些只能用在单个请求中的SQL元素和特性，存储过程可以使用它们来编写功能更强更灵活的代码

##### 执行存储过程EXECUTE

<Suspense>
  <my-codes repo="o-bricks" path="sql/sqlIn10Minutes/procedure.sql" lang="sql" />
</Suspense>
