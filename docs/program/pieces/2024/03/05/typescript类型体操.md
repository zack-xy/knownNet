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


#### 装箱类型（不建议用）
Object、Boolean、Number、String、Symbol
> 装箱类型包括(就是可赋值类型)undefined、null、void、和对应的拆箱类型，但是不包括其他装箱类型对应的拆箱类型


```typescript

const tmp1: String = undefined;
const tmp2: String = null;
const tmp3: String = void 0;
const tmp4: String = 'zack';

// 以下不成立，因为不是字符串类型的拆箱类型
const tmp5: String = 100;  // 这不行 X
const tmp6: String = { name: 'zack' }; // 这不行 X
const tmp7: String = () => {};  // 这不行 X
const tmp8: String = [];  // 这不行 X

```


#### object类型：所有非原始类型的类型

```typescript

const tmp1: object = undefined;
const tmp2: object = null;
const tmp3: object = void 0;

const tmp4: object = { name: 'zack' };
const tmp5: object = () => {};
const tmp6: object = [];

// 以下不成立，因为是原始类型
const tmp7: object = 'zack';
const tmp8: object = 100;

```


#### {}类型，理解为对象字面量(表示一个没有属性的空对象)

> 类似于Object，意味着任何非null、undefined的值(如果关闭了strictNullChecks也可以是null)、像any一样

```typescript

// 仅在关闭strictNullChecks时成立
const tmp1: {} = undefined;
const tmp2: {} = null;
const tmp3: {} = void 0;

const tmp4: {} = 'zack';
const tmp5: {} = 100;
const tmp6: {} = { name: 'zack' };  // 虽然可以赋值为一个有属性的对象，实际上拿不到任何属性
const tmp7: {} = () => {};
const tmp8: {} = [];

```

#### void类型：代表空的、没有意义的类型值，一个函数没有return，即是void，与此类似的是，只写一个return，标记的【返回类型】是undefined


#### never类型：最底层类型，不带有任何类型信息（描述一个不存在的类型）


#### 分布式条件类型

1.类型参数需要是一个联合类型
2.类型参数需要通过范型传入
3.条件类型中的范型不能被包裹


```typescript

// 举个例子
type Naked<T> = T extends boolean ? "Y" : "N";
// 第一个T是类型参数，第二个T是条件类型，T本身是范型传入的
type Res3 = Naked<number | boolean>;  // "N" | "Y"
// 类型参数number | boolean是一个联合类型

type Wrapped<T> = [T] extends [boolean] ? "Y" : "N";
// 第一个T是类型参数，第二个T是条件类型，但是在条件类型中被[]包裹
type Res4 = Wrapped<number | boolean>; // "N"
// 虽然传入了联合类型，但是不满足上面的条件，不触发分布式条件类型


// 除了数组包裹，也可以这么包裹
type NoDistribute<T> = T & {};
type Wrapped<T> = NoDistribute<T> extends [boolean] ? "Y" : "N";

```

分布式类型的设计是为了处理联合类型（集合），通过分布式条件类型，可以轻易的实现集合间的运算，比如求交集

```typescript
type Intersection<A, B> = A extends B ? A : never;
type IntersectionRes = Intersection<1 | 2 | 3, 2 | 3 | 4>; // 2 | 3

```


#### 特殊点1: 条件类型传入any，返回联合类型，条件类型传入never，返回never


```typescript

type IsNever<T> = T extends never ? "Y" : "N";

type AnyType = IsNever<any>;  // 条件类型传入any，结果是 "Y" | "N"
type NeverType = IsNever<never>; // 条件类型传入never，结果是never


// 需要判断never类型，需要像分布式一样包裹一下
type IsNever<T> = [T] extends [never] ? "Y" : "N";
type AnyType = IsNever<any>;  // "N"
type NeverType = IsNever<never>; // "Y"

```

#### 特殊点2: any在条件类型中直接用，无论是范型传入还是直接用，都是返回联合类型

```typescript

// 在条件类型中直接用any，返回联合类型
type Tmp1 = any extends string ? 1 : 2;   // 1 | 2
// 通过(裸)范型传入any，也是联合类型
type Tmp2<T> = T extends string ? 1 : 2; 
type Tmp2Res = Tmp2<any>;  // 1 | 2


// 如果判断条件是any，还是会正常判断的
// 注意，这里是不能用来判断一个类型是any的，因为任何类型都是any的子类型
type Special1 = any extends any ? 1 : 2; // 1
type Special2<T> = T extends any ? 1 : 2;
type Special2Res = Special2<any>;

```


#### 特殊点3: never在条件类型中，只有范型传入(且是裸范型如上)，才是直接返回never


```typescript

// 直接使用，仍然会进行判断
type Tmp3 = never extends string ? 1 : 2;  // 1

// 通过范型参数传入，跳过判断，直接返回never
type Tmp4<T> = T extends string ? 1 : 2;
type Tmp4Res = Tmp4<never>;   // never


// 如果判断条件是never，有范型的话，也是会直接返回never
type Special3 = never extends never ? 1 : 2; // 1
type Special4<T> = T extends never ? 1 : 2;
type Special4Res = Special4<never>; // never


```


#### 如果交叉类型之一是any，那么结果类型就是any

```typescript

// 如何判断any类型
// 这里1 & T这个交叉类型，如果T是any，那么这个交叉类型就是any
// 如上文，如果判断类型是any，是会正常判断的
type IsAny<T> = 0 extends 1 & T ? true : false;


// 如何判断unknown类型
type IsUnknown<T> = unknown extends T
    ? IsAny<T> extends true
        ? false
        : true
    : false;
```

#### Class的通用类型签名

class的通用签名需要声明可实例化(new)和可抽象化(abstract)

```typescript

type ClassType = abstract new (...args: any) => any;

export interface ClassType<TInstanceType = any> = {
    new (...args: any[]): TInstanceType;
}



```

#### 函数类型的层级

`如果类型A和类型B，满足A<=B,如果Wrap<A><=Wrap<B>，就是协变，否则Wrap<B><=Wrap<A>则是逆变`

如果一个函数类型A可以认为是函数类型B的子类型,则满足参数的逆变，返回参数的协变。也就是函数A的参数类型需要是函数B参数的父类，函数A的返回类型需要是函数B返回类型的子类


#### 互斥属性
要么有A属性，要么有B属性，不能同时有

```typescript

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

// 要么有foo，要么有bar，不能同时有
type XORStruct = XOR<
    {
        foo: string
    },
    {
        bar: number
    }
>

// 要么同时拥有foo和bar，要么一个都没有
type XORStruct = XOR<
    {},
    {
        foo: string;
        bar: number;
    }
>

```

