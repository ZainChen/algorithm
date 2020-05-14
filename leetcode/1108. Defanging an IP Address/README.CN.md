[Leetcode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一：暴力](#方法一)
>        - [code-cpp-1](#code-cpp-1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

1108.&nbsp;IP 地址无效化

给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

示例 1：

```
输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"
```

示例 2：

```
输入：address = "255.100.50.0"
输出："255[.]100[.]50[.]0"
```

提示：

给出的 address 是一个有效的 IPv4 地址

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
using namespace std;

class Solution {
public:
    string defangIPaddr(string address) {
        string s = "";
        for (int i = 0; i < address.size(); i++) {
            string t(1, address[i]);
            s += t == "." ? "[.]" : t;
        }
        return s;
    }
};

int main() {
    string str = "1.1.1.1";
    string str1 = "255.100.50.0";

    Solution solution;

    string sOut = solution.defangIPaddr(str);
    cout << sOut << endl;
    string sOut1 = solution.defangIPaddr(str1);
    cout << sOut1 << endl;

    system("pause");
}
```

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.js](./index-1.js "index-1.js")

```js
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let s = '';
    for (let i = 0; i < address.length; i++) {
        s += address[i] === '.' ? '[.]' : address[i];
    }
    return s;
};

let sample1 = "1.1.1.1";
let sample2 = "255.100.50.0";

console.log('zain1>>>>>', defangIPaddr(sample1));
console.log('zain2>>>>>', defangIPaddr(sample2));
```
