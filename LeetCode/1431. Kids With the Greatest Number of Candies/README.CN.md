[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-cpp-1](#code-cpp-1)

# 标题

>[目录](#目录)

1431&nbsp;拥有最多糖果的孩子

<p>给你一个数组&nbsp;<code>candies</code>&nbsp;和一个整数&nbsp;<code>extraCandies</code>&nbsp;，其中&nbsp;<code>candies[i]</code>&nbsp;代表第 <code>i</code> 个孩子拥有的糖果数目。</p>

<p>对每一个孩子，检查是否存在一种方案，将额外的&nbsp;<code>extraCandies</code>&nbsp;个糖果分配给孩子们之后，此孩子有 <strong>最多</strong>&nbsp;的糖果。注意，允许有多个孩子同时拥有 <strong>最多</strong>&nbsp;的糖果数目。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>candies = [2,3,5,1,3], extraCandies = 3
<strong>输出：</strong>[true,true,true,false,true] 
<strong>解释：</strong>
孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。
孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。
孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。
孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>candies = [4,2,1,1,2], extraCandies = 1
<strong>输出：</strong>[true,false,false,false,false] 
<strong>解释：</strong>只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>candies = [12,1,12], extraCandies = 10
<strong>输出：</strong>[true,false,true]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>2 &lt;= candies.length &lt;= 100</code></li>
	<li><code>1 &lt;= candies[i] &lt;= 100</code></li>
	<li><code>1 &lt;= extraCandies &lt;= 50</code></li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [C++](#code-cpp-1)

### 代码

#### code-cpp-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```C++
#include<iostream>
#include<vector>
#include<map>
using namespace std;

class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int max = 0;
        int candiesSize = candies.size();
        for(int i = 0; i < candiesSize; i++) {
            if(candies[i] > max) {
                max = candies[i];
            }
        }
        vector<bool> result;
        for(int i = 0; i < candiesSize; i++) {
            if(candies[i]+extraCandies >= max) {
                result.push_back(true);
            } else {
                result.push_back(false);
            }
        }
        return result;
    }
};

/**
 * 输出 bool 类型的容器
 */
void printfVectorBool(vector<bool> result) {
    map<bool, string> boolString = {{true, "true"}, {false, "false"}};
    string s = "[";
    for(int i = 0; i < result.size(); i++) {
        s += boolString[result[i]];
        if(i < result.size() - 1) {
            s += ",";
        }
    }
    s += "]\n";
    cout << s;
}

int main() {
    int a[] = {2, 3, 5, 1, 3};
    vector<int> candies(begin(a), end(a));
    int extraCandies = 3;

    Solution solution;

    vector<bool> result = solution.kidsWithCandies(candies, extraCandies);
    printfVectorBool(result);

    system("pause");
}
```

