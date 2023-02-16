---
title: js数组和weakmap
author: Zack Zheng
date: 2022/11/09 09:51
categories:
 - 大海拾遗
tags:
 - JavaScript
---

## 集合引用类型
#### Array
from()：from()用于将类数组结构转换为数组实例
第一个参数是一个类数组对象，即任何可迭代的结构，或者有一个length属性和可索引元素的结构
第二个可选的映射函数参数
of()：of()用于将一组参数转换为数组实例
##### 检测数组
```
if (value instanceof Array){   
    // 操作数组
} 
```
```
if (Array.isArray(value)){   
     // 操作数组
} 
```
##### 迭代器方法
keys()返回数组索引的迭代器，values()返回数组元素的迭代器，而entries()返回索引/值对的迭代器
##### ES6新增方法
copyWithin():按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置
```
// 从ints中复制索引0开始的内容，插入到索引5开始的位置
// 在源索引或目标索引到达数组边界时停止ints.copyWithin(5);
// 从ints中复制索引0开始到索引3结束的内容
// 插入到索引4开始的位置ints.copyWithin(4, 0, 3);
```
fill()：向一个已有的数组中插入全部或部分相同的值，第二个参数为索引，意为从索引开始，可以指定索引范围
##### 转换
valueOf()返回的还是数组本身。而toString()返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串
join()方法接收一个参数，即字符串分隔符，返回包含所有项的字符串
##### 栈方法
push()方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度。
pop()方法则用于删除数组的最后一项，同时减少数组的length值，返回被删除的项
##### 队列方法
使用shift()和push()，可以把数组当成队列来使用
shift()，它会删除数组的第一项并返回它，然后数组长度减1
unshift()，数组开头添加任意多个值，然后返回新的数组长度
##### 排序方法
reverse()方法就是将数组元素反向排列
sort()会按照这些数值的字符串形式重新排序
sort()方法可以接收一个比较函数，用于判断哪个值应该排在前面
如果第一个参数应该排在第二个参数前面，就返回负值；如果两个参数相等，就返回0；如果第一个参数应该排在第二个参数后面，就返回正值。
⚠️注意reverse()和sort()都返回调用它们的数组的引用。(改变原数组)
##### 操作方法
concat()方法可以在现有数组全部元素基础上创建一个新数组。会创建一个当前数组的副本
slice()用于创建一个包含原有数组中一个或多个元素的新数组
splice()，第一个参数索引，第二个删除删除个数，第三个参数插入个数，返回一个数组，包含从数组中被删除的元素
find()返回第一个匹配的元素,第二个可选的参数，用于指定断言函数内部this的值
findIndex()返回第一个匹配元素的索引,第二个可选的参数，用于指定断言函数内部this的值
every()：对数组每一项都运行传入的函数，如果对每一项函数都返回true，则这个方法返回true。
filter()：对数组每一项都运行传入的函数，函数返回true的项会组成数组之后返回。
forEach()：对数组每一项都运行传入的函数，没有返回值。
map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
some()：对数组每一项都运行传入的函数，如果有一项函数返回true，则这个方法返回true。
##### 归并方法
reduce():从数组第一项开始遍历到最后一项
reduceRight():从最后一项开始遍历至第一项
接收4个参数：上一个归并值、当前项、当前项的索引和数组本身
#### 定型数组
##### ArrayBuffer
ArrayBuffer是所有定型数组及视图引用的基本单位
ArrayBuffer()是一个普通的JavaScript构造函数，可用于在内存中分配特定数量的字节空间
```
const buf = new ArrayBuffer(16);  // 在内存中分配16字节
alert(buf.byteLength);            // 16
```
###### DataView
DataView视图专为文件I/O和网络I/O设计，其API支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些。DataView对缓冲内容没有任何预设，也不能迭代。
```
const buf = new ArrayBuffer(16); // DataView默认使用整个ArrayBuffer 
const fullDataView = new DataView(buf); 
.
.
.
```
#### Map
方法：
set()
get()
has()
delete()
clear()
##### WeakMap
弱映射中的键只能是Object或者继承自Object的类型，尝试使用非对象设置键会抛出TypeError。值的类型没有限制
WeakMap中“weak”表示弱映射的键是“弱弱地拿着”的。意思就是，这些键不属于正式的引用，不会阻止垃圾回收。但要注意的是，弱映射中值的引用可不是“弱弱地拿着”的。只要键存在，键/值对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收。
特点：
1. 没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性
2. 无法清空，即不支持clear方法
#### Set
方法：
add()
has()
delete()
clear()
##### 集合操作
```
class XSet extends Set {
    union (...sets) {
        return XSet.union(this, ...sets)
    }
    intersection (...sets) {
        return XSet.intersection(this, ...sets);
    }
    difference (set) {
        return XSet.difference(this, set);
    }
    symmetricDifference (set) {
        return XSet.symmetricDifference(this, set);
    }
    cartesianProduct (set) {
        return XSet.cartesianProduct(this, set);
    }
    powerSet () {
        return XSet.powerSet(this);
    }
    // 返回两个或更多集合的并集  
    static union (a, ...bSets) {
        const unionSet = new XSet(a);
        for (const b of bSets) {
            for (const bValue of b) {
                unionSet.add(bValue);
            }
        }
        return unionSet;
    }
    // 返回两个或更多集合的交集  
    static intersection (a, ...bSets) {
        const intersectionSet = new XSet(a);
        for (const aValue of intersectionSet) {
            for (const b of bSets) {
                if (!b.has(aValue)) {
                    intersectionSet.delete(aValue);
                }
            }
        }
        return intersectionSet;
    }
    // 返回两个集合的差集  
    static difference (a, b) {
        const differenceSet = new XSet(a);
        for (const bValue of b) {
            if (a.has(bValue)) {
                differenceSet.delete(bValue);
            }
        }
        return differenceSet;
    }
    // 返回两个集合的对称差集  
    static symmetricDifference (a, b) {
        // 按照定义，对称差集可以表达为    
        return a.union(b).difference(a.intersection(b));
    }
    // 返回两个集合（数组对形式）的笛卡儿积  
    // 必须返回数组集合，因为笛卡儿积可能包含相同值的对  
    static cartesianProduct (a, b) {
        const cartesianProductSet = new XSet();
        for (const aValue of a) {
            for (const bValue of b) {
                cartesianProductSet.add([aValue, bValue]);
            }
        }
        return cartesianProductSet;
    }
    // 返回一个集合的幂集  
    static powerSet (a) {
        const powerSet = new XSet().add(new XSet());
        for (const aValue of a) {
            for (const set of new XSet(powerSet)) {
                powerSet.add(new XSet(set).add(aValue));
            }
        }
        return powerSet;
    }
}
```
##### WeakSet
弱集合中的值只能是Object或者继承自Object的类型
不可迭代
