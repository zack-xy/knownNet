---
title: CSS备忘录
author: Zack Zheng
date: 2025/06/27 11:23
categories:
 - CSS专栏
tags:
 - CSS
---

#### 逻辑坐标系和物理坐标系

物理坐标系：x轴从屏幕左上角开始向右延伸，y轴从屏幕左上角开始向下延伸。     
逻辑坐标系：Inline轴（内联轴）就是文字书写方向、Block轴（块轴）就是流方向，如果说文字书写方向`writing-mod`变了，二者会互相变换      

根据逻辑属性，就有一些新的定义容器大小的属性，举两个例子，不一一例举：     
`block-size`块大小，书写从左到右，Block轴(块轴)从上到下的话(下面类似，不重复写了)，那么`block-size`就是定义高度的，等同于height
`inline-size`内联大小，如上条件，`inline-size`就是内联轴上定义大小的，就等同于width

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac2e7f9fb85644bba2eb64740984ea60~tplv-k3u1fbpfcp-zoom-1.image)


-------------------------------

#### box-sizing

`border-box`和`content-box`区别就是，`border-box`是算border和padding的，也就是宽度300，是包含boder和padding的，
反之`content-box`就只是内容宽300，额外再算上boder和padding，实际宽度是超过300的      


-------------------------------

#### 尺寸属性

| **物理属性** | **逻辑属性（horizontal-tab）** | **逻辑属性（vertical-lr）** | **逻辑属性（vertical-rl）** |
| ------------ | -----------------------------: | --------------------------- | --------------------------- |
| `width`      |                  `inline-size` | `block-size`                | `block-size`                |
| `height`     |                   `block-size` | `inline-size`               | `inline-size`               |
| `min-width`  |              `min-inline-size` | `min-block-size`            | `min-block-size`            |
| `min-height` |               `min-block-size` | `min-inline-size`           | `min-inline-size`           |
| `max-width`  |              `max-inline-size` | `max-block-size`            | `max-block-size`            |
| `max-height` |               `max-block-size` | `max-inline-size`           | `max-inline-size`           |


-------------------------------
