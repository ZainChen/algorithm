[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

108.&nbsp;将有序数组转换为二叉搜索树

给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

示例 1：

![tree](./image/btree1.jpeg "tree")

```
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
```

![tree](./image/btree2.jpeg "tree")

示例 2：

![tree](./image/btree3.jpeg "tree")

```
输入：nums = [1,3]
输出：[3,1]
解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
```

提示：
- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums 按 严格递增 顺序排列

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

var treeNode = function(nums, left, right) {
  if (left > right) {
    return null
  }

  // 中间左边的值作为根节点
  // const mid = parseInt((left + right) / 2)
  // 中间右边的值作为根节点
  // const mid = parseInt((left + right + 1) / 2)
  // 任意一个中间位置作为根节点
  const mid = parseInt((left + right + Math.round(Math.random())) / 2)

  const node = new TreeNode(nums[mid],
    treeNode(nums, left, mid - 1),
    treeNode(nums, mid + 1, right),
  )
  return node
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return treeNode(nums, 0, nums.length - 1)
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
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

const tree1 = sortedArrayToBST([-10,-3,0,5,9])
console.log('sortedArrayToBST1111', tree1, printTreeLevel(tree1))

const tree2 = sortedArrayToBST([1,3])
console.log('sortedArrayToBST2222', tree2, printTreeLevel(tree2))

const tree3 = sortedArrayToBST([-10,-3,0,5,7,9])
console.log('sortedArrayToBST333', tree3, printTreeLevel(tree3))
```
