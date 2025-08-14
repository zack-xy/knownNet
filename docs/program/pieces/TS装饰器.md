---
title: TS装饰器
author: Zack Zheng
date: 2021/07/01 22:36
categories:
 - 大海拾遗
tags:
 - TypeScript
 - drawio
---

![](https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/TS装饰器.svg)


::: code-group

```ts [类装饰器]
// 装饰器就是一个方法，可以注入到类、方法、属性上来扩展类、属性、方法、参数的功能
// 写法：1.普通装饰器(无法传参) 2.装饰器工厂（可传参）

// 1. 类装饰器
// 类装饰器在类之前被声明（紧靠类声明）。类装饰器应用于类构造函数、可以用来监视、修改或替换类定义
// 普通装饰器
function logClass(params: any) {
  console.log(params)
  // 通过原型链拓展类、属性、方法、参数
  params.prototype.apiUrl = 'xxx'
  params.prototype.run = function () {
    console.log('run.......')
  }
}

@logClass
class HttpClient {
  constructor() { }
  getData() { }
}

// http对象扩展了run方法
const http = new HttpClient()
console.log(http)
http.run()

// 装饰器工厂（可传参）
function logClass1(params: string) {
  return function (target: any) {
    console.log(params)
    console.log(target)
    target.prototype.apiUrl = params
  }
}

// 通过装饰器工厂，装饰器可以传递参数
@logClass1('hello')
class HttpClient1 {
  constructor() { }
  getData() { }
}

const http1 = new HttpClient1()
console.log(http1)

// 重载构造函数
function logClass2(target: any) {
  return class extends target {
    api = 'api22222'
    getData() {
      console.log(`${this.api}3333`)
    }
  }
}

@logClass2
class HttpClient2 {
  public api: string | undefined
  constructor() {
    this.api = 'api11111'
  }

  getData() {
    console.log(this.api)
  }
}

const http2: any = new HttpClient2()
console.log(http2)
http2.getData
```

```ts [方法装饰器]
// 2.方法装饰器
// 应用在方法的属性描述上，可以用来监视、修改、替换方法定义
// 接收三个参数
// 1. 对于静态成员是类的构造函数，对于实例成员是类的原型对象
// 2. 成员的名字
// 3. 成员的属性的描述
function logClass4(params: string) {
  return function (target: any, methodsName: any, desc: any) {
    console.log('类的原型对象', target)
    console.log('成员的名字', methodsName) // getData
    console.log('成员的属性的描述', desc) // {writable: true, enumerable: true, configurable: true, value: ƒ}
    console.log(desc.value) // f() {.....}
    const o = desc.value
    desc.value = function (...args: any[]) {
      args = args.map((item) => {
        return String(item) + params
      })
      o.apply(this, args)
    }
  }
}

class HttpClient4 {
  public api: any | undefined
  public name = 'name'
  constructor(name: string) { }
  @logClass4('方法装饰器')
  getData(...args: any[]) {
    console.log('参数', args) // ["123方法装饰器","xxx方法装饰器"]
    console.log('方法执行完毕: getData')
  }
}

const http4 = new HttpClient4('test')
http4.getData(123, 'xxx')
```

```ts [属性装饰器]
// 3. 属性装饰器
// 属性装饰器表达式会在运行时被当做函数调用
// 接收两个参数
// 1.对于静态成员是类的构造函数，对于实例成员是类的原型对象
// 2.成员的名字

// 属性装饰器
function logProperty(params: string) {
  return function (target: any, attr: any) {
    target[attr] = params
  }
}

class HttpClient3 {
  @logProperty('hello')
  public api: any | undefined

  constructor() { }
  getData() { }
}
const http3: any = new HttpClient3()
console.log(http3)
```


```ts [参数装饰器]
// 4.参数装饰器
// 参数装饰器表达式会在运行时当做函数被调用，可以使参数装饰器为类的原型增加一些元素数据
// 1.对于静态成员是类的构造函数，对于实例成员是类的原型对象
// 2.参数的名字
// 3.参数索引
function logClass5(params: string) {
  return function (target: any, methodsName: any, desc: any) {
    console.log(target)
    console.log(methodsName)
    console.log(desc)
  }
}

class HttpClient5 {
  public api: any | undefined
  constructor() { }

  getData(@logClass5('参数装饰器') uuid: any) {
    console.log(uuid)
  }
}

const htt5: any = new HttpClient5()
htt5.getData(122)
```

```ts [访问器装饰器]
// 5.访问器装饰器

function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value
  }
}

class Point {
  private _x: number
  private _y: number
  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  @configurable(false)
  get x() {
    return this._x
  }

  @configurable(false)
  get y() {
    return this._y
  }

}
```
:::
