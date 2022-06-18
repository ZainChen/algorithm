[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#title)
>- [Solution](#solution)
>    - [Method-1: Partition recursion](#method-1)

# Title

>[directory](#directory)

654.&nbsp;Maximum Binary Tree

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.

    1.The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
    2.The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
    3.Construct the maximum tree by the given array and output the root node of this tree.

#### Example 1:

```c++
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
```

Note:

The size of the given array will be in the range [1,1000].


# Solution

## Method-1

>[directory](#directory) | [title](#title) | [C++](#code-cpp-1), [JavaScript](#code-js-1)

Partition recursion

### Analyze

Confirm the maximum subscript, partition, recursion.

### Code

#### code-cpp-1

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

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

// Queue implementation binary tree level output
void levelOrder(TreeNode *t) {
    queue<TreeNode*> qt;  //Create a queue q, each element is a node pointer
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

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [index-1.js](./index-1.js "index-1.js")

```js

```
