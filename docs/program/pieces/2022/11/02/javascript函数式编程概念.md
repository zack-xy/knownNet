---
title: Javascript函数式编程概念
author: Zack Zheng
date: 2022/11/02 23:36
categories:
 - 大海拾遗
tags:
 - JavaScript
 - 函数式编程
---

![javascript函数式编程概念](/svgs/javascript函数式编程概念.svg)

---- 

## 一些API的函数式编程实现

### forEach的实现

::: code-group

```js [实现]
const forEach = (array, fn) => {
  let i
  for (i = 0; i < array.length; i++)
    fn(array[i])
}
```

```js [测试]
const array = [1, 2, 3]
forEach(array, data => console.log(data))
```
:::


### forEach Object的实现

::: code-group

```js [实现]
const forEachObject = (obj, fn) => {
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      // 以key和value作为参数调用fn
      fn(property, obj[property])
    }
  }
}
```

```js [测试]
const object = { a: 1, b: 2 }
forEachObject(object, (k, v) => console.log(`${k}: ${v}`))
```
:::


### every的实现

::: code-group

```js{3} [实现1]
const every = (arr, fn) => {
  let result = true
  for (let i = 0; i < arr.length; i++)
    result = result && fn(arr[i])
  return result
}
```

```js{3} [实现2]
const every = (arr, fn) => {
  let result = true
  for (const value of arr)
    result = result && fn(value)
  return result
}
```

```js [测试]
console.log(every([NaN, NaN], isNaN))
```

:::


### some的实现

```js [实现]
const some = (arr, fn) => {
  let result = false
  for (const value of arr)
    result = result || fn(value)
  return result
}
```

## 以上的实现存在的问题

::: danger 注意
+ 现在的every和some都是低效的（大数组时）
+ every应该在遇到第一个不匹配条件的元素时就停止遍历数组
+ some函数应该在遇到第一个匹配的元素时就停止遍历数组
:::


### 对象排序sortBy的实现

::: code-group

```js [实现]
const sortBy = (property) => {
  return (a, b) => {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
    return result
  }
}
```

```js [测试]
const people = [
  { firstname: 'aaFirstName', lastname: 'cclastName' },
  { firstname: 'ccFirstName', lastname: 'aalastName' },
  { firstname: 'bbFirstName', lastname: 'bblastName' },
]
console.log(people.sort(sortBy('lastname')))
```
:::


## 数组API的一些实现


### map函数的实现

```js
const map = (array, fn) => {
  const results = []
  for (const value of array)
    results.push(fn(value))
  return results
}
```

### filter函数的实现

```js
const filter = (array, fn) => {
  const results = []
  for (const value of array)
    (fn(value) ? results.push(value) : undefined)
  return results
}
```


### 嵌套函数连接到一个数组

```js
// 将所有嵌套数组连接到一个数组中
const concatAll = (array, fn) => {
  const results = []
  for (const value of array)
    results.push.apply(results, value)

  return results
}
```

### 合并两个给定的数组

```js
const zip = (leftArr, rightArr, fn) => {
  let index
  const results = []

  for (index = 0; index < Math.min(leftArr.length, rightArr.length); i++)
    results.push(fn(leftArr[index], rightArr[index]))
  return results
}
```


## reduce的实现

::: code-group

```js [基础实现]
// reduce函数的第一个实现
const reduce1 = (array, fn) => {
  let accumlator = 0
  for (const value of array)
    accumlator = fn(accumlator, value)
  return [accumlator]
}
```

```js [终版实现]
// reduce函数得最终实现
const reduce = (array, fn, initialValue) => {
  let accumlator

  if (initialValue !== undefined)
    accumlator = initialValue
  else
    accumlator = array[0]
  if (initialValue === undefined) {
    for (let i = 1; i < array.length; i++)
      accumlator = fn(accumlator, array[i])
  }
  else {
    for (const value of array)
      accumlator = fn(accumlator, value)
  }
  return [accumlator]
}
```

:::

## 一些函数式编程的'子'函数

### 日志函数

```js
const loggerHelper = (mode, initialMessage, errorMessage, lineNo) => {
  if (mode === 'DEBUG')
    console.debug(initialMessage, `${errorMessage}at line: ${lineNo}`)
  else if (mode === 'ERROR')
    console.error(initialMessage, `${errorMessage}at line: ${lineNo}`)
  else if (mode === 'WARN')
    console.warn(initialMessage, `${errorMessage}at line: ${lineNo}`)
  else
    throw 'Wrong mode'
}
```

### 柯里化

```js
const curry = (fn) => {
  if (typeof fn !== 'function')
    throw new Error('NO function provided')

  return function curriedFn(...args) {

    if (args.length < fn.length) {
      return function () {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)))
      }
    }
    return fn.apply(null, args)
  }
}
```

### 组合函数

```js
const compose = (...fns) =>
  value =>
    reduce(fns.reverse(), (acc, fn) => fn(acc), value)
```


### 管道函数

```js
const pipe = (...fns) =>
  value =>
    reduce(fns, (acc, fn) => fn(acc), value)
```


### 打印偶数

```js
const unless = (predicate, fn) => {
  if (!predicate)
    fn()
}

// 打印数组中的偶数
forEach([1, 2, 3, 4, 5, 6, 7], (number) => {
  unless(number % 2, () => {
    console.log(number, 'is even')
  })
})

const times = (times, fn) => {
  for (let i = 0; i < times; i++) fn(i)
}

// 打印1-100中的偶数
times(100, (n) => {
  unless(n % 2, () => {
    console.log(n, 'is even')
  })
})
```
