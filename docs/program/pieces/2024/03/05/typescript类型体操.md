---
title: typescript类型体操
author: Zack Zheng
date: 2023/03/05 00:00
categories:
 - TypeScript
tags:
 - TypeScript
---

去掉readonly修饰符   

```typescript
type ToMutable<T> = {
    -readonly [Key in keyof T]: T[Key]
}
```   

去掉可选修饰符

```typescript

type ToRequired<T> = {
    [Key in keyof T]-?: T[Key]
}

```

当类型参数为联合类型，并且在条件类型左边直接引用该类型时，TS会把联合类型的每一个单独传入做类型运算，最后再合并成联合类型    

```typescript

type Union = 'a' | 'b' | 'c';
type UppercaseA<Item extends string> = 
    Item extends 'a' ? Uppercase<Item> : Item;     // 'A' | 'b' | 'c'
    
    
type Str = `${Union}~~`;   // 'a~~' | 'b~~' | 'c~~'

```   

判断是否是联合类型

```typescript

type IsUnion<A, B = A> = 
    A extends A 
        ? [B] extends [A]   // []防止联合类型拆解
            ? false
            : true
        : never
```

数组转联合类型

```typescript

type Union = ['aaa','bbbb'][number]

```

如何判断一个类型是any类型

```typescript
type IsAny<T> = 'dong' extends ('guang' & T) ? true : false
```

判断2个类型是否一致

```typescript
type IsEqual<A, B> = (<T>() => T extends A ? 1:2) extends (<T>() => T extends B ? true : false)
```

判断是否是never类型

```typescript
type IsNever<T> = [T] extends [never] ? true : false
```

判断是否是元组类型

```typescript
type IsTuple<T> = 
    T extends [...params: infer Eles]
        ? NotEqual<Eles['length'], number>
        : false

// NotEqual是上面IsEqual的反例
type NotEqual<A, B> = (<T>()=> T extends A ? 1:2) extends (<T>() => T extends B ? false : true)
```

逆变：允许父类型传递给子类型 (一般用在联合类型转交叉类型)   
协变：允许子类型传递给父类型    

联合类型转交叉类型  

```typescript
type UnionToIntersection<U> = 
    (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
        ? R
        : never
```

-----------
特性：   

如果never作为类型参数出现在条件类型左侧时，会直接返回never
```typescript
type TestNever<T> = T extends number ? 1:2;

// 如果T时never，类型TestNever就是never
```

如果any作为类型参数出现在条件类型左侧时，会返回true和false的联合类型
```typescript
type TestAny<T> = T extends number ? 1:2

// 如果T是any类型，类型TestAny就是 1|2 的联合类型

```


