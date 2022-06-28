[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

103.&nbsp;二叉树的锯齿形层序遍历

给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。


示例 1：

![tree](./image/tree.jpeg "tree")

```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[20,9],[15,7]]
```

示例 2：
```
输入：root = [1]
输出：[[1]]
```

示例 3：
```
输入：root = []
输出：[]
```

提示：
- 树中节点数目在范围 [0, 2000] 内
- -100 <= Node.val <= 100

# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

[[[方法简介]]]

### 分析

[[[方法分析]]]

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) {
    return []
  }

  const result = []
  const queue = [root]

  let isLeftToRight = true

  while (queue.length > 0) {
    const levelCurrent = []
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      isLeftToRight ? levelCurrent.push(node.val) : levelCurrent.unshift(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    isLeftToRight = !isLeftToRight
    result.push(levelCurrent)
  }

  return result
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * 已知层次遍历数组, 生成二叉树
 * @param {number[]} array 用来生成二叉树的数组
 * @param {number} index 数组遍历的当前下标
 * @returns {TreeNode}
 */
function createTreeLevel(array, index = 0) {
  let node = null
  if (index >= array.length) {
    return node
  }
  if (array[index] === null || array[index] === '#') {
    return node
  }
  node = new TreeNode(
    array[index],
    createTreeLevel(array, index * 2 + 1),
    createTreeLevel(array, index * 2 + 2)
  )
  return node
}

/**
 * 层次遍历二叉树, 储存到数组中
 * @param {TreeNode} root 
 * @returns {number} array
 */
function printTreeLevel(root) {
  const array = []
  const queue = []
  if (root) {
    queue.push(root)
    while (queue.length > 0) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      array.push(node.val)
    }
  }
  return array
}

const tree = createTreeLevel([3,9,20,null,null,15,7])

console.log('tree', tree, printTreeLevel(tree))

console.log('zigzagLevelOrder', zigzagLevelOrder(tree))
```
