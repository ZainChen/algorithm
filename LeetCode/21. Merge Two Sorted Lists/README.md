[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)
>    - [Method2](#Method2)
>        - [code-js-2](#code-js-2)

# Title

>[Directory](#Directory)

21.&nbsp;Merge Two Sorted Lists

<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p>

<p>Merge the two lists in a one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p>

<p>Return <em>the head of the merged linked list</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;" />
<pre>
<strong>Input:</strong> list1 = [1,2,4], list2 = [1,3,4]
<strong>Output:</strong> [1,1,2,3,4,4]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> list1 = [], list2 = []
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> list1 = [], list2 = [0]
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</li>
</ul>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

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

## Method2

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-2)

### Code

#### code-js-2

>[Directory](#Directory) | [Title](#Title) | [Method2](#Method2) | [index-2.js](./index-2.js "index-2.js")

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

