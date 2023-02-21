[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

25&nbsp;Reverse Nodes in k-Group

<p>Given the <code>head</code> of a linked list, reverse the nodes of the list <code>k</code> at a time, and return <em>the modified list</em>.</p>

<p><code>k</code> is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of <code>k</code> then left-out nodes, in the end, should remain as it is.</p>

<p>You may not alter the values in the list&#39;s nodes, only nodes themselves may be changed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [2,1,4,3,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 3
<strong>Output:</strong> [3,2,1,4,5]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>n</code>.</li>
	<li><code>1 &lt;= k &lt;= n &lt;= 5000</code></li>
	<li><code>0 &lt;= Node.val &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow-up:</strong> Can you solve the problem in <code>O(1)</code> extra memory space?</p>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
/**
 * 生成链表节点
 * @param {number[]} data 用来生成链表的数组
 * @return {ListNode} 链表的头结点
 */
function generateLink(data) {
    let head = null;
    for(let i = data.length-1; i >= 0; i--) {
        let t = new ListNode(data[i]);
        t.next = head;
        head = t;
    }
    return head;
}

/**
 * 获取链表长度
 * @param {ListNode} head 链表的头结点
 * @return {number} 链表长度
 */
function getLinkLength(head) {
    let s = 0;
    while(head) {
        s += 1;
        head = head.next;
    }
    return s;
}

/**
 * 将链表 head2 插入到 head1 尾部
 * @param {ListNode} head1 链表1的头结点
 * @param {ListNode} head2 链表2的头结点
 * @return {ListNode} 合并后链表的头结点
 */
function insertTail(head1, head2) {
    //先合成一个数组，再调用之前的方法生成链表
    let a = [];
    let t = head1;
    while(t) {
        a.push(t.val);
        t = t.next;
    }
    t = head2;
    while(t) {
        a.push(t.val);
        t = t.next;
    }
    let head = generateLink(a);
    return head;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head) {
        return null;
    }
    if(getLinkLength(head) < k) {
        return head;
    }
    let dataNode = null;
    let newHead = null;
    let i = k;
    while(head && i--) {
        dataNode = new ListNode(head.val);
        dataNode.next = newHead;
        newHead = dataNode;
        head = head.next;
    }
    newHead = insertTail(newHead, reverseKGroup(head, k));
    return newHead;
};

/**
 * 链表节点的数据结构
 * @param {number} val 节点数据
 * @return {void} 空
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 输出链表所有节点
 * @param {ListNode} head 链表头节点
 * @return {void} 空
 */
function printLinkNode(head) {
    if(!head) {
        return 'null';
    }
    let a = head.val;
    do {
        head = head.next;
        if(!head) {
            break;
        }
        a += '->'+head.val;
    } while(head.next);
    console.log(a);
}

let headNode1 = generateLink([1, 2, 3, 4, 5]);
printLinkNode(headNode1);
printLinkNode(reverseKGroup(headNode1, 2));

```

