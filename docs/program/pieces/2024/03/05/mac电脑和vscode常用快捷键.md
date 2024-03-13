---
title: mac电脑和vscode常用快捷键
author: Zack Zheng
date: 2023/03/05 00:00
categories:
 - vscode
tags:
 - vscode
---

⌘ + C：复制  
⌘ + X：剪切  
⌘ + V：粘贴  
⌘ + Z：撤销  
⌘ + Shift + Z: 重做
⌘ + S：保存  
⌘ + P：打印  
⌘ + A：全选  
⌘ + +/-: 放大和缩小   
⌘ + F：查找  
⌘ + G: 再次查找，查找之前找到的下一处(Shift+⌘ + G,再次查找上一处)     
⌘ + H: 隐藏最前面的应用窗口(Option+⌘+H 显示最前面的应用窗口，隐藏其他应用窗口)       
⌘ + M: 最小化前面的应用窗口(Option+⌘+M最小化前面应用的所有窗口)   
⌘ + shift + 4: 截屏   
⌘ + shift + 5: 录屏(再次⌘ + shift + 5按停止，停止录屏)   
Shift-Command-D：打开“桌面”文件夹        
Shift-Command-F：打开“最近使用”窗口，其中显示了您最近查看或更改过的所有文件。    
Shift-Command-G：打开“前往文件夹”窗口。     
Option-Command-L：打开“下载”文件夹。    
Shift-Command-N：新建文件夹。   
Shift-Command-O：打开“文稿”文件夹。     
Command–左中括号 ([)：前往上一文件夹。    
Command–右中括号 (])：前往下一个文件夹    
Command-Delete：将所选项移到废纸篓。    
Shift-Command-Delete：清倒废纸篓。    
Option-Shift-Command-Delete：清倒废纸篓而不显示确认对话框   
⌘ + Space：Spotlight搜索      


浏览器：

⌘ + T：打开一个新标签    
⌘ + Y: 打开历史记录 
⌘ + R: 刷新页面  
⌘ + shift + R: 清除缓存并刷新   
⌘ + shift + delete： 清除缓存   
⌘ + 0: 恢复页面缩放       
⌘ + D： 收藏网址    
⌘ + L：选中浏览器地址   
⌘ + Option + I : 打开调试窗口  
⌘ + [/]: 调试面板左右切换   
⌘ + shift + J: 查看下载   
⌘ Command+⌥ Option+⏵：下一个标签    
⌘ Command+⌥ Option+⏴：上一个标签    
⌘ Command+⇧ Shift+T: 重新打开之前被关掉的标签页    


----------

作者：[李宏旭](http://bjlhx.cnblogs.com/)

出处：[http://bjlhx.cnblogs.com](http://bjlhx.cnblogs.com/)

## vscode常用快捷键

### 添加注释

1.  注释一行代码：cmd + /
1.  注释一整段代码：option + shift + A

### 格式化代码

1.  格式化代码：option + shift + F
1.  格式化选中行代码：cmd + K cmd + F
1.  代码缩进：cmd + shift + P

### 查找替换

-   Command + F 查找
-   Command + Option + F 替换
-   Command + G 查找下一个
-   Command + Shift + G 查找上一个
-   Option + Enter 选中所有匹配项
-   Command + D 向下选中相同内容
-   Command + K Command + D 移除前一个向下选中相同内容

### 调试

-   F9 设置 或 取消断点
-   F5 开始 或 继续
-   F11 进入
-   Shift + F11 跳出
-   F10 跳过
-   Command + K Command + I 显示悬停信息

### 集成终端

-   Ctrl + `显示终端 Ctrl + Shift +` 新建终端
-   Command + Up 向上滚动
-   Command + Down 向下滚动
-   PgUp 向上翻页
-   PgDown 向下翻页
-   Command + Home 滚动到顶部
-   Command + End 滚动到底部

 

## 更多

## 光标移动

1.  移动到单词的最前面：option + ←
1.  移动到单词最末尾：option + →
1.  将当前行代码移动到上一行：option + ↑
1.  将当前行代码移动到下一行：option + ↓
1.  移动到当前行最前面：cmd + ←
1.  移动到当前行最末尾：cmd + →
1.  花括号之间跳转：cmd + shift + \
1.  移动到文档第一行或最后一行：cmd + ↑ / cmd + ↓

## 文本选择

基于单词，行，文档的光标操作加上个shift键，就可以移动光标的同时选择文本；例如，选择当前光标所在位置到当前行最前面的代码：cmd + ← + shift

### 删除操作

1.  删除当前行光标后的所有字符：cmd + fn + delete
1.  删除当前行光标前的所有字符：cmd + delete
1.  删除当前单词光标后的字符：option + fn + delete
1.  把当前单词光标前的字符删除：option + delete

### 添加注释

1.  注释一行代码：cmd + /
1.  注释一整段代码：option + shift + A

### 格式化代码

1.  格式化代码：option + shift + F
1.  格式化选中行代码：cmd + K cmd + F
1.  代码缩进：cmd + shift + P

## 文件、符号、代码之间的快速跳转

1.  control+ tab(同时按住)，继续按着control键，松开tab键： 打开当前打开文件的列表，选择要打开文件，松开control就能打开对应文件
1.  cmd + P打开最近打开文件列表，同时列表顶部出现搜索框，搜索文件名，回车（enter），可以再当前窗口打开对应文件；使用cmd + enter会在新的编辑器窗口打开这个文件
1.  control + G：行跳转，输入对应数字回车，可以跳转到当前文件的当前行
1.  cmd + P(输入文件名 + “:” + 行数)：跳转到指定文件的指定行数
1.  cmd + shift + O：调出当前文件的符号（函数名等），使用方向键或者搜索，回车，就能跳转到你想要的符号；如果输入“:”可以对当前文件的所有符号进行分类
1.  cmd + T：打开多个文件，搜索多个文件中的符号
1.  F12：跳转到函数的定义处
1.  cmd + F12：跳转到函数的实现位置；注：js中没有接口的概念，定义和实现是相同的，所以js中的F12和Cmd + F12效果是一样的
1.  shift + F12：打开函数引用的预览（把光标放在函数或者类上，按shift+F12可以打开一个引用列表和内嵌编辑器）

### 全局

1.  Command + Shift + P / F1 显示命令面板
1.  Command + P 快速打开
1.  Command + Shift + N 打开新窗口
1.  Command + W 关闭窗口

### 基本

1.  Command + X 剪切（未选中文本的情况下，剪切光标所在行）
1.  Command + C 复制（未选中文本的情况下，复制光标所在行）

 

1.  Option + Up 向上移动行
1.  Option + Down 向下移动行
1.  Option + Shift + Up 向上复制行
1.  Option + Shift + Down 向下复制行

 

-   Command + Shift + K 删除行
-   Command + Enter 下一行插入
-   Command + Shift + Enter 上一行插入
-   Command + Shift + \ 跳转到匹配的括号
-   Command + [ 减少缩进
-   Command + ] 增加缩进
-   Home 跳转至行首
-   End 跳转到行尾
-   Command + Up 跳转至文件开头
-   Command + Down 跳转至文件结尾
-   Ctrl + PgUp 按行向上滚动
-   Ctrl + PgDown 按行向下滚动
-   Command + PgUp 按屏向上滚动
-   Command + PgDown 按屏向下滚动
-   Command + Shift + [ 折叠代码块
-   Command + Shift + ] 展开代码块
-   Command + K Command + [ 折叠全部子代码块
-   Command + K Command + ] 展开全部子代码块
-   先按Command + K 再按 Command + 0 折叠全部代码块
-   先按Command + K 再按 Command + J 展开全部代码块
-   Command + K Command + C 添加行注释
-   Command + K Command + U 移除行注释
-   Command + / 添加、移除行注释
-   Option + Shift + A 添加、移除块注释
-   Option + Z 自动换行、取消自动换行

### 多光标与选择

-   Option + 点击 插入多个光标
-   Command + Option + Up 向上插入光标
-   Command + Option + Down 向下插入光标
-   Command + U 撤销上一个光标操作
-   Option + Shift + I 在所选行的行尾插入光标
-   Command + I 选中当前行
-   Command + Shift + L 选中所有与当前选中内容相同部分
-   Command + F2 选中所有与当前选中单词相同的单词
-   Command + Ctrl + Shift + Left 折叠选中
-   Command + Ctrl + Shift + Right 展开选中
-   Alt + Shift + 拖动鼠标 选中代码块
-   Command + Shift + Option + Up 列选择 向上
-   Command + Shift + Option + Down 列选择 向下
-   Command + Shift + Option + Left 列选择 向左
-   Command + Shift + Option + Right 列选择 向右
-   Command + Shift + Option + PgUp 列选择 向上翻页
-   Command + Shift + Option + PgDown 列选择 向下翻页

### 查找替换

-   Command + F 查找
-   Command + Option + F 替换
-   Command + G 查找下一个
-   Command + Shift + G 查找上一个
-   Option + Enter 选中所有匹配项
-   Command + D 向下选中相同内容
-   Command + K Command + D 移除前一个向下选中相同内容

### 进阶

-   Ctrl + Space 打开建议
-   Command + Shift + Space 参数提示
-   Tab Emmet插件缩写补全
-   Option + Shift + F 格式化
-   Command + K Command + F 格式化选中内容
-   F12 跳转到声明位置
-   Option + F12 查看具体声明内容
-   Command + K F12 分屏查看具体声明内容
-   Command + . 快速修复
-   Shift + F12 显示引用
-   F2 重命名符号
-   Command + Shift + . 替换为上一个值
-   Command + Shift + , 替换为下一个值
-   Command + K Command + X 删除行尾多余空格
-   Command + K M 更改文件语言

### 导航

-   Command + T 显示所有符号
-   Ctrl + G 跳转至某行
-   Command + P 跳转到某个文件
-   Command + Shift + O 跳转到某个符号
-   Command + Shift + M 打开问题面板
-   F8 下一个错误或警告位置
-   Shift + F8 上一个错误或警告位置
-   Ctrl + Shift + Tab 编辑器历史记录
-   Ctrl + - 后退
-   Ctrl + Shift + - 前进
-   Ctrl + Shift + M Tab 切换焦点

### 编辑器管理

-   Command + W 关闭编辑器
-   Command + K F 关闭文件夹
-   Command + \ 编辑器分屏
-   Command + 1 切换到第一分组
-   Command + 2 切换到第二分组
-   Command + 3 切换到第三分组
-   Command + K Command + Left 切换到上一分组
-   Command + K Command + Right 切换到下一分组
-   Command + K Command + Shift + Left 左移编辑器
-   Command + K Command + Shift + Right 右移编辑器
-   Command + K Left 激活左侧编辑组
-   Command + K Right 激活右侧编辑组

### 文件管理

-   Command + N 新建文件
-   Command + O 打开文件
-   Command + S 保存文件
-   Command + Shift + S 另存为
-   Command + Option + S 全部保存
-   Command + W 关闭
-   Command + K Command + W 全部关闭
-   Command + Shift + T 重新打开被关闭的编辑器
-   Command + K Enter 保持打开
-   Ctrl + Tab 打开下一个
-   Ctrl + Shift + Tab 打开上一个
-   Command + K P 复制当前文件路径
-   Command + K R 在资源管理器中查看当前文件
-   Command + K O 新窗口打开当前文件

### 显示

-   Command + Ctrl + F 全屏、退出全屏
-   Command + Option + 1 切换编辑器分屏方式（横、竖）
-   Command + + 放大
-   Command + - 缩小
-   Command + B 显示、隐藏侧边栏
-   Command + Shift + E 显示资源管理器 或 切换焦点
-   Command + Shift + F 显示搜索框
-   Ctrl + Shift + G 显示Git面板
-   Command + Shift + D 显示调试面板
-   Command + Shift + X 显示插件面板
-   Command + Shift + H 全局搜索替换
-   Command + Shift + J 显示、隐藏高级搜索
-   Command + Shift + C 打开新终端
-   Command + Shift + U 显示输出面板
-   Command + Shift + V Markdown预览窗口
-   Command + K V 分屏显示 Markdown预览窗口

### 调试

-   F9 设置 或 取消断点
-   F5 开始 或 继续
-   F11 进入
-   Shift + F11 跳出
-   F10 跳过
-   Command + K Command + I 显示悬停信息

### 集成终端

-   Ctrl + `显示终端 Ctrl + Shift +` 新建终端
-   Command + Up 向上滚动
-   Command + Down 向下滚动
-   PgUp 向上翻页
-   PgDown 向下翻页
-   Command + Home 滚动到顶部
-   Command + End 滚动到底部
