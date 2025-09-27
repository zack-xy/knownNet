---
title: 发布npm包常用命令
author: Zack Zheng
date: 2025/07/17 17:34
categories:
 - 大海拾遗
tags:
 - npm
 - node
 - 脚手架
---

##### 本地测试打包

生成一个 .tgz 包，可用于本地安装测试：

```bash
npm pack
```

```bash
npm install ./your-package-name-1.0.0.tgz
```

##### 本地测试2

`npm link`
[详情查看这个文章](./npm的安装机制.md)

##### 发布

普通包（非 scoped）    

```bash
npm publish
```
Scoped 包（如 @zack-xy/cli）   
```bash
npm publish --access public
```

##### 发布新版本

更新 package.json 里的 "version"，或使用以下命令：   

```bash
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0
```

然后再执行：

```bash
npm publish
```

##### 删除包或版本

```bash
npm unpublish your-package --force                   # 删除整个包（仅限 24 小时内）
npm unpublish your-package@1.0.0 --force             # 删除特定版本
```

##### 标记某个版本为废弃

```bash
npm deprecate your-package@1.0.0 "⚠️ 不建议使用，请升级"
```


##### 查看信息

```bash
npm whoami                        # 当前登录用户
npm view your-package             # 查看包的元数据
npm view your-package versions   # 查看所有已发布版本
```


##### 发布内容控制

配置.npmignore, 忽略不需要发布的文件    
或者在 package.json 中添加：

```json
"files": [
  "bin",
  "lib"
]
```
