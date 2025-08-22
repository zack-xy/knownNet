---
title: jsx本质是什么
author: Zack Zheng
date: 2025/08/22 16:17
pageClass: ai-generate-flag
categories:
 - 大海拾遗
tags:
 - JavaScript
 - Jsx
 - 前端
 - AI生成
---

JSX本质上是JavaScript的语法扩展（eXtension），允许在JavaScript代码中直接编写类似 HTML 的结构，用于描述 UI 界面
它并非独立的规范，而是React框架引入的语法糖，最终会被转译器（如 Babel）转换为标准的 JavaScript 函数调用（如 `React.createElement()`）       

JSX 并不一定只能转化为`React.createElement()`函数调用，其转换目标可通过配置修改，具体取决于编译工具（如 Babel）的插件设置。    

‌默认转换行为‌: JSX 在 React 生态中默认被 Babel 的`@babel/plugin-transform-react-jsx`插件转换为`React.createElement()`调用      

Vue 3‌：通过`@vue/babel-plugin-jsx`将 JSX 转换为 h() 函数，类似Vue的createVNode          

核心机制‌：JSX 会被编译为 JavaScript 函数调用（如 React.createElement() 或 Vue 的 h()），生成的是‌<b>虚拟节点描述对象‌</b> 而非直接输出 HTML      

所以jsx不一定输出html

<b>非HTML输出场景</b>        
‌原生应用开发‌：React Native 使用 JSX 描述移动端 UI 组件（如View、Text），编译为平台原生控件（iOS/Android）      
‌自定义 DSL‌：可扩展 JSX 编译规则，生成其他领域的模板（如 SVG、WebGL 描述或非 UI 的配置对象）      

<b>技术限制与灵活性‌</b> 
‌依赖框架运行时‌：JSX 的输出由框架的渲染器决定，需确保编译目标与运行时环境匹配     
‌自定义编译‌：通过 Babel 插件可修改 JSX 的转换逻辑，例如生成 JSON 配置或 Three.js 3D 场景描述    

<b>技术实现原理</b>     

Babel 通过解析 JSX 为 AST（抽象语法树），再根据插件配置生成目标函数调用    

核心步骤包括：     

+ 解析标签类型、属性和子节点；     
+ 根据配置的 pragma 或 runtime 生成对应函数调用     
