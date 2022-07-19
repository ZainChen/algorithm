/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var treeDeep = function(node, targetSum, currentSum) {
  if (!node) {
    return false
  }
  if (!node.left && !node.right) {
    return targetSum === currentSum + node.val
  }
  return treeDeep(node.left, targetSum, currentSum + node.val) || treeDeep(node.right, targetSum, currentSum + node.val)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false
  }
  return treeDeep(root, targetSum, 0)
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

const tree = createTreeLevel([5,4,8,11,null,13,4,7,2,null,null,null,1])

console.log('tree', tree)

console.log('hasPathSum', hasPathSum(tree, 22))
