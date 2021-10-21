#  #margin次序 #css选择器

#### margin值的顺序

顺序：1、2、3、4（上、右、下、左）

+ 1、传入1个值
  `margin: 10px`
  4个值都是10px
+ 2、传入2值
  `margin: 10px 20px`
  1,3:10px（上下）
  2,4:20px（左右）
+ 3、传入3值
 `margin: 10px 20px 30px`
 1:10px(上)
 3:20px（下）
 2,4:30px（左右）
+ 4、传入4值
  从上开始顺时针

#### css选择器

##### 基础选择器
1、标签选择器
```
div {
  color:red;
}
```
2、类选择器  
```
.test{
  color:red;
} 
<div class=”test”></div>
```
3、Id选择器
```
#test{
  color:red;
}
<div id=”test”></div> 
```

4、通配符选择器 *  匹配所有标签，降低页面速度

##### 复合选择器
1、后代选择器
父级 子级{属性：属性值}
```
.father .child {
  color:red;
}
```

 
2、子元素选择器
父级>子级{属性：属性值}
```
.father>.son {
  color:red;
}
```

3、交集选择器（既是又是）
```
<p class=”red”></p>     
p.red {
  color:red;
}
```

4、并集选择器
```
.test,p,span { 
  color:red;
}
```
##### 伪类选择器
链接伪类
a:link  未访问的链接
a:visited 已访问的链接
a:hover  鼠标移动到链接上
a:active   选定的链接


##### CSS3属性选择器


E[att] 选择具有att属性的E元素
E[att="val"]   选择具有att属性且属性值等于val的E元素
E[att^="val"] 匹配具有att属性，且值以val开头的E元素
E[att$="val"]  匹配具有att属性，且值以val结尾的E元素
E[att*="val"]  匹配具有att属性，且值中含有val的E元素

权重是0010

##### css3结构伪类选择器
E:first-child  匹配父元素中的第一个子元素E
E:last-child  匹配父元素中的最后一个E元素
E:nth-child(n)  匹配父元素中的第n个子元素E(n可以是数字，关键字（even偶数、odd奇数）和公式(从0开始计算，第0个或超出的会忽略))
 常见公式：  2n              偶数2n+1          奇数5n               5，10，15...n+5             从第5个开始-n+5            前5个（包含第5个） 
 E:first-of-type 指定类型E的第一个
 E:last-of-type 指定类型E的最后一个
E:nth-of-type(n) 指定类型E的第n个

==注意：==
nth-child 从1开始
nth-child 不管子元素的类型
如：
div  span:nth-child（1）{
background-color:pink;
}
的意思是

div的第一个子元素，并且是span元素

div span:first-of-type{
background-color:pink;
}

这个意思是：div内span子元素的第一个


权重是0010
div  span:nth-child（1）
权重是0012

##### css3 伪元素选择器

选择符 简介
::before 在元素内部的前面插入内容
::after 在元素内部的后面插入内容

说明：

1.before和after必须有content属性
2.before在内容的前面，after在内容的后面
3.before和after创建一个元素，但是属于行内元素
4.因为dom里面看不见刚才创建的元素，所以我们成为伪元素
5.伪元素和标签一样，权重为1（0001）