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
