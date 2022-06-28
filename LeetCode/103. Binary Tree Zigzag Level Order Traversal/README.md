[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

103.&nbsp;Binary Tree Zigzag Level Order Traversal

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Example 1:

![tree](./image/tree.jpeg "tree")

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
```

Example 2:
```
Input: root = [1]
Output: [[1]]
```

Example 3:
```
Input: root = []
Output: []
```

Constraints:
- The number of nodes in the tree is in the range [0, 2000].
- -100 <= Node.val <= 100

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
