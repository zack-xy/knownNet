---
title: 记一次Vue版本升级带来的bug
lang: en-US
date: 2021/06/04 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

### 记一次Vue版本升级带来的bug（时间：2021\06\04）

#### 问题是：具体的问题是，在项目中，页面上有些元素莫名其妙的不显示。

当出现问题时，首先排查的是vue代码，检查控制显示的逻辑是不是正确，而后排查数据是不是对的，经排查
以上都没有问题。

之后就是怀疑，出问题的代码，只是出现在slot中，根据表现来看，高度怀疑，两个并排的v-if，第一个不显示，则后面的逻辑数据都不生效，同层级的所有v-if都不会展示。

之后，查找代码中具有这种共性的代码，检查页面是不是有相同的问题，经检查页面确实有这个问题。

但是本地启动的页面是没有问题的，该问题只有上到测试环境或者生产环境才有问题

回溯生产和测试的打包流程，意识到可能是包版本问题引发的bug，怀疑上线环境中的UI库和Vue的版本与本地不一致
在本地重新拉取镜像模拟生产打包，果然复现了问题，可以断定是版本问题，再经比较，确定是Vue版本问题，而且是最新的版本2.6.13会有这个问题，而该版本，在3天前发布。

复盘原因，是拉取包是使用公司自建镜像，类似cnpm，拉取镜像时，不读取package-lock.json，总是拉取最新版本的npm包，导致该问题。

之后，查看vue@2.6.13源代码，经调试源码，发现bug根本原因是这一次修改:

https://github.com/vuejs/vue/pull/11963/files

在normalizeScopedSlot方法中，不显示的v-if元素会被解析为vNode.isComment
在上一个版本中，这里的判断是有且只有一个元素，并且这个元素是isComment，才会返回undefined
在2.6.13中，被修改成，拿第一个元素，如果是isComment，则就会返回undefined，最后导致后面的元素都不会渲染
所以导致上述问题

所以解决办法也可以想到，就是在最外面包一个标签，或者使用v-show（当然，对于上线项目来说，解决办法应该是固定版本，重新打包上线）

正打算给vue提issue，发现已经有人先一步了
[vuejs/vue#12102](https://github.com/vuejs/vue/issues/12102)
而且bug早已经在6月2日修复了
https://github.com/vuejs/vue/commit/0367ddf7894bc1b42a060bac546aecd6660190a2
真快。。。。（感觉这个问题我也可以修，淦~~~）


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="app">
    <todo-list>
      <template v-slot:todo="{ todo }">
        <span v-if="todo.showA">A content</span>
        <span v-if="todo.showB">B content</span>
      </template>
    </todo-list>
  </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.13"></script>
<script>
  Vue.component('todo-list', {
    data: function () {
      return {
        todos: [{ text: "Learn Vue", id: "1", showA: false, showB: true }]
      }
    },
    template: `<ul>
                <li v-for="todo in todos" v-bind:key="todo.id">
                  <slot name="todo" v-bind:todo="todo"></slot>
                </li>
              </ul>`
  });
  new Vue({
    el: '#app',
  });
</script>

</html>
```
