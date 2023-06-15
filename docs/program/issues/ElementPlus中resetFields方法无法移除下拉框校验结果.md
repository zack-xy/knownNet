---
title: ElementPlus中resetFields方法无法移除下拉框校验结果
lang: en-US
date: 2021-06-04 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

版本："element-plus": "^1.2.0-beta.1"

这样写，就可以了

```javascript
this.$nextTick(() =>{
   this.$refs.form.resetFields()
   setTimeout(() => {
       this.$refs.form.clearValidate()
   },  0)
})
```
另外，Form上的model和ref不能同名
