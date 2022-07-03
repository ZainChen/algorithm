[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

108.&nbsp;Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Example 1:

![tree](./image/btree1.jpeg "tree")

```
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:
```

![tree](./image/btree2.jpeg "tree")

Example 2:

![tree](./image/btree3.jpeg "tree")

```
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
```

Constraints:
- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums is sorted in a strictly increasing order.

# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1)

[[[Method Introduction]]]

### Analyze

[[[Method analysis]]]

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method1) | [index-1.js](./index-1.js "index-1.js")

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
