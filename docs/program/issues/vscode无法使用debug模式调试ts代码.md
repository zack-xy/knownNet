---
title: vscode无法使用debug模式调试ts代码
date: 2025/04/16 15:54:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

起因是我在写算法的时候，感觉自己写的是对的，所以想调试一下ts的代码，看看到底哪里错了。    

然后就是在launch.json中配置tsnode，最开始是可以启动的，后面没办法启动了，问题不清楚在哪里。    

经过查找，可以配置tsx运行ts代码，所以改用了tsx   

安装tsx

`pnpm i --save-dev tsx`

在launch.json中配置tsx

```json

{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TS with TSX",
      "runtimeExecutable": "tsx",
      "args": "${workspaceFolder}/demoFn/demo.ts",
      "sourceMaps": true,
      "resolveSourceMapLocations": [
        "${workspaceFolder}/**",
        "!**/node_modules/**"
      ],
      "outFiles": [],  // 必须留空，避免干扰 tsx 的 Source Map
      "skipFiles": ["<node_internals>/**"],
      "env": {
        "TSX_ENABLE_SOURCE_MAPS": "1" // 确保 Source Map 启用
      },
      "sourceMapPathOverrides": {
        "file:///*": "${workspaceFolder}/*"
      }
    }
  ]
}


```

上面的demo.ts就是要运行的代码。

在我配置的时候，也是可以启动的，但是在vscode中打断点却是不起作用
但是在代码里加debugger是有用的

后来发现，是因为文件路径里有中文！！配置是没有问题的


