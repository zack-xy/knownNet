---
title: vue2老项目本地迁移vite填坑
lang: en-US
date: 2023/03/23 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

#### 问题1:element ui全局样式报错
#### 问题2:路由里的require使用方式不行，改成import,装插件cite-plugin-require-transform
#### 问题3:某个组件提示我没有name，因为注释的问题，在template上//注释了
#### 问题4:导入的组件404，import时需要写明.vue文件
#### 问题5:带别名的路径找不到，配置别名alias
#### 问题6:vue2装插件vite-plugin-vue2
#### 问题7:问题1的延伸，element ui的字体文件出错，因为vue-cli打包是~开头的，vite不认识
```
所以修改：
$--font-path: '~element-ui/lib/theme-chalk/fonts';
$--font-path: "../fonts";
@import "~element-ui/packages/theme-chalk/src/index";
@import "node_modules/element-ui/packages/theme-chalk/src/index";
按理说这样改之后就可以了，复制字体文件到项目文件夹里，但是总是报错说解析不到字体文件
反复尝试不同路径仔细观察报错后发现，其实是App.vue文件和main.js文件找不到字体文件
那就很奇怪了，按理说，vue文件怎么会引用字体文件呢？
再查看具体文件，发现了在vue文件中，@import了main.scss文件，会导致路径混乱导致解析不到
@import "./assets/sass/main.scss";这一行实际上应该在main.js中导入
删了，在main.js中添加import "./assets/sass/main.scss";
问题解决
```

#### 问题8:jsx的语法报错：

`响应的js上增加 <script lang="jsx"></script>`

```js
import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import requireTransform from 'vite-plugin-require-transform'

export default defineConfig({
  server: {
    port: 8899
  },
  plugins: [
    createVuePlugin({
      jsx: true,
    }),
    requireTransform({
      fileRegex: /.js$|.vue$/,
    }),
  ],
  resolve: {
    extensions: ['.mjs','.js','.vue','.ts','.jsx','.tsx','.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@constant': path.resolve(__dirname, 'src/constant'),
      '@encrypt': path.resolve(__dirname, 'src/assets/js/encrypt.js'),
      '@mixin': path.resolve(__dirname, 'src/mixin'),
    },
  }
```
