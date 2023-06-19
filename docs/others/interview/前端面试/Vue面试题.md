---
title: Vue面试题汇总
author: Zack Zheng
date: 1999/01/01 00:00
categories:
 - 面试题
tags:
 - Vue
---

### v-show和v-if区别

控制手段：`v-show`隐藏则是为该元素添加`css--display:none`，`dom`元素依旧还在。`v-if`显示隐藏是将`dom`元素整个添加或删除

编译过程：`v-if`切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；`v-show`只是简单的基于css切换

编译条件：`v-if`是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染

- `v-show` 由`false`变为`true`的时候不会触发组件的生命周期
- `v-if`由`false`变为`true`的时候，触发组件的`beforeCreate`、`create`、`beforeMount`、`mounted`钩子，由`true`变为`false`的时候触发组件的`beforeDestory`、`destoryed`方法

性能消耗：`v-if`有更高的切换消耗；`v-show`有更高的初始渲染消耗；

如果需要非常频繁地切换，则使用 v-show 较好

如果在运行时条件很少改变，则使用 v-if 较好

### 为何v-for中要用key

### v-if和v-for为什么不能一起使用

在`vue`模板编译的时候，会将指令系统转化成可执行的`render`函数

通过`app.$options.render`就能得到渲染函数

```javascript
ƒ anonymous() {
  with (this) { return 
    _c('div', { attrs: { "id": "app" } }, 
    _l((items), function (item) 
    { return (isShow) ? _c('p', [_v("\n" + _s(item.title) + "\n")]) : _e() }), 0) }
}
```

可以发现`v-for`的优先级比`v-if`高，在渲染`v-for`渲染函数的内部都会进行一次`if`判断，所以同一个标签上同时使用

会带来性能方面的浪费（每次渲染都会先循环再进行条件判断）

避免：

+ 在外层嵌套`template`（页面渲染不生成`dom`节点），在这一层进行v-if判断，然后在内部进行v-for循环
+ 如果条件出现在循环内部，可通过计算属性`computed`提前过滤掉那些不需要显示的项

### 描述vue组件声明周期（父子组件）

### event对象参数怎么带到method中

```vue
<script>
export default {
  data() {
    return {
      num: 0
    }
  },
  methods: {
    add(event) {
      this.num++
    },
    add2(val, event) {
      this.num += val
    }
  }
}
</script>

<template>
  <button @click="add">
    +1
  </button>

  <button @click="add2(2, $event)">
    +2
  </button>
</template>
```

event是原生的（上例：MouseEvent）

事件被挂载到当前元素（上例：`<button>`）

### 常见的(事件)修饰符有哪些

```vue
<!-- 阻止单击事件继续传播 -->
<button v-on:click.stop="doThis"></button>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThis"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">
...
</div>

<!-- 只当在event.target是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部触发的 -->
<div v-on:click.self="doThis">
...
</div>

<!-- 按键修饰符 -->
<!-- 即使Alt或Shift被一同按下时也会触发  -->
<button @click.ctrl="onClick">
A
</button>

<!-- 有且只有Ctrl被按下时才触发  -->
<button @click.ctrl.exact="onClick">
A
</button>

<!-- 没有任何系统修饰符被按下时才触发  -->
<button @click.exact="onClick">
A
</button>

<!-- form表单修饰-->
<!-- 去除前后空格 -->
<input type="text" v-model.trim="name" />

<!-- 输入完才变化 -->
<input type="text" v-model.lazy="name" />

<!-- 转换为数字 -->
<input type="text" v-model.number="name" />
```

### vue组件如何通讯

整理`vue`中8种常规的通信方案

1. 通过 props 传递 (父向子传参数)

   `Children.vue`组件

   ```vue
   props:{
       // 字符串形式
    name:String // 接收的类型参数
       // 对象形式
       age:{
           type:Number, // 接收的类型为数值
           defaule:18,  // 默认值为18
          require:true // age属性必须传递
       }
   }
   ```

   `Father.vue`组件

   ```vue
   <Children name="jack" age=18 />
   ```

2. 通过 $emit 触发自定义事件（子向父传参数）

   `Children.vue`

   ```javascript
   this.$emit('add', good)  
   ```

   `Father.vue`

   ```vue
   <Children @add="cartAdd($event)" />
   ```

3. 使用 ref

   `父组件`

   ```vue
   <Children ref="foo" />
   
   this.$refs.foo  // 获取子组件实例，通过子组件实例我们就能拿到对应的数据
   ```

4. EventBus (兄弟组件)

   `Bus.js`

   ```javascript
   // 创建一个中央时间总线类  
   class Bus {  
     constructor() {  
       this.callbacks = {};   // 存放事件的名字  
     }  
     $on(name, fn) {  
       this.callbacks[name] = this.callbacks[name] || [];  
       this.callbacks[name].push(fn);  
     }  
     $emit(name, args) {  
       if (this.callbacks[name]) {  
         this.callbacks[name].forEach((cb) => cb(args));  
       }  
     }  
   }  
     
   // main.js  
   Vue.prototype.$bus = new Bus() // 将$bus挂载到vue实例的原型上  
   // 另一种方式  
   Vue.prototype.$bus = new Vue() // Vue已经实现了Bus的功能 
   ```

   `Children1.vue`

   ```javascript
   this.$bus.$emit('foo')  
   ```

   `Children2.vue`

   ```javascript
   this.$bus.$on('foo', this.handle)  
   ```

   - [`EventBus`](https://github.com/zack-xy/write-js/blob/main/EventBus/eventBus.js)：`EventBus` 是一个全局的事件总线，通常是作为一个单例对象存在，用于在不同组件或模块之间传递事件和数据。在 Vue.js 中，Vue 实例可以充当 `EventBus` 的角色。
   - [`EventEmitter`](https://github.com/zack-xy/write-js/blob/dd25befc4a76c7ce17d7715ec3d517d3dce75f2b/EventEmitter/eventEmitter.js)：`EventEmitter` 是一个基于类的模块，通常是作为一个实例对象存在，用于在单个组件或模块内部实现事件的发布和订阅。

5. $parent 或$root

   通过共同祖辈`$parent`或者`$root`搭建通信桥连

   兄弟组件

   ```
   this.$parent.on('add',this.add)
   ```

   另一个兄弟组件

   ```
   this.$parent.emit('add')
   ```

6. attrs 与 listeners (祖先传递数据给子孙)

   ```vue
   // child：并未在props中声明foo
   <p>
   {{$attrs.foo}}
   </p>
   
   // parent
   <HelloWorld foo="foo" />
   ```

   ```vue
   // 给Grandson隔代传值，communication/index.vue
   <Child2 msg="lalala" @some-event="onSomeEvent"></Child2>
   
   // Child2做展开
   <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
   
   // Grandson使⽤
   <div @click="$emit('some-event', 'msg from grandson')">
   {{msg}}
   </div>
   ```

7. Provide 与 Inject

   祖先组件

   ```vue
   provide(){
       return {
           foo:'foo'
       }
   }
   ```

   后代组件

   ```vue
   inject:['foo'] // 获取到祖先组件传递过来的值
   ```

8. Vuex 

   - 父子关系的组件数据传递选择 `props` 与 `$emit`进行传递，也可选择`ref`
   - 兄弟关系的组件数据传递可选择`$bus`，其次可以选择`$parent`进行传递
   - 祖先与后代组件数据传递可选择`attrs`与`listeners`或者 `Provide`与 `Inject`
   - 复杂关系的组件数据传递可以通过`vuex`存放共享的变量

::: warning
**在Vue2中，使用$on绑定事件时需要注意以下两点，否则可能导致内存泄漏：**

1. 必须在组件销毁前使用$off方法解绑事件，否则该事件会一直存在于内存中，直到页面关闭才会被释放。

2. 在使用$on绑定事件时，最好使用once选项或手动解绑事件，避免事件被重复触发。）

:::


### 描述组件渲染和更新的过程

### 双向数据绑定v-model的实现原理
