[Leetcode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-cpp-1](#code-cpp-1)

# 标题

>[目录](#目录)


[[[题目]]]


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
