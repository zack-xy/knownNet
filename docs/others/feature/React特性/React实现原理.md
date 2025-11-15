---
title: 实现自己的React
author: Zack Zheng
date: 2025/09/30 12:28
categories:
 - 何以编程
tags:
 - React
---

[build-your-own-react原文地址](https://pomb.us/build-your-own-react/)

-------------------------------

从0开始实现一个简易的React。

+ <a href="#step-0">步骤0: 回顾</a>
+ <a href="#step-1">步骤1: 实现`createElement`函数</a>
+ <a href="#step-2">步骤2: 实现`render`函数</a>
+ <a href="#step-3">步骤3: 并发模式</a>
+ <a href="#step-4">步骤4: 实现`Fibers`</a>
+ <a href="#step-5">步骤5: 渲染和提交阶段</a>
+ <a href="#step-6">步骤6: 协调</a>
+ <a href="#step-7">步骤7: 函数组件</a>
+ <a href="#step-8">步骤8: Hooks</a>

-------------------------------

#### <div id="step-0">第0步：回顾</div>

回顾一下我们怎么使用React的，分为3步，定义一个React元素、从DOM中获取一个节点、将React元素渲染到节点中。

```jsx

const element = <h1 title="foo">Hello</h1>;
const container = document.getElementById("root");
ReactDOM.render(element, container);

```

###### 删除所有的React代码，用普通的js代码进行替换。


第1行是jsx代码，jsx通过Babel等构建工具转换为js。就是将标签的代码转换为`createElement`函数调用，参数是标签名、属性对象、子节点

```js
const element = React.createElement(
  "h1", 
  { title: "foo" }, 
  "Hello"
);
```

`createElement`函数返回一个对象：有2个属性，一个`type`和`props`(还有其他的属性，现在只关心这2个)

```js
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello"
  }
};
```

+ `type`是一个字符串，指定想要创建的DOM节点的类型，也就是使用`document.createElement`创建HTML时传进去的tagName，也可以是函数，将在<a href="#step-7">第7步函数组件</a>中介绍   
+ `props`是一个对象，包含了jsx所有的键值。除此外还有一个特殊属性`children`，在上面的例子里是一个字符串，通常是一个包含更多元素(element对象)的数组，所以构成了元素树。

接下来替换`ReactDOM.render`。`render`是React改变DOM的地方。   
首先，使用element中的type创建node节点，本例中是`h1`   
然后，将所有element的`props`赋值到node节点上（为避免混淆，element指代React元素，node指代DOM元素）    
然后创建子节点，只有1个字符串作为子节点，所以创建1个文本节点。    
使用`textNode`而不是设置innerText,为的是以相同方式处理所有元素    
注意使用`nodeValue`就像处理h1的title属性一样，可以认为这个字符串有`props: {nodeValue: "hello"}`    


```js

const node = document.createElement(element.type); // h1
node.title = element.props.title; // title="foo"
const text = docoment.createTextNode("");
text["nodeValue"] = element.props.children; // children="Hello"

```

最后，把textNode加到h1,再把h1加到container中

```js
const container = document.getElementById("root");
node.appendChild(text);
container.appendChild(node);

```

也就是上面的3行React代码，最终会变成下面这些js代码

```js

// 虚拟DOM
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello"
  }
};

// 容器
const container = document.getElementById("root");

// render渲染
const node = document.createElement(element.type); // h1
node.title = element.props.title; // title="foo"
const text = document.createTextNode("");
text["nodeValue"] = element.props.children; // children="Hello"

node.appendChild(text);
container.appendChild(node);

```

--------------------------------

#### <div id="step-1">第1步：实现`createElement`函数</div>

以下面代码为例，实现我们自己的`createElement`函数,将jsx转换为js

```js

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
const container = document.getElementById("root");
ReactDOM.render(element, container);

```

上一步的时候，我们知道，一个React元素就是一个有`type`和`props`属性的对象,我们实现的函数需要做的就是创建这个对象

```js
const element = React.createElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.createElement("b")
)

```

对props使用扩展运算符号，对children使用剩余参数，这样一来，childen就总是一个数组      


```js

// 返回虚拟DOM对象
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props, // 展开所有属性
      // 使用剩余参数，所以children是一个数组
      // 可能是对象或者基本类型，如果是基本类型，就是文本节点，调用createTextElement返回文本节点的虚拟DOM对象
      // 总之，children是一个虚拟DOM对象构成的数组
      children: children.map(child => 
        typeof child === "object"
          ? child
          : createTextElement(child)
      )
    }
  };
}

// 创建文本节点虚拟DOM
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

```

给我们自己的实现起个名字，比如`Didact`，我们也想用jsx，怎么告诉babel转译的时候，使用我们自己定义的`Didact.createElement`函数呢？添加一个注释`/** @jsx Didact.createElement */`就可以了     

```js

const Didact = {
  createElement,
};

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

```

-------------------------------

#### <div id="step-2">第2步：实现`render`函数</div>

下一步，需要实现我们自己版本的`ReactDOM.render`函数     

目前，我们只关心向DOM添加内容，稍后处理更新和删除     

完整的代码如下：    

```js

// 返回虚拟DOM对象
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => 
        typeof child === "object"
          ? child
          : createTextElement(child)
      )
    }
  }
}

// 返回文本节点虚拟DOM
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}

// 渲染函数，根据虚拟DOM节点element生成DOM
// 将生成的DOM塞到container中
function render(element, container) {
  const dom = 
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type)
  // 判断是不是节点属性，children特殊    
  const isProperty = key => key !== "children"
  // 遍历每一个属性并赋值
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })
  // 递归处理子节点
  element.props.children.forEach(child => render(child, dom))
  // 处理完之后，把生成的dom塞到容器里
  container.appendChild(dom)
}

// 自己实现的，起名Didact
const Didact = {
  createElement,
  render
}

/** @jsx Didact.createElement */
// 这段jsx经过babel，进行类似如下调用
/**
 * 
 * Didact.createElement(
 *  "div", 
 *  {style: "background: salmon"},
 *  Didact.createElement(
 *    "h1",
 *    null,
 *    "hello World"
 *  ),
 *  Didact.createElement(
 *    "h2",
 *    { style: "text-align:right" }
 *    "from Didact"
 *  )
 * )
 * 
 */
const element = (
  <div style="background: salmon">
    <h1>hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
)
const container = document.getElementById("root")
Didact.render(element, container)

```

--------------------------------

#### <div id="step-3">第3步：并发模式</div>

现在的问题是，render是个递归，一旦开始，就需要跑完，如果元素非常多，渲染就会阻塞浏览器操作。     
解决办法就是把工作分为几个小单元，在完成每个单元后，如果还有其他需要完成的工作，就让浏览器中断渲染    
这里用到`requestIdleCallback`,浏览器会在主线程空闲时回调`requestIdleCallback`    

```js

let nextUnitOfWork = null

function workLoop(deadline) {
  let shouldYield = false
  // 如果有需要做的单元工作，并且不阻塞时（主线程空闲），进行单元任务
  while (nextUnitOfWork && !shouldYield) {
    // 进行单元工作
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    ) 
    // 如果主线程空闲（有剩余时间），标记不用阻塞
    shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
} 

requestIdleCallback(workLoop)

// 执行单元任务并返回下一个单元任务
function performUnitOfWork(nextUnitOfWork) {
  // TODO
}

```
::: warning 提示

React不再使用requestIdleCallback，用的是[调度包](https://github.com/facebook/react/tree/main/packages/scheduler)，概念上是一样的

:::


--------------------------------

#### <div id="step-4">第4步：实现`Fibers`</div>

为了组织工作单元，需要一种数据结构：`Fiber树`   
每个元素都有一根纤维，每根纤维都是一个工作单位。   
假设要渲染一个虚拟DOM树，需要创建`根Fiber`，作为`nextUnitOfWork`下一个要进行的单元工作     
剩下的，将在`performUnitOfWork`中完成，对于每一个`Fiber`，做3件事：      
+ 1. 将元素添加到DOM     
+ 2. 为元素的子元素创建`Fiber`     
+ 3. 选择下一个工作单元     

每一个Fiber都有一个链接，指向第一个子单元、下一个同级单元和父单元

![](https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/fiber2.png)

完成一个fiber的工作时，如果有child，child就是下一个工作单元，图例中，完成`<div>`，下一个就是`<h1>`    
如果没有child，下一个就是兄弟sibling，比如`<p>`没有child，下一个就是`<a>`   
如果既没有child，也没有sibling，就去找“叔叔”，比如图例中的`<h2>`和`<a>`    
如果这个父节点（叔叔）没有子节点，就一直向上找，直到找到有自节点或者根为止，如果到根节点了，说明完成了渲染工作    


```js [代码实现]

let nextUnitOfWork = null

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    ) 
    shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
} 

// 浏览器准备之后调用workLoop
requestIdleCallback(workLoop)

function performUnitOfWork(fiber) {
  // TODO 添加dom节点
  if(!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom)
  }

  // TODO 创建新Fiber

  const elements = fiber.props.children
  let index = 0
  let prevSibling = null

  while (index < elements.length) {
    const element = elements[index]

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber 
    }

    prevSibling = newFiber
    index++
  }

  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

function render(element, container) {
  nextUnitofWork = {
    dom: container,
    props: {
      children: [element],
    }
  }
}



```

--------------------------------

#### <div id="step-5">第5步：渲染和提交阶段</div>

上一步有一个问题，`fiber.parent.dom.appendChild(fiber.dom)`这一步，因为浏览器中断渲染，可能看到不完整的页面。移除之，取而代之的是，追踪fiber树的根，称之为工作进度树`wipRoot`   

一旦我们完成所有工作（没有下一个工作单元），我们就会将整个fiber树提交到 DOM   

在`commitRoot`函数中实现这一点。在这里，我们递归地将所有节点追加到 dom 中   

```js [代码实现]

let nextUnitOfWork = null
let wipRoot = null

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    ) 
    shouldYield = deadline.timeRemaining() < 1
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }

  requestIdleCallback(workLoop)
} 

// 浏览器准备之后调用workLoop
requestIdleCallback(workLoop)

function performUnitOfWork(fiber) {
  // TODO 添加dom节点
  if(!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  // TODO 创建新Fiber

  const elements = fiber.props.children
  let index = 0
  let prevSibling = null

  while (index < elements.length) {
    const element = elements[index]

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber 
    }

    prevSibling = newFiber
    index++
  }

  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    }
  }
  nextUnitofWork = wipRoot
}

function commitRoot() {
  // TODO
}


```

--------------------------------

#### <div id="step-6">第6步：协调</div>

删除和更新节点   
每次提交，保存上一次提交的fiber树的引用，也就是`currentRoot`   
同时，对每一个fiber,增加alternate属性，指向旧fiber

```js

let currentRoot = null

function commitRoot() {
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}

function commitWork(fiber) {
  if(!fiber) {
    return
  }
  const domParent = fiber.parent.dom
  domParent.appendChild(fiber.dom)
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

function render (element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot // [!code ++]
  }
  nextUnitofWork = wipRoot
}

```

<Suspense>
  <my-codes title="完整代码" repo="o-bricks" path="demoCodes/React/react-demo/src/react.js" lang="js" lazy/>
</Suspense>


--------------------------------

#### <div id="step-7">第7步：函数组件</div>

