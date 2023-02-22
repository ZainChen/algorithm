[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)

# 标题

>[目录](#目录)

1108.&nbsp;IP 地址无效化

<p>给你一个有效的 <a href="https://baike.baidu.com/item/IPv4" target="_blank">IPv4</a> 地址&nbsp;<code>address</code>，返回这个 IP 地址的无效化版本。</p>

<p>所谓无效化&nbsp;IP 地址，其实就是用&nbsp;<code>&quot;[.]&quot;</code>&nbsp;代替了每个 <code>&quot;.&quot;</code>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>address = &quot;1.1.1.1&quot;
<strong>输出：</strong>&quot;1[.]1[.]1[.]1&quot;
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>address = &quot;255.100.50.0&quot;
<strong>输出：</strong>&quot;255[.]100[.]50[.]0&quot;
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>给出的&nbsp;<code>address</code>&nbsp;是一个有效的 IPv4 地址</li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1), [C++](#code-cpp-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
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

#### code-cpp-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```C++
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

