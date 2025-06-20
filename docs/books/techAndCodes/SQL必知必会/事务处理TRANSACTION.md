---
title: 事务处理TRANSACTION
author: Zack Zheng
date: 2025/06/19 09:38
categories:
 - SQL必知必会
tags:
 - SQL
---

事务处理确保成批的SQL操作要么完全执行，要么完全不执行，来维护数据库的完整性    

##### 术语

+ 事务：指一组SQL语句   
+ 回退：撤销指定SQL语句的过程   
+ 提交：将未存储的SQL语句结果写入数据库表   
+ 保留点：指事务处理中设置的临时占位符，可以对它发布回退   


##### 控制事务

###### 事务处理块开始

`START TRANSACTION`

###### 回退（撤销）SQL语句

```sql
DELETE FROM Orders;
ROLLBACK;
```

###### 提交

`COMMIT;`


###### 部分回退（保留点）

`SAVEPOINT delete1`
