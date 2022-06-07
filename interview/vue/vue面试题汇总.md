#### v-if和v-for哪一个优先级更高？如果同时出现，如何优化获得更好性能

源码：complier/codegen/index.js

genElement方法，将抽象语法树转成渲染函数字符串，
优先处理的逻辑的是静态节点，其次是once，其次是v-for，其次是v-if，其次是children，其次是slot，剩下的递归genElement


> 示例
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>v-if和v-for的优先级</title>
</head>
<body>
  <div id="demo">
    <h1>
      v-if和v-for哪一个优先级更高
    </h1>
    <div id="app">
      <ul>
        <li v-for="item in list" v-if="item.show" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <script src="../../dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: "#app",
        data: {
          list: [
            {name:"橘子",id:"1", show: true},
            {name:"苹果",id:"2", show: false}
          ]
        }
      })
      console.log(app.$options.render)
    </script>
  </div>
</body>
</html>

```

放在一起会报错么，单纯vue不会报错，但是eslint或其他配置可能会报错

> 生成的渲染函数

```javascript
ƒ anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('ul',_l((list),function(item){return (item.show)?_c('li',{key:item.id},[_v(_s(item.name))]):_e()}),0)])}
}
```

_l是渲染列表，内部是v-if，意味着v-for的优先级是大于v-if的，每一次v-for循环再进行判断

> 优化

在外面套一层template，过滤好要展示的list之后再v-for


--------

#### 为什么Vue组件data必须是一个函数，而Vue根实例没有这个限制

源码：src\core\instance\state.js-initData()


initDate的逻辑就是，查看vue实例化data配置项是啥，如果是函数，则bind当前组件实例执行之返回，不是直接返回data

> 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue组件data为什么必须是一个函数</title>
</head>
<body>
  <div id="app">
    <comp></comp>
    <comp></comp>
  </div>
  <script src="../../dist/vue.js"></script>
  <script>
    // 自定义组件
    Vue.component('comp', {
      template: '<div @click="counter++">{{counter}}</div>',
      // data() {
      //   return {
      //     counter: 0
      //   }
      // }
      data: {
        counter: 0
      }
    })
    const app = new Vue({
      el: "#app"
    })
  </script>
</body>
</html>

```

以上代码vue会报错：组件的data必须是函数
因为comp组件使用多次，每一个组件因为data是直接返回了，又因为Vue.component这里只声明配置了一次，所以都是指向的配置的data对象，
所以，数据发生了污染，不同的组件对data进行修改，改的就是同一个data对象
(如果就是想改一个数据，大家都更改，应该把数据作为props传进来)
根实例只有1个，是单例的



-------------


#### vue中key的作用和原理

源码：src\core\vdom\patch.js - updateChildren()

示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue key的作用</title>
</head>
<body>
  <div id="app">
    <p v-for="item in items" :key="item">{{item}}</p>
  </div>
  <script src="../../dist//vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        items: ['a','b','c','d','e']
      },
      mounted() {
        setTimeout(() => {
          this.items.splice(2,0,'f')
        }, 2000)
      }
    })
  </script>
</body>
</html>

```

> 还是比较复杂的，这里贴一下vue源码

```javascript
// 比较a，b节点是不是同一个节点（a是旧，b是新）
// 满足以下：视为相同节点
// 1.节点a的key和节点b的key相同(没有绑定key，key是undefined)
// 2. 【节点a和b的tag标签名相同 】 且 【同（是\不是）注释节点】 且 【节点的data同有定义】且 是相同input类型(不是input直接返回true)
// （或逻辑的另一部分，大概是weex平台的逻辑，应该忽略）
function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}


 function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0   // 旧数组索引开始0
    let newStartIdx = 0   // 新数组索引开始0
    let oldEndIdx = oldCh.length - 1  // 旧数组索引最大
    let oldStartVnode = oldCh[0]  // 旧数组第1个节点
    let oldEndVnode = oldCh[oldEndIdx]  // 旧数组最后1个
    let newEndIdx = newCh.length - 1  // 新数组索引最大
    let newStartVnode = newCh[0]   // 新数组第1个节点
    let newEndVnode = newCh[newEndIdx]  // 新数组最后1个
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    const canMove = !removeOnly

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh)
    }

    // 如果老/新开始索引小于等于老/新最大索引，则继续循环
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) { // 老开始节点是不是undefined\null,是的话，开始索引++，只比较有节点内容的
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) { // 老结束节点是不是undefined\null,是的话，老索引--，只比较有节点内容的
        oldEndVnode = oldCh[--oldEndIdx]
      } else if (sameVnode(oldStartVnode, newStartVnode)) {  
        // 比较老开始节点和新开始节点是不是同一个节点，sameNode先判断key是不是相同，key不同，一定不是相同节点
        // 如果是相同节点，递归patchNode
        // 旧首idx++
        // 新首idx++
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        // 如果新老开始节点不同，看新老尾节点是否是同一个节点
        // 如果是相同节点，递归patchNode
        // 旧尾idx-- 旧尾节点更新
        // 新尾idx-- 新尾节点更新
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        // 首尾都不同，检查旧首和新尾是否相同
        // 如果是相同节点，递归patchNode
        // 如上注释canMove是给<transition-group>用的，忽略为true
        // 如果旧首和新尾相同
        // （nodeOps是各个平台操作dom的api封装）
        // 更新dom：在旧尾后一个前插入旧首节点（就是旧尾后插入旧首节点，就是旧首移动至尾部，向右移动）
        // 旧首idx++ 旧首节点更新
        // 新尾idx-- 新尾节点更新
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        // 检查旧尾和新首是否相同
        // 如果相同
        // 更新dom：在旧首前插入旧尾节点（就是旧尾移动至头部，向左移动）
        // 旧尾idx-- 旧尾节点更新
        // 新首idx++ 新首节点更新
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      } else {
        // 无匹配相同的节点
        // 如果oldKeyToIdx是未定义的（首次没有匹配到就是未定义的）-> oldKeyToIdx映射旧key和idx
        // 【createKeyToOldIdx 这个方法是映射从startIdx到endIdx的所有key和idx（返回一个对象，属性是key，值是idx）】
        // 1.如果说新开始节点是有key的，去到旧oldKeyToIdx映射里查查看有没有相同的key
        //  1.1如果说旧key-idx映射查到了，得到旧的这个node的索引，idxInOld
        // 2.如果新节点没有key,循环剩余旧节点数组，查找sameNode，并返回索引
        // 经过1或2，如果idxInOld有值，那么旧节点剩余中是有和新节点相同的节点
        // 待移动的节点就是vnodeToMove = oldCh[idxInOld]
        // 这里有两种情况：a:是因为相同的key被认为是同节点（就是1这里）b:循环通过sanmeNode找出
        // 所以再进行sameNode(vnodeToMove,newStartVnode),如果false，则是a，否则b
        // 对于a：key相同但是不是相同的元素，作为新增元素处理
        // 对于b：是相同节点，向旧开始节点前插入该节点，并把这个节点从旧节点数组中置为undefined
        // 如果没有idxInOld，新增元素，创建节点

        // 新开始idx++： 新开始节点更新
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
        } else {
          vnodeToMove = oldCh[idxInOld]
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
            oldCh[idxInOld] = undefined
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
          }
        }
        newStartVnode = newCh[++newStartIdx]
      }
    }
    // 上面的循环结束了
    // 如果旧开始大于旧结束，说明还有一些节点没有更新进来，需要将newStartIdx到newEndIdx之间的节点插入
    // 如果新开始大于旧结束，说明还有节点要删除，删除oldStartIdx, oldEndIdx之间的节点
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx)
    }
  }
```

> 不使用key，是如何更新的

旧数组：a b c d e
新数组；a b f c d e

从新数组向旧数组更新，先是a，旧也是a，ok，再是b，旧也是b，ok，再是f，旧是c，不知道现在的f是不是之前的c，默认是，所以需要更新c为f，后面更新d为c，再次更新e为d，最后剩下e，创建添加e
做了3次更新，一次创建插入
没有key每次走的都是sameVnode(oldStartVnode, newStartVnode)，因为key都是undefined，标签数据没有变

> 使用key是如何更新的

首尾patch

+ 1次循环patch a
标识a，不用更改
+ 2次循环patch b
标识b，不用更改
+ 3次循环，首patch不同，尾patch e
标识e，不用更改
+ 4次循环，尾patch d
标识d，不用更改
+ 5次循环，为patch c
标识c，不用更改
+ 6次循环，新数组剩下f
创建f插入c前
只有1创建插入

> 总结：
> 1. key的作用主要是为了高效的更新虚拟DOM，其原理是vue在patch过程中通过key可以精确判断两个节点是否是同一个，从而避免频繁更新不同元素，使得整个patch过程更加高效，减少DOM操作量，提高性能
> 2. 另外，若不设置key还可能在列表更新时引发一些隐藏的bug
> 3. vue中在使用相同标签名元素的过渡切换时，会使用到key属性，其目的也是为了让vue可以他们，否者vue只会替换其内部属性而不会触发过渡效果(元素出现了复用)
