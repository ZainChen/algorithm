[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)

# 标题

>[目录](#目录)

237&nbsp;删除链表中的节点

<p>有一个单链表的&nbsp;<code>head</code>，我们想删除它其中的一个节点&nbsp;<code>node</code>。</p>

<p>给你一个需要删除的节点&nbsp;<code>node</code>&nbsp;。你将&nbsp;<strong>无法访问</strong>&nbsp;第一个节点&nbsp;&nbsp;<code>head</code>。</p>

<p>链表的所有值都是 <b>唯一的</b>，并且保证给定的节点&nbsp;<code>node</code>&nbsp;不是链表中的最后一个节点。</p>

<p>删除给定的节点。注意，删除节点并不是指从内存中删除它。这里的意思是：</p>

<ul>
	<li>给定节点的值不应该存在于链表中。</li>
	<li>链表中的节点数应该减少 1。</li>
	<li><code>node</code>&nbsp;前面的所有值顺序相同。</li>
	<li><code>node</code>&nbsp;后面的所有值顺序相同。</li>
</ul>

<p><strong>自定义测试：</strong></p>

<ul>
	<li>对于输入，你应该提供整个链表&nbsp;<code>head</code>&nbsp;和要给出的节点&nbsp;<code>node</code>。<code>node</code>&nbsp;不应该是链表的最后一个节点，而应该是链表中的一个实际节点。</li>
	<li>我们将构建链表，并将节点传递给你的函数。</li>
	<li>输出将是调用你函数后的整个链表。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/01/node1.jpg" style="height: 286px; width: 400px;" />
<pre>
<strong>输入：</strong>head = [4,5,1,9], node = 5
<strong>输出：</strong>[4,1,9]
<strong>解释：</strong>指定链表中值为&nbsp;5&nbsp;的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 1 -&gt; 9
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/01/node2.jpg" style="height: 315px; width: 400px;" />
<pre>
<strong>输入：</strong>head = [4,5,1,9], node = 1
<strong>输出：</strong>[4,5,9]
<strong>解释：</strong>指定链表中值为&nbsp;1&nbsp;的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 5 -&gt; 9</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>链表中节点的数目范围是 <code>[2, 1000]</code></li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
	<li>链表中每个节点的值都是 <strong>唯一</strong> 的</li>
	<li>需要删除的节点 <code>node</code> 是 <strong>链表中的节点</strong> ，且 <strong>不是末尾节点</strong></li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1), [C++](#code-cpp-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript

console.log("zain");
```

#### code-cpp-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```C++
#include<iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        node->val = node->next->val;
        node->next = node->next->next;
    }
};

ListNode* createList(int* a, int n) {
    if(n < 1)
        return NULL;
    ListNode* list = new ListNode(a[0]);
    ListNode* p = list;
    for(int i = 1; i < n; i++) {
        ListNode* node = new ListNode(a[i]);
        p->next = node;
        p = p->next;
    }
    return list;
}

ListNode* findNode(ListNode* list, int val) {
    while(list) {
        if(list->val == val)
            return list;
        list = list->next;
    }
    return NULL;
}

void printList(ListNode* list) {
    while(list) {
        cout << list->val;
        if(list->next)
            cout << "->";
        list = list->next;
    }
    cout << endl;
}

int main() {
    int a[] = {4, 5, 1, 9};
    ListNode* list = createList(a, 4);
    printList(list);
    Solution().deleteNode(findNode(list, 5));
    printList(list);
    
    system("pause");
    return 0;
}

```

