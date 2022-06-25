[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

543.&nbsp;Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

```
          1
         / \
        2   3
       / \     
      4   5    
```

Example 1:
```
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
```

Example 2:
```
Input: root = [1,2]
Output: 1
```

Constraints:
- The number of nodes in the tree is in the range [1, 104].
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

let sum = 0

/**
 * 
 * @param {TreeNode} node 
 */
let depth = function(node) {
  if (!node) {
    return 0
  }
  const leftDepth = depth(node.left)
  const rightDepth = depth(node.right)
  sum = Math.max(sum, leftDepth + rightDepth)
  return Math.max(leftDepth, rightDepth) + 1
}

/**
 * 以当前节点为根节点时, 最大直径长度
 * @param {TreeNode} root
 * @return {number}
 */
let diameterOfBinaryTree = function(root) {
  sum = 0
  depth(root)
  return sum
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

const tree = createTreeLevel([1, 2, 3, 4, 5, 6, 7, null, null, 10, 11])

console.log('tree', tree, printTreeLevel(tree))

console.log('sum1', diameterOfBinaryTree(createTreeLevel([1,2,3,4,5])))

console.log('sum2', diameterOfBinaryTree(createTreeLevel([1,2])))
```
