---
title: TS内置高级类型
author: Zack Zheng
date: 2021/08/04 22:36
categories:
 - 大海拾遗
tags:
 - TypeScript
---

![TS类型工具](/svgs/TS类型工具.svg)

### Parameters

用于提取函数类型的参数类型，返回元组类型   

例子：
```typescript
type ParametersRes = Parameters<(name: string, age: number)=>{}>

// type ParametersRes = [name: string, age: number]
```

实现:
```typescript
type Parameters<T extends (...args: any) => any> = 
    T extends (...args: infer P) => any
        ? P
        : never;
```

### ReturnType

提取函数类型的返回值类型

例子：
```typescript
type ReturnTypeRes = ReturnType<() => 'dong'>

// type ReturnTypeRes = 'dong'
```

实现：

```typescript
type ReturnType<T extends (...args: any) => any> = 
    T extends (...args: any) => infer R
        ? R
        : never;
```

### ConstructorParameters

提取构造器参数类型  

例子：
```typescript
interface PersonConstructor {
    new (name: string): Person;
}

type ConstructorParametersRes = ConstructorParameters<PersonConstructor>
// type ConstructorParametersRes = [name: string]
```

实现：
```typescript

type ConstructorParameters<T extends abstract new (...args: any) => any> = 
    T extends abstract new (...args: infer P) => any 
        ? P
        : never;

```

### InstanceType

提取构造器返回值类型

例子：
```typescript
interface PersonConstructor {
    new (name: string): Person;
}

type InstanceTypeRes = InstanceType<PersonConstructor>;

// type InstanceTypeRes = Person


```

实现：
```typescript

type InstanceType<T extends abstract new (...args: any) => any> = 
    T extends abstract new (...args: any) => infer R 
        ? R
        : never;

```

### ThisParameterType

返回函数中this参数的类型


例子：
```typescript

type Person = {
    name: 'zack'
}

function hello(this: Person) {
    console.log(this.name)
}

type ThisParameterTypeRes = ThisParameterType<typeof hello>

// type ThisParameterTypeRes = {name: 'zack'}
```

实现： 
```typescript
type ThisParameterType<T> =
    T extends (this: infer U, ...args: any[]) => any
        ? U
        : unknown;

```

### OmitThisParameter

返回函数类型，忽略参数this

例子：

```typescript
function say(this: Person, age: number) {
    console.log(this.name)
    return this.name + ' ' + this.age
}

type OmitThisParameterRes = OmitThisParameter<typeof say>

// type OmitThisParameterRes = (age: number) => string
```

实现：

```typescript
```

### Partial

把索引变为可选

例子：

```typescript
type PartialRes = Partial<{name:'zack', age: 20}>

/**

type PartialRes = {
    name?: 'zack' | undefined,
    aeg?: 20 | undefined
}

**/

```

实现：

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P]
} 

```

### Required

去掉索引可选

例子：
```typescript

type RequiredRes = Required<{name?: 'zack', age?: 20}>

/**
type RequiredRes = {
    name: 'zack'
    age: 18
}
**/

```

实现：
```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}
```

### Readonly  (略)

### Pick

过滤用于构造新的索引类型

例子：
```typescript

type PickRes = Pick<{name: 'zack', age: 20, sex: 1}, 'name' | 'age'>

/**
type PickRes = {
    name: 'zack';
    age: 20;
}
**/

```
实现：
```typescript

type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}

```

### Record

创建索引类型

例子：
```typescript

type RecordRes = Record<'a' | 'b', number>

/**
type RecordRes = {
   a: number;
   b: number;
}
**/

```

实现：
```typescript
type Record<K extends keyof any, T> = {
    [P in K]: T
}

// keyof any的结果是：string | number | symbol

```


### Exclude

从联合类型中去除一部分类型

例子：
```typescript
type ExcludeRes = Exclude<'a'|'b'|'c'|'d', 'a'|'b'>

// type ExcludeRes = 'c' | 'd'
```

实现：
```typescript
type Exclude<T, U> = T extends U ? never : T;
```

### Extract

联合类型取交集

例子：
```typescript
type ExtractRes = Extract<'a'|'b'|'c'|'d','a'|'b'>

// type ExtractRes = 'a' | 'b'
```

实现：
```typescript

type Extract<T, U> = T extends U ? T : never;

```

### Omit

去掉某些索引，构造新的索引类型

例子：
```typescript
type OmitRes = Omit<{name: 'zack', age: 20}, 'name'>

// type OmitRes = {age: 20}

```

实现：
```typescript

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

```

### Awaited

例子：
```typescript
type AwaitedRes = Awaited<Promise<Promise<Promise<number>>>>
// type AwaitedRes = number
```

实现：
```typescript

type Awaited<T> = 
    T extends null | undefined 
        ? T
        : T extends object & { then(onfulfiled: infer F): any }
            ? F extends ((value: infer V, ...args: any) => any)
                ? Awaited<V>
                : never
            : T

```


### NonNullable

用于判断是否是非空(null、undefined)类型,如果是空类型，返回never,否则返回本身

例子：
```typescript
type NonNullableRes1 = NonNullable<null>

// type NonNullableRes1 = never

type NonNullableRes2 = NonNullable<{name: 'zack'}>

// type NonNullableRes2 = {name: 'zack'}
```

实现：

```typescript
type NonNullable<T> = T extends null | undefined ? never : T
```
