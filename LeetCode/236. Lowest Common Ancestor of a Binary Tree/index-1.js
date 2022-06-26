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
