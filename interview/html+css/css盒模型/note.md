#### 标准模型+IE模型
#### 标准模型和IE模型的区别
`标准模型（从里到外）`: content -> padding -> border -> margin (宽度和高度指的是content的宽度和高度)
`IE模型`：宽度指的是content+padding+border
#### CSS如何设置这两种模型
```
// 标准模型(浏览器默认)
box-sizing: content-box;
// IE模型
box-sizing: border-box;
```
#### js如何设置获取盒模型对应的宽和高
1. `dom.style.width/height`  只能取出内联样式，取不到外联css文件样式
2. `dom.currentStyle.width/height`  渲染后的宽和高(只能IE使用)
3. `window.getComputedStyle(dom).width/height`  通用性更好
4. `dom.getBoundingClientRect().width/height` 根据视窗左上角计算元素的绝对位置
#### 实例(根据盒模型解释边距重叠)
codes1.html
#### BFC(边距重叠解决方案)

重叠3情况：父子元素、兄弟元素（假设上元素下边距30px、下元素上边距5px则合并距离为30px）、空元素(取margin最大值)

###### BFC的基本概念
1. 一个BFC区域包含创建上下文元素的所有子元素，但是不包含创建了新的BFC的子元素的内部元素(白话解释就是一个BFC只包含一层子元素)
2. 每一个BFC区域都是独立隔绝的，互不影响
###### 触发条件
1. 根元素，即HTML元素
2. position:fixed/absolute
3. float不为none
4. overflow为visible
5. display的值为inline-block、table-cell、table-caption
###### BFC的使用场景
1. 防止margin发生重叠(兄弟元素)
具体代码可以查看`BFC示例`
2. 解决包含塌陷(父子元素，子元素会将父元素外边距下来)
具体代码可以查看`包含塌陷`
3. 用来清除浮动的影响(没有设置高度的父盒子，所有子盒子都浮动)
具体代码可以查看`BFC示例`
4. 阻止标准流元素被浮动元素覆盖(两栏布局)
具体代买可以查看`阻止浮动元素覆盖`
