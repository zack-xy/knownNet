---
title: 高级SQL特性
author: Zack Zheng
date: 2025/06/19 09:38
categories:
 - SQL必知必会
tags:
 - SQL
---

##### 约束

###### 引用完整性

###### 主键

+ 任意两行的主键值都不相同
+ 每行都具有一个主键值（列中不允许出现NULL）
+ 包含主键的列从不修改或更新
+ 主键值不能重用。如果从表中删除某一行，其主键值不分配给新行

```sql 定义主键

CREATE TABLE Vendors 
(
  vend_id      CHAR(10)      NOT NULL PRIMARY KEY,
  vend_name    CHAR(50)      NOT NULL
  vend_address CHAR(50)      NULL,
  vend_city    CHAR(50)      NULL,
  vend_state   CHAR(5)       NULL,
  vend_zip     CHAR(10)      NULL,
  vend_country CHAR(50)      NULL
)

```


```sql 定义主键

ALTER TABLE Vendors
ADD CONSTRAINT PRIMARY KEY (vend_id);

```

###### 外键

表中一列，值在另一表中是主键

```sql 定义外键

CREATE TABLE Orders 
(
  order_num        INTEGER        NOT NULL PRIMARY KEY,
  order_date       DATETIME       NOT NULL,
  cust_id          CHAR(10)       NOT NULL REFERENCES Customers(cust_id) 
);


```

```sql 定义外键

ALTER TABLE Orders
ADD CONSTRAINT
FOREIGN KEY (cust_id) REFERENCES Customers(cust_id);

```

###### 唯一约束

保证一列或一组列中的数据是唯一的，类似于主键，区别如下：

+ 表可以包含多个唯一约束，但每个表只允许1个主键
+ 唯一约束列可以包含NULL值
+ 唯一约束列可以修改和更新
+ 唯一约束列的值可重复使用
+ 与主键不一样，唯一约束不能用来定义外键

可以使用关键字`UNIQUE`和`CONSTRAINT`定义

###### 检查约束

用来保证一列中的数据满足一组指定条件

```sql 检查约束

CREATE TABLE OrderItems 
(
  order_num      INTEGER      NOT NULL,
  order_item     INTEGER      NOT NULL,
  prod_id        CHAR(10)     NOT NULL,
  quantity       INTEGER      NOT NULL CHECK (quantity > 0),
  item_price     MONEY        NOT NULL
);

```

```sql 检查约束
ADD CONSTRAINT CHECK (gender LIKE '[MF]');
```


##### 索引

索引用来排序数据以加快搜索和排序操作的速度     
通过在列上定义索引来加快查找的速度     

+ 索引加快了检索性能，降低了插入、修改和删除的性能（因为要动态更新索引）
+ 索引数据可能会大量占用存储空间
+ 不是所有列适合做索引，经常要排序的列适合做索引，索引可以同时定义多个列

```sql 创建索引

CREATE INDEX prod_name_ind
ON Products (prod_name);

```


##### 触发器TRIGGER

特定数据库活动自动执行的存储过程


