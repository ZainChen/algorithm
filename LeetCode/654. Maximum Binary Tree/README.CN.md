[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)

# 标题

>[目录](#目录)

654&nbsp;最大二叉树

<p>给定一个不重复的整数数组&nbsp;<code>nums</code> 。&nbsp;<strong>最大二叉树</strong>&nbsp;可以用下面的算法从&nbsp;<code>nums</code> 递归地构建:</p>

<ol>
	<li>创建一个根节点，其值为&nbsp;<code>nums</code> 中的最大值。</li>
	<li>递归地在最大值&nbsp;<strong>左边</strong>&nbsp;的&nbsp;<strong>子数组前缀上</strong>&nbsp;构建左子树。</li>
	<li>递归地在最大值 <strong>右边</strong> 的&nbsp;<strong>子数组后缀上</strong>&nbsp;构建右子树。</li>
</ol>

<p>返回&nbsp;<em><code>nums</code> 构建的 </em><strong><em>最大二叉树</em> </strong>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/tree1.jpg" />
<pre>
<strong>输入：</strong>nums = [3,2,1,6,0,5]
<strong>输出：</strong>[6,3,5,null,2,0,null,null,1]
<strong>解释：</strong>递归调用如下所示：
- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
    - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
        - 空数组，无子节点。
        - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
            - 空数组，无子节点。
            - 只有一个元素，所以子节点是一个值为 1 的节点。
    - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
        - 只有一个元素，所以子节点是一个值为 0 的节点。
        - 空数组，无子节点。
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/tree2.jpg" />
<pre>
<strong>输入：</strong>nums = [3,2,1]
<strong>输出：</strong>[3,null,2,null,1]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>nums</code> 中的所有整数 <strong>互不相同</strong></li>
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

