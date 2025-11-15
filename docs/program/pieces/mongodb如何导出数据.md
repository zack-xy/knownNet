---
title: mongodb如何导出数据
author: Zack Zheng
date: 2025/11/15 16:18
categories:
 - 大海拾遗
tags:
 - mongodb
---

::: code-group

docker容器，宿主机运行即可

```bash [导出整个数据库]
mongodump --uri="mongodb://admin:123456@localhost:27017/manage_attendance?authSource=admin" --out=./backup
```
```bash [导出指定集合]
mongoexport \
  --host=localhost \
  --port=27017 \
  --username=admin \
  --password=123456 \
  --authenticationDatabase=admin \
  --db=manage_attendance \
  --collection=users \
  --out=users.json
```

::: 



