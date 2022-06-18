[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一：暴力](#方法一)
>        - [code-cpp-1](#code-cpp-1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

14.&nbsp;最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

```
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2:

```
输入: ["dog","racecar","car"]
输出: ""
```

解释: 输入不存在公共前缀。

说明:

所有输入只包含小写字母 a-z 。


# 解

## 方法一

>[目录](#目录) | [标题](#标题) | [C++](#code-cpp-1), [JavaScript](#code-js-1)

暴力

### 分析

...

### 代码

#### code-cpp-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```cpp
#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string s = "";
        int k = 0;
        while(strs.size() > 0 && k < strs[0].size()) {
            char p = strs[0][k];
            bool t = true;
            for(int i = 1; i < strs.size(); i++) {
                if(!(k < strs[i].size() && strs[i][k] == p)) {
                    t = false;
                    break;
                }
            }
            if(t) {
                s += p;
            } else {
                break;
            }
            k++;
        }
        return s;
    }
};

int main() {
    string str[] = {"flower", "flow", "flight"};
    vector<string> strs(str, str+sizeof(str)/sizeof(str[0]));
    
    string str1[] = {"aca", "cba"};
    vector<string> strs1(str1, str1+sizeof(str1)/sizeof(str1[0]));

    Solution solution;

    string vecOut = solution.longestCommonPrefix(strs);
    cout << vecOut << endl;
    string vecOut1 = solution.longestCommonPrefix(strs1);
    cout << vecOut1 << endl;

    system("pause");
}
```

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.js](./index-1.js "index-1.js")

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let s = '';
    let k = 0;
    while(strs && strs.length > 0 && strs[0] && k < strs[0].length) {
        let p = strs[0][k];
        let t = true;
        for(let i = 1; i < strs.length; i++) {
            if(!(k < strs[i].length && strs[i][k] === p)) {
                t = false;
                break;
            }
        }
        if(t) {
            s += p;
        } else {
            break;
        }
        k++;
    }
    return s;
};

let sample1 = ["flower", "flow", "flight"];
let sample2 = ["dog", "racecar", "car"];
let sample3 = ["aca", "cba"];

console.log('zain>>>>>', longestCommonPrefix(sample1));
console.log('zain>>>>>', longestCommonPrefix(sample2));
console.log('zain>>>>>', longestCommonPrefix(sample3));
```
