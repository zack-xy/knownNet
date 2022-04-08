#### v-if和v-for同时出现的问题
二者可以同时出现，但是，一般对于正常配置了eslint的项目来说不可以，因为eslint有校验，会报错

首先，关于v-if和v-for的优先级，可以在源码compiler/codegen/index.js中找到genElement方法，里面的if else判断，可以清楚看到for的判断在if判断之上，由此，可证明v-for的优先级高于v-if

如果v-if和v-for同时出现，分两种情况：
1、当同时出现在同一标签内，例如：

{{item}}
，可以通过vue.$options.render打印出渲染函数，可以清晰的看到会优先执行for循环，再执行if判断
2、当v-if出现在父级中，子级有v-for，此时再打印vue.$options.render，会发现会优先执行if判断。
若想优化，提升性能，v-if需要优先执行，可以在v-for外层加一层template搭配v-if使用。
若是v-if与v-for必须出现在同一层或v-if为v-for的子级的情况下，优化的方式可以将for循环的数组提前通过计算属性处理，尽量减少过多渲染导致的性能消耗。

#### new Vue()发生了什么（过程）