---
title: 第六章之模式schema
author: Zack Zheng
date: 2025/07/02 10:40
categories:
 - PostgreSQL
tags:
 - SQL
 - 唐成 
 - PostgreSQL
---

#### 数据库基本操作

##### 创建数据库

```sql

create database osdbadb;

# 创建数据库testdb01，编码LATIN1，模板使用template0
create database testdb01 encoding 'LATIN1' template template0;

# tablespace: 用于指定和新数据库关联的表空间名称
# connection limit: 用于指定数据库可以接受多少并发连接。默认值为-1，表示没有限制

```

##### 修改数据库

```sql

alter database testdb01 connection limit 10;

# 修改数据库名字
alter database testdb01 rename to mydb01;

# 关闭数据库testdb01默认索引扫描
alter database testdb01 set enable_indexscan to off;

```

##### 删除数据库

```sql

# 直接删除数据库
drop database mytestdb01;

# 如果数据库存在，删除之，如果不存在，跳过
drop database if exists mytestdb01;

# 如果还有用户连接在数据库上，将无法删除数据库
# 不能在事务块中删除数据库
# 可以在事务块中修改数据库


```


#### 模式（schema）

<b>概念：</b>   
可以理解为一个命名空间或目录    
不同模式下可以有相同名称的表、函数等对象     

<b>关系：</b>   
一个数据库包含一个或多个模式，模式中包含表、函数以及操作符等数据库对象    

##### 创建模式

```sql

# 创建模式
create schema osdba;

# 为用户root创建模式，模式名字为test
create schema test authorization root;

# 在创建模式的同时，创建表的视图
create schema osdba
    create table t1 (id int, title text)
    create table t2 (id int, content text)
    create view v1 as
      select a.id, a.title, b.content from t1 a, t2 b where a.id = b.id;


# 修改模式名称
alter schema osdba rename to osdbaold;

# 修改属主
alter schema osdbaold owner to web;

```

访问模式中的对象，使用`模式名.表名`语法，不指定模式的时候，默认是`public`模式     

```sql
# 在rootshema中创建表student
create table rootshema.student (
  no INTEGER PRIMARY KEY,
  student_name VARCHAR(40),
  age INTEGER,
  has_money DECIMAL(2, 0)
);
```

##### 权限授予


+ 1. 授予数据库所有权（最高权限）
  
  ```sql
  alter database mydb owner to zack;
  ```

+ 2. 授予特定权限（非所有权）

  ```sql
  # 赋予zack对mydb所有操作权限（如创建表、查询等）
  grant all privileges on database mydb to zack;
  ```

+ 3. 授予schema和表的权限
  
  ```sql

  # 授予public schema下当前存在的表的权限
  grant all privileges on all tables in schema zackschema to zack;

  # ⚠️注意要给usage权限
  grant usage on schema zackschema to zack;

  # 授予未来新建的表的权限
  alter default privileges in schema zackschema
  grant all privileges on all tables to zack;

  # 授予特定表的权限
  grant select, insert, update on table mytable to zack;

  ```


##### 删除模式osdba

```sql
# 删除模式，可能报错，说有依赖，不能删除
drop schema osdba;

# 强制删除
drop schema osdba cascade;

# 手动转移表再删除

# 1. 查看依赖对象
select * from pg_depend
where refobjid = (select oid from pg_namespace where nspname = 'osdba');

# 2. 转移对象所有权(把表转移到public)
alter table osdba.table_name set schema public;

# 3. 再删除模式

```


