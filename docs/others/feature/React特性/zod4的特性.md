---
title: zod4.x的特性
author: Zack Zheng
date: 2025/08/19 14:33
categories:
 - 何以编程
tags:
 - React
 - 前端
---

内容来自[官网(zod.dev)](https://zod.dev/)         

Zod是一个TypeScript优先验证库。使用Zod，您可以定义可用于验证数据的模式，从简单的字符串到复杂的嵌套对象。    

+ 使用`parse`校验数据，校验通过返回数据的深拷贝，校验不通过抛出错误           
+ 使用`safeParse`校验数据，返回一个纯对象（包含校验结果）              
+ 使用`parseAsync`异步校验数据       

<Suspense>
  <my-codes repo="o-bricks" path="demoCodes/React/vite-react/src/form/ZodDemo.tsx" lazy />
</Suspense>

-------------------------

#### 基本API

##### 基本类型 
##### coerce
##### 字符串
##### 模板文字
##### 数字
##### 可选项
##### Object对象
##### 递归对象、自引用类型
##### 数组
##### 元组
##### Map
##### Set
##### 自定义验证.refine()
##### 自定义验证增强版：superRefine
专为需要‌跨字段协作‌或‌多错误反馈‌的复杂验证场景（可以多错误、全Schema字段、可主动终止验证）
##### transform和pipe


<Suspense>
  <my-codes repo="o-bricks" path="demoCodes/React/vite-react/src/form/ZodApi.tsx" lazy />
</Suspense>

