[Leetcode](../README.CN.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#title)
>- [Solution](#solution)
>    - [Method-1: Node coverage](#Method-1)

# Title

>[directory](#directory)

237.&nbsp;Delete Node in a Linked List

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:

![img-1](./image/img-1.png "img-1")

#### Example 1:

```cpp
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
```

#### Example 2:

```cpp
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
```

#### Note:

- The linked list will have at least two elements.
- All of the nodes' values will be unique.
- The given node will not be the tail and it will always be a valid node of the linked list.
- Do not return anything from your function.

# Solution

## Method-1

>[directory](#directory) | [title](#title) | [C++](#code-cpp-1), [JavaScript](#code-js-1)

Node coverage

### Analyze

...

### Code

#### code-cpp-1

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

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

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [index-1.js](./index-1.js "index-1.js")

```js

```
