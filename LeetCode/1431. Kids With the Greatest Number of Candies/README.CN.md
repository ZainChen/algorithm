[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-cpp-1](#code-cpp-1)

# 标题

>[目录](#目录)

1431.&nbsp;拥有最多糖果的孩子

给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。

对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。

示例 1：
```
输入：candies = [2,3,5,1,3], extraCandies = 3
输出：[true,true,true,false,true] 
解释：
孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。
孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。
孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。
孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
```

示例 2：
```
输入：candies = [4,2,1,1,2], extraCandies = 1
输出：[true,false,false,false,false] 
解释：只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。
```

示例 3：
```
输入：candies = [12,1,12], extraCandies = 10
输出：[true,false,true]
```

提示：
- 2 <= candies.length <= 100
- 1 <= candies[i] <= 100
- 1 <= extraCandies <= 50

# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [C++](#code-cpp-1)

[[[方法简介]]]

### 分析

[[[方法分析]]]

### 代码

#### code-cpp-1

>[目录](#目录) | [标题](#标题) | [分析](#方法1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

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
