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

**beforeCreate -> created**

- 初始化`vue`实例，进行数据观测

**created**

- 完成数据观测，属性与方法的运算，`watch`、`event`事件回调的配置
- 可调用`methods`中的方法，访问和修改data数据触发响应式渲染`dom`，可通过`computed`和`watch`完成数据计算
- 此时`vm.$el` 并没有被创建

**created -> beforeMount**

- 判断是否存在`el`选项，若不存在则停止编译，直到调用`vm.$mount(el)`才会继续编译
- 优先级：`render` > `template` > `outerHTML`
- `vm.el`获取到的是挂载`DOM`的

**beforeMount**

- 在此阶段可获取到`vm.el`
- 此阶段`vm.el`虽已完成DOM初始化，但并未挂载在`el`选项上

**beforeMount -> mounted**

- 此阶段`vm.el`完成挂载，`vm.$el`生成的`DOM`替换了`el`选项所对应的`DOM`

**mounted**

- `vm.el`已完成`DOM`的挂载与渲染，此刻打印`vm.$el`，发现之前的挂载点及内容已被替换成新的DOM

**beforeUpdate**

- 更新的数据必须是被渲染在模板上的（`el`、`template`、`render`之一）
- 此时`view`层还未更新
- 若在`beforeUpdate`中再次修改数据，不会再次触发更新方法

**updated**

- 完成`view`层的更新
- 若在`updated`中再次修改数据，会再次触发更新方法（`beforeUpdate`、`updated`）

**beforeDestroy**

- 实例被销毁前调用，此时实例属性与方法仍可访问

**destroyed**

- 完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器
- 并不能清除DOM，仅仅销毁实例



父子组件：

父组件创建created，子组件创建created，

子组件渲染mounted，父组件渲染mounted

父组件beforeUpdate，子组件beforeUpdate

子组件更新updated，父组件更新updated

父组件beforeDestroy，子组件beforeDestroy

子组件销毁destroyed，父组件销毁destroyed

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

### 自定义指令和自定义指令的使用场景

指令使用的几种方式：

```javascript
//会实例化一个指令，但这个指令没有参数 
`v-xxx`

// -- 将值传到指令中
`v-xxx="value"`  

// -- 将字符串传入到指令中，如`v-html="'<p>内容</p>'"`
`v-xxx="'string'"` 

// -- 传参数（`arg`），如`v-bind:class="className"`
`v-xxx:arg="value"` 

// -- 使用修饰符（`modifier`）
`v-xxx:arg.modifier="value"`
```

注册一个自定义指令有全局注册与局部注册

全局注册主要是通过`Vue.directive`方法进行注册

`Vue.directive`第一个参数是指令的名字（不需要写上`v-`前缀），第二个参数可以是对象数据，也可以是一个指令函数

```javascript
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()  // 页面加载完成之后自动让输入框获取到焦点的小功能
  }
})
```

局部注册通过在组件`options`选项中设置`directive`属性

```javascript
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus() // 页面加载完成之后自动让输入框获取到焦点的小功能
    }
  }
}
```

然后你可以在模板中任何元素上使用新的 `v-focus` property，如下：

```js
<input v-focus />
```

自定义指令也像组件那样存在钩子函数：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
- `update`：所在组件的 `VNode` 更新时调用，但是可能发生在其子 `VNode` 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
- `componentUpdated`：指令所在组件的 `VNode` 及其子 `VNode` 全部更新后调用
- `unbind`：只调用一次，指令与元素解绑时调用

所有的钩子函数的参数都有以下：

- `el`：指令所绑定的元素，可以用来直接操作 `DOM`

- `binding`：一个对象，包含以下`property`：

  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`

- `vnode`：`Vue` 编译生成的虚拟节点

- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用

  >  除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 `dataset` 来进行

##### 自定义指令的例子

###### 表单防止重复提交

```javascript
// 1.设置v-throttle自定义指令
Vue.directive('throttle', {
  bind: (el, binding) => {
    let throttleTime = binding.value; // 节流时间
    if (!throttleTime) { // 用户若不设置节流时间，则默认2s
      throttleTime = 2000;
    }
    let cbFun;
    el.addEventListener('click', event => {
      if (!cbFun) { // 第一次执行
        cbFun = setTimeout(() => {
          cbFun = null;
        }, throttleTime);
      } else {
        event && event.stopImmediatePropagation();
      }
    }, true);
  },
});
// 2.为button标签设置v-throttle自定义指令
<button @click="sayHello" v-throttle>提交</button>
```

###### 图片懒加载

```javascript
const LazyLoad = {
    // install方法
    install(Vue,options){
    	  // 代替图片的loading图
        let defaultSrc = options.default;
        Vue.directive('lazy',{
            bind(el,binding){
                LazyLoad.init(el,binding.value,defaultSrc);
            },
            inserted(el){
                // 兼容处理
                if('IntersectionObserver' in window){
                    LazyLoad.observe(el);
                }else{
                    LazyLoad.listenerScroll(el);
                }
                
            },
        })
    },
    // 初始化
    init(el,val,def){
        // data-src 储存真实src
        el.setAttribute('data-src',val);
        // 设置src为loading图
        el.setAttribute('src',def);
    },
    // 利用IntersectionObserver监听el
    observe(el){
        let io = new IntersectionObserver(entries => {
            let realSrc = el.dataset.src;
            if(entries[0].isIntersecting){
                if(realSrc){
                    el.src = realSrc;
                    el.removeAttribute('data-src');
                }
            }
        });
        io.observe(el);
    },
    // 监听scroll事件
    listenerScroll(el){
        let handler = LazyLoad.throttle(LazyLoad.load,300);
        LazyLoad.load(el);
        window.addEventListener('scroll',() => {
            handler(el);
        });
    },
    // 加载真实图片
    load(el){
        let windowHeight = document.documentElement.clientHeight
        let elTop = el.getBoundingClientRect().top;
        let elBtm = el.getBoundingClientRect().bottom;
        let realSrc = el.dataset.src;
        if(elTop - windowHeight<0&&elBtm > 0){
            if(realSrc){
                el.src = realSrc;
                el.removeAttribute('data-src');
            }
        }
    },
    // 节流
    throttle(fn,delay){
        let timer; 
        let prevTime;
        return function(...args){
            let currTime = Date.now();
            let context = this;
            if(!prevTime) prevTime = currTime;
            clearTimeout(timer);
            
            if(currTime - prevTime > delay){
                prevTime = currTime;
                fn.apply(context,args);
                clearTimeout(timer);
                return;
            }

            timer = setTimeout(function(){
                prevTime = Date.now();
                timer = null;
                fn.apply(context,args);
            },delay);
        }
    }

}
export default LazyLoad;
```

######  一键 Copy的功能

```javascript
import { Message } from 'ant-design-vue';

const vCopy = { //
  /*
    bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
    el: 作用的 dom 对象
    value: 传给指令的值，也就是我们要 copy 的值
  */
  bind(el, { value }) {
    el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到
    el.handler = () => {
      if (!el.$value) {
      // 值为空的时候，给出提示，我这里的提示是用的 ant-design-vue 的提示，你们随意
        Message.warning('无复制内容');
        return;
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea');
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value;
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea);
      // 选中值并复制
      textarea.select();
      // textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy');
      if (result) {
        Message.success('复制成功');
      }
      document.body.removeChild(textarea);
    };
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', el.handler);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler);
  },
};

export default vCopy;
```
