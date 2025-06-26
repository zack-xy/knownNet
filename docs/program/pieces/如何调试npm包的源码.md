---
title: 如何调试npm包的源码
author: Zack Zheng
date: 2025/06/25 17:44
categories:
 - 前端
tags:
 - npm
---

#### 如何调试

##### 形式1：直接调试

在`.vscode/launch.json`中添加配置，直接调试链接的本地包（这里是直接运行了包的js）     

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Linked Package",
  "skipFiles": ["<node_internals>/**"],
  "program": "${workspaceFolder}/node_modules/package-name/main.js"
}

```

##### 形式2:运行某命令时，调试

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug ESLint Inspector",
      "runtimeExecutable": "pnpm",
      "runtimeArgs": ["run", "dev"],  // 绑定到 `pnpm run dev` 命令
      "env": {
        "NODE_ENV": "development"  // 设置环境变量
      },
      "args": ["--inspect-brk"],  // 设置参数
      "skipFiles": ["<node_internals>/**"],
      "outFiles": ["${workspaceFolder}/node_modules/@eslint/config-inspector/**/*.js"],
      "program": "${workspaceFolder}/node_modules/@eslint/config-inspector/dist/cli.mjs"  // 指定调试入口文件
    }
  ]
}

```

#### 调试之后如何应用修改

##### 方法一：直接使用 pnpm 的补丁功能（我都是用pnpm，推荐）
```bash
pnpm patch package-name  # 把这个包复制了一份到node_modules/.pnpm_patches，进入到这个临时目录修改代码
pnpm patch-commit <临时目录路径>     # 生成补丁(会生成到 patches/ 目录下，生成一个.patch文件)
```

上述也会生成patchedDependencies字段到pnpm-lock.yaml中，表示这个包已经被打了补丁。


##### 方法二：使用npm

使用`patch-package`将修改应用到依赖包中    

```bash
# 安装工具    
npm install patch-package --save-dev   
# 生成补丁   
npx patch-package package-name   
```
   
在package.json中添加postinstall脚本:    

```json
"scripts": {
  "postinstall": "patch-package"
}
```

###### 异常情况：没有package-lock.json文件

会报错：

```
**ERROR** No package-lock.json, npm-shrinkwrap.json, or yarn.lock file.

You must use either npm@>=5, yarn, or npm-shrinkwrap to manage this project's
dependencies.
```

如果有pnpm-lock.yaml文件   

+ 临时生成兼容的锁定文件    
  `pnpm import`
