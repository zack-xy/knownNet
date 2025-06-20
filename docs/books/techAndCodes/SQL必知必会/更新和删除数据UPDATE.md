---
title: 更新和删除数据UPDATE
author: Zack Zheng
date: 2025/06/19 09:38
categories:
 - SQL必知必会
tags:
 - SQL
---

###### UPDATE的方式

+ 更新表中特定行   
+ 更新表中所有行   

###### 使用UPDATE和DELETE需要遵循的原则

+ 一定要带WHERE子句，除非你要操作每一行
+ 保证每个表都有主键
+ 使用WHERE之前，先用SELECT试一下，保证过滤是正确的
+ 使用强制实施引用完整性的数据库
+ 增加DBMS约束，防止执行不带WHERE子句的UPDATE或DELETE

<Suspense>
  <my-codes repo="o-bricks" path="sql/sqlIn10Minutes/update.sql" lang="sql" />
</Suspense>
