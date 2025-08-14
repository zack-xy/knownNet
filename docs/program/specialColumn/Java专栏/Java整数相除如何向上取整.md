---
title: Java整数相除如何向上取整
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
 - 后端
---

+ 浮点数向上取整`Math.ceil()` （适用于负数）
+ 整数除法向上取整`a/b向上取整 = (a+b-1)/b`（⚠️仅适用于正数）

```java
int a = 7;
int b = 3;
int result = (a + b - 1) / b; // 向上取整，等价于 Math.ceil(a / (double) b)
```

+ 使用`BigDecimal`

```java

import java.math.BigDecimal;
import java.math.RoundingMode;

BigDecimal num = new BigDecimal("3.2");
BigDecimal result = num.setScale(0, RoundingMode.CEILING); // 返回 4

```
