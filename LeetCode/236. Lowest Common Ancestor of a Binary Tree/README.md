[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

236.&nbsp;Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:

![binary-tre](./image/binary-tree.png "binary-tre")

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```

Example 2:

![binary-tre](./image/binary-tree.png "binary-tre")

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
```

Example 3:
```
Input: root = [1,2], p = 1, q = 2
Output: 1
```

Constraints:
- The number of nodes in the tree is in the range [2, 105].
- -109 <= Node.val <= 109
- All Node.val are unique.
- p != q
- p and q will exist in the tree.

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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let nodeToParent = new Map()
let markNode = new Map()

/**
 * @param {TreeNode} node
 * @returns
 */
var depth = function(node) {
  if (!node) {
    return
  }
  if (node.left) {
    nodeToParent.set(node.left.val, node)
    depth(node.left)
  }
  if (node.right) {
    nodeToParent.set(node.right.val, node)
    depth(node.right)
  }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  nodeToParent.clear()
  markNode.clear()
  depth(root)
  while (p) {
    markNode.set(p.val, true)
    p = nodeToParent.get(p.val)
  }
  while(q) {
    if (markNode.get(q.val)) {
      return q
    }
    q = nodeToParent.get(q.val)
  }
  return null
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

const tree = createTreeLevel([3,5,1,6,2,0,8,null,null,7,4])

console.log('tree', tree, printTreeLevel(tree))

console.log('lowestCommonAncestor1', lowestCommonAncestor(tree, new TreeNode(5), new TreeNode(4)))

console.log('lowestCommonAncestor2', lowestCommonAncestor(createTreeLevel([3,5,1,6,2,0,8,null,null,7,4]), new TreeNode(5), new TreeNode(1)))

console.log('lowestCommonAncestor3', lowestCommonAncestor(createTreeLevel([2,null,1]), new TreeNode(2), new TreeNode(1)))
```
