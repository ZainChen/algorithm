[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)

# Title

>[Directory](#Directory)

654&nbsp;Maximum Binary Tree

<p>You are given an integer array <code>nums</code> with no duplicates. A <strong>maximum binary tree</strong> can be built recursively from <code>nums</code> using the following algorithm:</p>

<ol>
	<li>Create a root node whose value is the maximum value in <code>nums</code>.</li>
	<li>Recursively build the left subtree on the <strong>subarray prefix</strong> to the <strong>left</strong> of the maximum value.</li>
	<li>Recursively build the right subtree on the <strong>subarray suffix</strong> to the <strong>right</strong> of the maximum value.</li>
</ol>

<p>Return <em>the <strong>maximum binary tree</strong> built from </em><code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/tree1.jpg" style="width: 302px; height: 421px;" />
<pre>
<strong>Input:</strong> nums = [3,2,1,6,0,5]
<strong>Output:</strong> [6,3,5,null,2,0,null,null,1]
<strong>Explanation:</strong> The recursive calls are as follow:
- The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
    - The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
        - Empty array, so no child.
        - The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
            - Empty array, so no child.
            - Only one element, so child is a node with value 1.
    - The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
        - Only one element, so child is a node with value 0.
        - Empty array, so no child.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/tree2.jpg" style="width: 182px; height: 301px;" />
<pre>
<strong>Input:</strong> nums = [3,2,1]
<strong>Output:</strong> [3,null,2,null,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
	<li>All integers in <code>nums</code> are <strong>unique</strong>.</li>
</ul>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1), [C++](#code-cpp-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript

console.log("zain");
```

#### code-cpp-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```C++
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

