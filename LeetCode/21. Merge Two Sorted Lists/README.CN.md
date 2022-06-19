[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一](#方法一)
>        - [code-js-1](#code-js-1)
>    - [方法二](#方法二)
>        - [code-js-2](#code-js-2)

# 标题

>[目录](#目录)

21.&nbsp;合并两个有序链表

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例 1：

![merge-lists.jpeg](./image/merge-lists.jpeg "merge-lists.jpeg")

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

示例 2：
```
输入：l1 = [], l2 = []
输出：[]
```

示例 3：
```
输入：l1 = [], l2 = [0]
输出：[0]
```

提示：
- 两个链表的节点数目范围是 [0, 50]
- -100 <= Node.val <= 100
- l1 和 l2 均按 非递减顺序 排列

# 解

## 方法一

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

...

### 分析

...

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.js](./index-1.js "index-1.js")

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

## 方法二

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-2)

...

### 分析

...

### 代码

#### code-js-2

>[目录](#目录) | [标题](#标题) | [分析](#方法二) | [index-2.js](./index-2.js "index-2.js")

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
