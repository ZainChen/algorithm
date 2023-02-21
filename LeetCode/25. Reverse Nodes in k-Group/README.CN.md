[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

25&nbsp;K 个一组翻转链表

<p>给你链表的头节点 <code>head</code> ，每&nbsp;<code>k</code><em>&nbsp;</em>个节点一组进行翻转，请你返回修改后的链表。</p>

<p><code>k</code> 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是&nbsp;<code>k</code><em>&nbsp;</em>的整数倍，那么请将最后剩余的节点保持原有顺序。</p>

<p>你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>输入：</strong>head = [1,2,3,4,5], k = 2
<strong>输出：</strong>[2,1,4,3,5]
</pre>

<p><strong>示例 2：</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg" style="width: 542px; height: 222px;" /></p>

<pre>
<strong>输入：</strong>head = [1,2,3,4,5], k = 3
<strong>输出：</strong>[3,2,1,4,5]
</pre>

<p>&nbsp;</p>
<strong>提示：</strong>

<ul>
	<li>链表中的节点数目为 <code>n</code></li>
	<li><code>1 &lt;= k &lt;= n &lt;= 5000</code></li>
	<li><code>0 &lt;= Node.val &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>

<p><strong>进阶：</strong>你可以设计一个只用 <code>O(1)</code> 额外内存空间的算法解决此问题吗？</p>

<ul>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

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

