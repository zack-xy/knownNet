---
title: 已经提交的文件如何再添加到git忽略 
lang: en-US
date: 2023/07/14 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Git
---


当文件已经被提交并加入到.gitignore中后，Git将不会自动忽略该文件的更改。这是因为.gitignore只针对尚未被跟踪的文件生效。

如果你希望忽略已经加入版本控制的文件，并且不希望Git检测到其更改，你需要先将该文件从Git中删除

```
git rm --cached 
```

上述命令会将该文件从Git索引中移除，但会保留在本地文件系统中。然后你可以将该文件加入到.gitignore中，并提交这次变更：

```
git add .gitignore
git commit -m "Add  to .gitignore"
```
