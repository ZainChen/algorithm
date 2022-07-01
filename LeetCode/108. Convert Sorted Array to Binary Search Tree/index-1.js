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
