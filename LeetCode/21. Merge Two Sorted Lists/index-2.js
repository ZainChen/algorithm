/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const newLink = new ListNode()
  let currentNode = newLink
  while (list1 && list2) {
    if (list1.val < list2.val) {
      currentNode.next = list1
      list1 = list1.next
    } else {
      currentNode.next = list2
      list2 = list2.next
    }
    currentNode = currentNode.next
  }
  currentNode.next = list1 ? list1 : list2
  return newLink.next
};

/**
 * 链表节点的数据结构
 * @param {number} val 节点数据
 * @return {void} 空
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * 生成链表节点
 * @param {number[]} data 用来生成链表的数组
 * @return {ListNode} 链表的头结点
 */
 function generateLink(data) {
  let head = null;
  for (let i = data.length - 1; i >= 0; i--) {
      let node = new ListNode(data[i], head);
      head = node;
  }
  return head;
}

/**
 * 输出链表所有节点
 * @param {ListNode} head 链表头节点
 * @return {void} 空
 */
function printLinkNode(head) {
  if (!head) {
    return 'null';
  }
  let preview = head.val;
  do {
    head = head.next;
    if (!head) {
      break;
    }
    preview += '->'+head.val;
  } while(head.next);
  console.log(preview);
}

let linkOne = generateLink([1,2,4])
printLinkNode(linkOne)
let linkTwo = generateLink([1,3,4])
printLinkNode(linkTwo)
const mergeLink = mergeTwoLists(linkOne, linkTwo)
printLinkNode(mergeLink)
