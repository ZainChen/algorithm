[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>    - [方法2](#方法2)
>        - [code-js-2](#code-js-2)

# 标题

>[目录](#目录)

21.&nbsp;合并两个有序链表

<p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 </p>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;" />
<pre>
<strong>输入：</strong>l1 = [1,2,4], l2 = [1,3,4]
<strong>输出：</strong>[1,1,2,3,4,4]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>l1 = [], l2 = []
<strong>输出：</strong>[]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>l1 = [], l2 = [0]
<strong>输出：</strong>[0]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li>两个链表的节点数目范围是 <code>[0, 50]</code></li>
	<li><code>-100 <= Node.val <= 100</code></li>
	<li><code>l1</code> 和 <code>l2</code> 均按 <strong>非递减顺序</strong> 排列</li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
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

## 方法2

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-2)

### 代码

#### code-js-2

>[目录](#目录) | [标题](#标题) | [方法2](#方法2) | [index-2.js](./index-2.js "index-2.js")

```JavaScript
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

