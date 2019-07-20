[Leetcode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一：节点覆盖](#方法一)

# 标题

>[目录](#目录)

237.&nbsp;删除链表中的节点

请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

现有一个链表 -- head = [4,5,1,9]，它可以表示为:

![img-1](./image/img-1.png "img-1")

示例 1:

```cpp
输入: head = [4,5,1,9], node = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

示例 2:

```cpp
输入: head = [4,5,1,9], node = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

说明:

- 链表至少包含两个节点。
- 链表中所有节点的值都是唯一的。
- 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
不要从你的函数中返回任何结果。

# 解

## 方法一

>[目录](#目录) | [标题](#标题) | [C++](#code-cpp-1), [JavaScript](#code-js-1)

节点覆盖

### 分析

...

### 代码

#### code-cpp-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```cpp
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

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.js](./index-1.js "index-1.js")

```js

```
