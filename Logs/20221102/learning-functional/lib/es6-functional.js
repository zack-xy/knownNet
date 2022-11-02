const forEach = (array, fn) => {
  let i
  for(i=0;i<array.length;i++) {
    fn(array[i])
  }
}

const forEachObject = (obj, fn) => {
  for(var property in obj) {
    if(obj.hasOwnProperty(property)) {
      // 以key和value作为参数调用fn
      fn(property, obj[property])
    }
  }
}

const every = (arr, fn) => {
  let result = true
  for(let i = 0;i<arr.length;i++)
    result = result && fn(arr[i])
  return result
}

const every2 = (arr, fn) => {
  let result = true
  for(const value of arr)
    result = result && fn(value)
  return result
}

const some = (arr, fn) => {
  let result = false
  for(const value of arr) 
    result = result || fn(value)
  return result
}

// 现在的every和some都是低效的（大数组时）
// every应该在遇到第一个不匹配条件的元素时就停止遍历数组
// some函数应该在遇到第一个匹配的元素时就停止遍历数组

const sortBy = (property) => {
  return (a,b) => {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
    return result
  }
}

export { 
  forEach,
  forEachObject,
  every,
  some,
  sortBy
}
