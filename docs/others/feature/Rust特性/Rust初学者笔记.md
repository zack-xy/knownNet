---
title: Rust初学者笔记
author: Zack Zheng
date: 2025/11/24 15:20
categories:
 - 何以编程
tags:
 - Rust
---

#### rustup(版本管理工具，类似nodejs的nvm)

```shell

# 更新Rust
rustup update 

# 卸载Rust和rustup
rustup self uninstall

# 检查是否安装成功
rustc -V
cargo -V

```

#### cargo（类似于npm）

常用命令

```shell

# 运行项目(类似npm start)
cargo run

# 构建项目(类似npm run build)
cargo build

# 构建发布版本(优化后的二进制文件)
cargo build --release

# 运行测试(类似npm test)
cargo test  

# 检查代码(类似npm run lint)
cargo clippy

# 格式化代码(类似npm run format)
cargo fmt


```

#### {:?}和{}的区别(Debug和Display的区别)

是`std::fmt`中的2个重要trait

|   Trait   |                                      目的                                      |          常用的格式化占位符          |                                         典型实现方式                                          |
| :-------: | :----------------------------------------------------------------------------: | :----------------------------------: | :-------------------------------------------------------------------------------------------: |
| `Display` | 面向用户(end-user)的可读输出，适合在UI、日志、报表等场景中直接展示给人看的文字 |                 `{}`                 | 手动实现`fmt(&self, f: &mut Formatter) -> fmt:Result`或使用`#[derive(Display)]`（通过外部宏） |
|  `Debug`  |      面向开发者的调试信息，倾向于提供解构体、枚举的完整内部状态，便于排错      | `{:?}` (单行)   `{:#?}` (多行、缩进) | 大多数标准库类型已经实现；自定义类型可以`#[derive(Debug)]`自动生成；手动实现`fmt::Debug`亦可  |

+ 使用`{:?}`是一种惯例：在调试、快速打印变量时，程序员往往倾向于使用`{:?}`，因为它不要求对象实现`Display`。几乎所有的标准库类型(包括自定义类型只要`#[derive(Debug)]`)都有Debug实现;因此用`{:?}`可以一键打印，不必考虑是否实现`Display`


#### 变量

变量分<b>可变</b>和<b>不可变</b>，使用`let`声明，默认是不可变的，加上`mut`是声明可变的。

```Rust

let a = 10;

```
