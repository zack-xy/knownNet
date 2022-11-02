import { every, forEach, forEachObject, sortBy } from "../lib/es6-functional";


var array = [1,2,3]
forEach(array, (data)=> console.log(data))

let object = {a: 1, b: 2}
forEachObject(object, (k, v)=>console.log(k + ": " + v))


const unless = (predicate, fn) => {
  if(!predicate) fn()
}

// 打印数组中的偶数
forEach([1,2,3,4,5,6,7], (number) => {
  unless(number % 2, () => {
    console.log(number, "is even")
  })
})


const times = (times, fn) => {
  for(var i = 0;i<times;i++) fn(i)
}

// 打印1-100中的偶数
times(100, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even")
  })
})

const people = [
  {firstname: "aaFirstName", lastname: "cclastName"},
  {firstname: "ccFirstName", lastname: "aalastName"},
  {firstname: "bbFirstName", lastname: "bblastName"},
]


console.log(every([NaN,NaN], isNaN))

console.log(people.sort(sortBy('lastname')))

