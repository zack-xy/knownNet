---
title: git分支合并解决冲突及代码回滚
author: Zack Zheng
date: 2021/03/02 22:36
categories:
 - 大海拾遗
tags:
 - Git
 - drawio
 - Xmind
---

![](https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/git基础.svg)   

![](https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/git分支合并解决冲突.svg)

<simple-img src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/Git常见操作汇总.svg" />


#### 代码回滚需要遵守的原则

集成分支上的代码回滚<b class="red">坚决不用</b>`reset --hard`方式，因为：   

可能有人基于你的commit拉取了代码，你删了集成分支的commit，等他合并的时候，又会把这些commit带回来    

正确的处理方式是找到对应的Merge Request,点击Revert     
