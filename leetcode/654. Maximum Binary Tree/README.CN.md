[Leetcode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一：分区递归](#方法一)

# 标题

>[目录](#目录)

654.&nbsp;最大二叉树

给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：

二叉树的根是数组中的最大元素。

    1.左子树是通过数组中最大值左边部分构造出的最大二叉树。
    2.右子树是通过数组中最大值右边部分构造出的最大二叉树。
    3.通过给定的数组构建最大二叉树，并且输出这个树的根节点。

#### Example 1:

```c++
输入: [3,2,1,6,0,5]
输入: 返回下面这棵树的根节点：

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
```

注意:

给定的数组的大小在 [1, 1000] 之间。

# 解

## 方法一

分区递归

>[目录](#目录) | [标题](#标题) | [C++](#code-cpp-1), [JavaScript](#code-js-1)

### 分析

确认最大值下标，分区，递归。

### 代码

#### code-cpp-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```cpp
#include<iostream>
#include<vector>
#include<queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        int numSize = nums.size();
        if(numSize < 1)
            return NULL;
        int k = 0, max = nums[0];
        for(int i = 1; i < numSize; i++)
            if(nums[i] > max) {
                max = nums[i];
                k = i;
            }
        vector<int> vecLeft, vecRight;
        for(int i = 0; i < k; i++)
            vecLeft.push_back(nums[i]);
        for(int i = k+1; i < numSize; i++)
            vecRight.push_back(nums[i]);
        TreeNode* node = new TreeNode(max);
        node->left = constructMaximumBinaryTree(vecLeft);
        node->right = constructMaximumBinaryTree(vecRight);
        return node;
    }
};

// 队列实现二叉树层次输出
void levelOrder(TreeNode *t) {
    queue<TreeNode*> qt;  //创建队列 q,每个元素都是结点指针
    TreeNode* p = t;
    if(p != NULL) {
        qt.push(p);
        cout << "[" << p->val << ",";
    }
    while(!qt.empty()) {
        p = qt.front();
        qt.pop();
        if(p->left) {
            cout << p->left->val;
            if(p->left->left || p->left->right)
                cout << ",";
            qt.push(p->left);
        } else if(p->left || p->right) {
            cout << "null,";
        }
        if(p->right) {
            cout << p->right->val;
            if(p->right->left || p->right->right)
                cout << ",";
            qt.push(p->right);
        } else if(p->left || p->right) {
            cout << "null,";
        }
    }
    cout << "]\n";
}

int main() {
    int a[] = {3, 2, 1, 6, 0, 5};
    vector<int> nums;
    for(int i = 0; i < sizeof(a) / sizeof(a[0]); i++)
        nums.push_back(a[i]);
    cout << "[";
    for(int i = 0; i < nums.size(); i++) {
        cout << nums[i];
        if(i < nums.size()-1)
            cout << ",";
    }
    cout << "]\n";

    Solution b;
    TreeNode* root = b.constructMaximumBinaryTree(nums);

    levelOrder(root);

    system("pause");
}
```

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.js](./index-1.js "index-1.js")

```js

```
