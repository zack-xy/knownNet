const forEach = (array, fn) => {
    let i
    for (i = 0; i < array.length; i++) {
        fn(array[i])
    }
}

const forEachObject = (obj, fn) => {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            // 以key和value作为参数调用fn
            fn(property, obj[property])
        }
    }
}

const every = (arr, fn) => {
    let result = true
    for (let i = 0; i < arr.length; i++)
        result = result && fn(arr[i])
    return result
}

const every2 = (arr, fn) => {
    let result = true
    for (const value of arr)
        result = result && fn(value)
    return result
}

const some = (arr, fn) => {
    let result = false
    for (const value of arr)
        result = result || fn(value)
    return result
}

// 现在的every和some都是低效的（大数组时）
// every应该在遇到第一个不匹配条件的元素时就停止遍历数组
// some函数应该在遇到第一个匹配的元素时就停止遍历数组

const sortBy = (property) => {
    return (a, b) => {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
        return result
    }
}

// tap函数是一个开胃菜
const tap = (value) =>
    (fn) => (
        typeof (fn) === 'function' && fn(value),
        console.log(value)
    )

// 转换函数只接收一个参数 
const unary = (fn) =>
    fn.length === 1
        ? fn
        : (arg) => fn(arg)

// 只运行一次给定函数
const once = (fn) => {
    let done = false

    return function () {
        return done ? undefined : ((done = true), fn.apply(this, arguments))
    }
}

// 记住计算结果的函数
const memoized = (fn) => {
    const lookupTable = {}

    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg))
}

const map = (array, fn) => {
    let results = []
    for (const value of array)
        results.push(fn(value))
    return results
}

const filter = (array, fn) => {
    let results = []
    for (const value of array)
        (fn(value) ? results.push(value) : undefined)
    return results
}

// 将所有嵌套数组连接到一个数组中
const concatAll = (array, fn) => {
    let results = []
    for (const value of array)
        results.push.apply(results, value)

    return results
}

// reduce函数的第一个实现
const reduce1 = (array, fn) => {
    let accumlator = 0
    for (const value of array)
        accumlator = fn(accumlator, value)
    return [accumlator]
}

// reduce函数得最终实现
const reduce = (array, fn, initialValue) => {
    let accumlator

    if (initialValue != undefined)
        accumlator = initialValue
    else
        accumlator = array[0]
    if (initialValue === undefined)
        for (let i = 1; i < array.length; i++)
            accumlator = fn(accumlator, array[i])
    else
        for (const value of array)
            accumlator = fn(accumlator, value)
    return [accumlator]
}

// 合并两个给定的数组
const zip = (leftArr, rightArr, fn) => {
    let index, results = []

    for (index = 0; index < Math.min(leftArr.length, rightArr.length); i++)
        results.push(fn(leftArr[index], rightArr[index]))
    return results
}

export {
    forEach,
    forEachObject,
    every,
    some,
    sortBy
}
