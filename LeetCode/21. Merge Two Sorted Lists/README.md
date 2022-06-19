[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#title)
>- [Solution](#solution)
>    - [Method-1](#method-1)
>        - [code-js-1](#code-js-1)
>    - [Method-2](#method-2)
>        - [code-js-2](#code-js-2)

# Title

>[directory](#directory)

21.&nbsp;Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

![merge-lists.jpeg](./image/merge-lists.jpeg "merge-lists.jpeg")

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

Example 2:
```
Input: list1 = [], list2 = []
Output: []
```

Example 3:
```
Input: list1 = [], list2 = [0]
Output: [0]
```

Constraints:
- The number of nodes in both lists is in the range [0, 50].
- -100 <= Node.val <= 100
- Both list1 and list2 are sorted in non-decreasing order.

# Solution

## Method-1

>[directory](#directory) | [title](#title) | [JavaScript](#code-js-1)

...

### Analyze

...

### Code

#### code-js-1

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [index-1.js](./index-1.js "index-1.js")

```js
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
  while (list1 || list2) {
    if (!list1) {
      currentNode.next = list2
      list2 = list2.next
      currentNode = currentNode.next
      continue
    }
    if (!list2) {
      currentNode.next = list1
      list1 = list1.next
      currentNode = currentNode.next
      continue
    }
    if (list1.val < list2.val) {
      currentNode.next = list1
      list1 = list1.next
    } else {
      currentNode.next = list2
      list2 = list2.next
    }
    currentNode = currentNode.next
  }
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
```

## Method-2

>[directory](#directory) | [title](#title) | [JavaScript](#code-js-2)

...

### Analyze

...

### Code

#### code-js-2

>[directory](#directory) | [title](#title) | [analyze](#method-2) | [index-2.js](./index-2.js "index-2.js")

```js
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
```
