---
title: AVL树 平衡二叉搜索树
author: Zack Zheng
date: 2023/11/09 00:00
categories:
 - 算法专栏
tags:
 - 算法
---


原文《Hello 算法》：https://www.hello-algo.com/chapter_tree/avl_tree/#1_1

#### AVL节点类
节点高度：节点到最远叶子节点的边的数量，叶节点高度0，空节点高度-1    
平衡因子：左子树的高度减去右子树的高度，空节点的平衡因子为0,平衡因子绝对值不大于1   

```typescript

class TreeNode {
    val: number   // 节点值
    height: number  // 节点高度
    left: TreeNode | null  // 左子节点指针
    right: TreeNode | null // 右子节点指针
    constructor(val?: number, height?: nunmber, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.height = height === undefined ? 0 : height
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
    
    // 获取节点高度
    height(node: TreeNode): number {
       return node === null ? -1 : node.height
    }
    
    // 更新节点高度
    updateHeight(node: TreeNode): void {
        // 节点高度等于最高子树高度+1
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1
    }
    
    // 获取平衡因子
    balanceFactor(node: TreeNode): number {
        // 空节点平衡因子为0
        if(node === null) return 0
        // 节点平衡因子 = 左子树高度 - 右子树高度
        return this.height(node.left) - this.height(node.right)
    }
    
    // 右旋操作
    rightRotate(node: TreeNode): TreeNode {
        const child = node.left
        const grandChild = child.right
        // 以child为原点，将node向右旋转
        child.right = node
        node.left = grandChild
        // 更新节点的高度
        this.updateHeight(node)
        this.updateHeight(child)
        // 返回旋转后的子树
        return child
    }
    
    // 左旋操作
    leftRotate(node: TreeNode): TreeNode {
        const child = node.right
        const grandChild = child.left
        // 以child为原点，将node向左旋转
        child.left = node
        node.right = grandChild
        // 更新节点高度
        this.updateHeight(node)
        this.updateHeight(child)
        // 返回旋转后子树的根节点
        return child
    }
    
    // 执行旋转操作，使树重新恢复平衡
    rotate(node: TreeNode): TreeNode {
        // 获取节点node的平衡因子
        const balanceFactor = this.balanceFactor(node)
        // 左偏树
        if(balanceFactor > 1) {
            if(this.balanceFactor(node.left) >= 0) {
                // 右旋
                return this.rightRotate(node)
            } else {
                // 先左旋再右旋
                node.left = this.leftRotate(node.left)
                return this.rightRotate(node)
            }
        }
        // 右偏树
        if(balanceFactor < -1) {
            if(this.balanceFactor(node.right) <= 0) {
                // 左旋
                return this.leftRotate(node)
            } else {
                // 先右旋再左旋
                node.right = this.rightRotate(node.right)
                return this.leftRotate(node)
            }
        }
        // 平衡树，无需旋转
        return node
    }
}


```

失去平衡的因子需要通过旋转恢复平衡，总共有4种旋转    


##### 右旋
失衡节点（左侧失衡，左边太高）记作node，子节点记作child
情况1:child没有右节点。以child为原点，node向右旋转（child的右子树为node）
情况2:child有右节点记作grandChild，以child为原点，node向右旋转，旋转后，grandChild作为左节点接在node上


#### 左旋
右旋的镜像情况，不解释


#### 先左旋后右旋
整体是左侧失衡，但是叶子节点是右侧偏重（树型先左拐再右拐）   
失衡节点记作node，子节点记作child    
1.先对child左旋，以child的右节点为原点，旋转child（child接在child的右节点上）（【左旋】操作）    
2.对node进行右旋（【右旋】操作）


#### 先右旋后左旋
左旋右旋的镜像操作，不解释


### 怎么判断旋转类型

根据平衡因子判断

 
| 失衡节点平衡因子 | 失衡节点子节点平衡因子 | 旋转类型     |
| ---------------- | ---------------------- | ------------ |
| > 1 (左偏)       | >= 0                   | 右旋         |
| > 1 (左偏)       | < 0                    | 先左旋后右旋 |
| < -1 (右偏)      | <= 0                   | 左旋         |
| < -1 (右偏)      | > 0                    | 先后旋后左旋 |


##### 插入节点

```typescript

insert(val: number): void {
    this.root = this.insertHelper(this.root, val)
}

// 递归插入节点
insertHelper(node: TreeNode, val: number): TreeNode {
    if(node === null) return new TreeNode(val)
    // 查找插入位置，并插入节点
    if(val < node.val) {
        node.left = this.insertHelper(node.left, val)
    } else if(val > node.val) {
        node.right = this.insertHelper(node.right, val)
    } else {
        // 重复节点不插入，直接返回
        return node
    }
    // 更新节点高度
    this.updateHeight(node)
    // 执行旋转操作，使子树重新恢复平衡
    node = this.rotate(node)
    return node
}

```

##### 删除节点

```typescript

// 删除节点
remove(val: number): void {
    this.root = this.removeHelper(this.root, val)
}

// 递归删除节点
removeHelper(node: TreeNode, val: number): TreeNode {
    if(node === null) return null
    if(val < node.val) {
        node.left = this.removeHelper(node.left, val)
    } else if(val > node.val) {
        node.right = this.removeHelper(node.right, val)
    } else {
        if(node.left === null || node.right === null) {
            const child = node.left === null ? node.right : node.left
            if(child === null) return null
            node = child
        } else {
            // 子节点数量为2，中序遍历的下一个节点删除，该节点替换当前节点
            let temp = node.right
            while(temp.left!==null) temp = temp.left
            node.right = this.removeHelper(node.right, temp.val)
            node.val = temp.val
        }
    }
    this.updateHeight(node)
    node = this.rotate(node)
    return node
}

```



