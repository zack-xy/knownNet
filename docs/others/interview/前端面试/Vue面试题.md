---
title: Vue面试题汇总
author: Zack Zheng
date: 1999/01/01 00:00
categories:
 - 面试题
tags:
 - Vue
 - Remote Code
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

使用场景

1. 当我们在使用`v-for`时，需要给单元加上`key`

   ```js
   <ul>
       <li v-for="item in items" :key="item.id">...</li>
   </ul>
   ```

2. 用`+new Date()`生成的时间戳作为`key`，手动强制触发重新渲染

   ```js
   <Comp :key="+new Date()" />
   ```

> key是给每一个vnode的唯一id，也是diff的一种优化策略，可以根据key，更准确， 更快的找到对应的vnode节点

当我们在使用`v-for`时，需要给单元加上`key`

- 如果不用key，Vue会采用就地复用原则：最小化element的移动，并且会尝试尽最大程度在同适当的地方对相同类型的element，做patch或者reuse。
- 如果使用了key，Vue会根据keys的顺序记录element，曾经拥有了key的element如果不再出现的话，会被直接remove或者destoryed

用`+new Date()`生成的时间戳作为`key`，手动强制触发重新渲染

- 当拥有新值的rerender作为key时，拥有了新key的Comp出现了，那么旧key Comp会被移除，新key Comp触发渲染

设置key值一定能提高diff效率吗？

其实不然，文档中也明确表示

> 当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素

这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出

建议尽可能在使用 `v-for` 时提供 `key`，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升

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

   - `EventBus`：`EventBus` 是一个全局的事件总线，通常是作为一个单例对象存在，用于在不同组件或模块之间传递事件和数据。在 Vue.js 中，Vue 实例可以充当 `EventBus` 的角色。
  
<Suspense>
  <my-codes title="EventBus手写示例代码" repo="o-bricks" path="jsFragment/underscore/_.js" lang="js" lazy/>
</Suspense>

   - `EventEmitter`：`EventEmitter` 是一个基于类的模块，通常是作为一个实例对象存在，用于在单个组件或模块内部实现事件的发布和订阅。

<Suspense>
  <my-codes title="EventEmitter手写示例代码" repo="o-bricks" path="jsFragment/underscore/_.js" lang="js" lazy/>
</Suspense>

1. $parent 或$root

   通过共同祖辈`$parent`或者`$root`搭建通信桥连

   兄弟组件

   ```
   this.$parent.on('add',this.add)
   ```

   另一个兄弟组件

   ```
   this.$parent.emit('add')
   ```

2. attrs 与 listeners (祖先传递数据给子孙)

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

3. Provide 与 Inject

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

4. Vuex 

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

### 自定义v-model

实现1:

```
<template>
  <div>
    <my-custom-input v-model="myValue"></my-custom-input>
  </div>
</template>
```

完整的自定义v-model的组件示例代码如下：

```vue
<template>
  export default {
  props: {
  value: {
  type: String,
  default: ''
  }
  },
  methods: {
  updateValue(newValue) {
  this.$emit('input', newValue)
  }
  }
  }
</template>

<template>
  <div>
    <input :value="value" @input="updateValue($event.target.value)">
  </div>
</template>
```

实现2:（为什么model属性）

```vue
<script>
// change需要和model中的event对应
// model中的prop对应props中text
export default {
  model: {
    prop: 'text',
    event: 'change1'
  },
  props: {
    text: String,
    default() {
      return ''
    }
  }
}
</script>

<template>
  <input type="text" :value="text" @input="$emit('change1', $event.target.value)">
</template>
```

对于一些组件，例如区间选择，它们需要在值改变时同时发出一个名为`start`和一个名为`end`的事件。我们同样可以使用 `model` 对象来简写这种用法。

```vue
Vue.component('my-range', {
  model: {
    prop: 'range',
    event: 'change'
  },
  props:  {
    range: {
      type: Array,
      default: function () {
        return [0, 100]
      }
    }
  },
  templates: `
    <div>
      <input
        :value="range[0]"
        @input="$emit('change', [+$event.target.value, range[1]])">
      <input
        :value="range[1]"
        @input="$emit('change', [range[0], +$event.target.value])">
    </div>
  `
})
```

```vue
<!-- 使用 -->
<my-range v-model="range"></my-range>
```

#### 说说你对slot的理解？slot使用场景有哪些？

`slot`可以分来以下三种：

- 默认插槽

  子组件`Child.vue`

  ```html
  <template>
      <slot>
        <p>插槽后备的内容</p>
      </slot>
  </template>
  ```

  父组件

  ```html
  <Child>
    <div>默认插槽</div>  
  </Child>
  ```

- 具名插槽

  子组件`Child.vue`

  ```html
  <template>
      <slot>插槽后备的内容</slot>
    <slot name="content">插槽后备的内容</slot>
  </template>
  ```

  父组件

  ```html
  <child>
      <template v-slot:default>具名插槽</template>
      <!-- 具名插槽⽤插槽名做参数 -->
      <template v-slot:content>内容...</template>
  </child>
  ```

- 作用域插槽

  父组件中在使用时通过`v-slot:`（简写：#）获取子组件的信息，在内容中使用

  子组件`Child.vue`

  ```html
  <template> 
    <slot name="footer" testProps="子组件的值">
            <h3>没传footer插槽</h3>
    </slot>
  </template>
  ```

​		父组件

```html
<child> 
    <!-- 把v-slot的值指定为作⽤域上下⽂对象 -->
    <template v-slot:default="slotProps">
      来⾃⼦组件数据：{{slotProps.testProps}}
    </template>
    <template #default="slotProps">
      来⾃⼦组件数据：{{slotProps.testProps}}
    </template>
</child>
```

`slot`本质上是返回`VNode`的函数，一般情况下，`Vue`中的组件要渲染到页面上需要经过`template -> render function -> VNode -> DOM` 过程

### 动态给vue的data添加一个新的属性时会发生什么？怎样解决？

直接点设置对象属性，页面没有更新

`Vue` 不允许在已经创建的实例上动态添加新的响应式属性

若想实现数据与视图同步更新，可采取下面三种解决方案：

- Vue.set()

- Object.assign()

  ```js
  this.someObject = Object.assign({}, this.someObject, { newProperty1: 1, newProperty2: 2 })
  ```

- $forcecUpdated() （不建议）

### 什么是动态组件

在Vue 2中，动态组件是指可以根据父组件的数据动态切换子组件的组件。通过使用Vue的`<component>`元素，可以在父组件中动态地绑定一个组件，从而实现动态组件的效果。

动态组件的实现方式有两种：

使用`<component>`元素的is属性，将其绑定到一个变量或计算属性，然后根据该变量或计算属性的值动态地渲染不同的子组件。

例如：

```html
<component :is="currentComponent"></component>
```

其中，currentComponent是一个变量或计算属性，它的值可以是不同的子组件的名称。

使用Vue的`<keep-alive>`元素，可以缓存动态组件的状态，从而在组件切换时保留其状态。

例如：

```html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```

其中，`<keep-alive>`元素用于缓存动态组件的状态，从而在组件切换时保留其状态。

### 什么是异步组件

在Vue 2中，异步组件是指在需要时才会被加载的组件。它们可以帮助我们优化应用程序的性能，因为在初始渲染时不会加载所有组件，而是只加载当前需要的组件。

异步组件的实现方式有两种：

1. 使用工厂函数。在组件定义时，使用一个工厂函数来返回一个Promise对象，在该Promise对象resolve时，返回组件的定义。这样，在需要加载组件时，Vue会执行该工厂函数来加载组件。

例如：

```javascript
Vue.component('async-component', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      template: '<div>Async Component</div>'
    })
  }, 1000)
})
```

在上面的例子中，异步组件定义了一个工厂函数，该函数会在1秒钟后返回组件的定义

2. 使用动态import。在组件定义时，使用ES6的动态import语法来加载组件。当需要加载组件时，Vue会自动执行import语句来加载组件。

例如：

```javascript
Vue.component('async-component', () => import('./AsyncComponent.vue'))
```

在上面的例子中，异步组件使用了ES6的动态import语法来加载组件。当需要加载组件时，Vue会自动执行import语句来加载组件。

### 怎样缓存组件，缓存后怎样更新，说说你对keep-alive的理解

keep-alive是vue中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM

当一个组件被包裹在`<keep-alive>`组件中时，该组件的状态会被缓存到内存中。当该组件再次被渲染时，Vue会从内存中获取已缓存的组件实例，并将其重新挂载到DOM中，从而避免了重新创建组件实例和销毁已有的组件实例的开销。

`keep-alive`可以设置以下`props`属性：

- `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存
- `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存
- `max` - 数字。最多可以缓存多少组件实例

设置了 keep-alive 缓存的组件，会多出两个生命周期钩子（`activated`与`deactivated`）：

- 首次进入组件时：`beforeRouteEnter` > `beforeCreate` > `created`> `mounted` > `activated` > ... ... > `beforeRouteLeave` > `deactivated`

- 再次进入组件时：`beforeRouteEnter` >`activated` > ... ... > `beforeRouteLeave` > `deactivated`

  

缓存后获取数据可以有以下两种：

- beforeRouteEnter
- actived

每次组件渲染的时候，都会执行`beforeRouteEnter`

```go
beforeRouteEnter(to, from, next){
    next(vm=>{
        console.log(vm)
        // 每次进入路由执行
        vm.getData()  // 获取数据
    })
},
```

在`keep-alive`缓存的组件被激活的时候，都会执行`actived`钩子

```go
activated(){
   this.getData() // 获取数据
},
```

::: warning

注意：服务器端渲染期间`avtived`不被调用

::: 

原理：keep-alive组件没有`template`，而是用了`render`，在组件渲染的时候会自动执行`render`函数

### 说说你对vue的mixin的理解，有什么应用场景？

mixin 是一种用于复用组件选项的方式。使用 mixin 可以将组件选项合并到多个组件中，从而减少重复代码，提高代码复用性。

本质其实就是一个`js`对象，它可以包含我们组件中任意功能选项，如`data`、`components`、`methods`、`created`、`computed`等等

局部混入：

```js
Vue.component('ComponentA', {
  mixins: [myMixin]
})
```

全局混入：

```js
Vue.mixin({
  created() {
    console.log('全局混入')
  }
})
```

- 替换型策略有`props`、`methods`、`inject`、`computed`，就是将新的同名参数替代旧的参数
- 合并型策略是`data`, 通过`set`方法进行合并和重新赋值
- 队列型策略有生命周期函数和`watch`，原理是将函数存入一个数组，然后正序遍历依次执行
- 叠加型有`component`、`directives`、`filters`，通过原型链进行层层的叠加

存在的问题：

1. 命名冲突：如果多个 mixin 中定义了同名的属性或方法，合并时会发生命名冲突，导致其中一个 mixin 被覆盖。
2. 继承顺序：mixin 的选项会按照定义顺序依次被合并到组件中，如果多个 mixin 中存在相同的选项，合并顺序会影响最终结果。
3. 隐式依赖：mixin 可以访问组件的数据和方法，但是组件无法知道 mixin 中使用了哪些数据和方法，这会导致隐式依赖，增加代码的复杂度和维护难度。
4. 命名空间污染：如果 mixin 中定义了全局变量或函数，可能会与组件中的变量或函数发生命名冲突，导致命名空间污染。


### vue2中的挂载与销毁时机问题

问：路由跳转的时候，新页面挂载的时候旧页面是否已经销毁

这个要区分情况，以及要定义什么叫销毁


如果定义DOM不存在叫销毁，要区分情况

```
<transition name="fade">
    <router-view></router-view>
</transition>
```

如果如上外面包裹了切换动画，新页面mounted挂载生命周期里依然可以获取到旧页面的DOM，答案是没有销毁


如果没有包裹动画，则取不到旧页面的DOM，答案是已经销毁



如果定义vnode不存在叫销毁

显然如果包裹了keep-alive，旧页面依然以vnode的形式存在于内存之中，答案是没有销毁，反之没有keep-alive，答案是销毁了
