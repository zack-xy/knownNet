---
title: 组合查询UNION
author: Zack Zheng
date: 2025/06/19 09:38
categories:
 - SQL必知必会
tags:
 - SQL
---

##### 什么时候需要用到UNION？

+ 在一个查询中从不同的表返回结构数据    
+ 对一个表执行多个查询，按一个查询返回数据      

任何具有多个WHERE子句的SELECT语句都可以作为一个组合查询      

##### UNION规则   

+ UNION必须由2条或者2条以上的SELECT语句组成，语句之间用关键字UNION分隔   
+ UNION中的每个查询必须包含相同的列、表达式或聚集函数   
+ 列数据类型必须兼容    
+ 会自动去除重复行，可以使用`UNION ALL`会返回所有匹配行   
+ 排序只能用一条ORDER BY，位于最后      


##### 其他类型的UNION（不常用）

+ EXCEPT: 检索在第一个表中存在在第二个表中不存在的行   
+ INTERSECT:检索两个表中都存在的行     



<Suspense>
  <my-codes repo="o-bricks" path="sql/sqlIn10Minutes/union.sql" lang="sql" lazy />
</Suspense>
