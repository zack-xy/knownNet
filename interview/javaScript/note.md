### DOM事件

#### DOM事件级别
1. DOM0 `element.onclick=function(){}`
2. DOM2 `element.addEventListener('click', function(){}, false)`
3. DOM3 `element.addEventListener('keyup', function(){}, false)`


#### 事件模型
捕获和冒泡

#### 事件流
3个阶段：捕获->目标->冒泡

#### 描述DOM事件捕获的具体流程
window->document->html->body->....->目标元素

#### Event对象常见应用
event.preventDefault()  // 阻止默认行为
event.stopPropagation()  // 阻止冒泡
event.stopImmediatePropagation()  // 事件响应优先级
event.currentTarget  // 事件委托，当前被点击的元素
event.target

#### 自定义事件

1. 
```
var eve = new Event('custome');
ev.addEventListener('custome', function() {
  console.log('custome')
})
ev.dispatchEvent(eve)   // 触发事件
```

2. CustomEvent // 可以设置参数

#### 代码示例
`DOM事件`
