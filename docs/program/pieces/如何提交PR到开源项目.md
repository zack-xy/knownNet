---
title: 如何提交PR到开源项目
author: Zack Zheng
date: 2025/07/17 10:36
categories:
 - 大海拾遗
tags:
 - github
---

##### 1.Fork 项目仓库

访问目标开源项目的 GitHub/Gitee 页面，点击右上角的 ‌Fork‌ 按钮，将仓库复制到你的账户下‌    

##### 2.克隆仓库到本地     

```bash
git clone https://github.com/你的用户名/仓库名.git
```

进入本地仓库目录后，添加原仓库为上游远程分支：    

```bash
git remote add upstream https://github.com/原项目/仓库名.git
```

定期同步原仓库更新：    

```bash
git fetch upstream
git merge upstream/main
```

##### ‌3. 创建新分支

避免直接修改 main 分支，新建分支并切换：    

```bash
git checkout -b fix-bug
```

##### ‌4. 修改代码并提交

在本地完成代码修改后，提交到你的分支:   

```bash
git add .
git commit -m "修复了XX问题"
git push origin fix-bug
```

##### ‌5. 发起 Pull Request

在你的 GitHub/Gitee 仓库页面，点击 ‌Pull Request‌ 按钮‌     
选择你的分支（如 fix-bug）与原仓库的 main 分支对比     
填写清晰的标题和描述（如问题背景、修改内容）     
点击 ‌Create Pull Request‌ 提交      
