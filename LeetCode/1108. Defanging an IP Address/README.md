[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)

# Title

>[Directory](#Directory)

1108&nbsp;Defanging an IP Address

<p>Given a valid (IPv4) IP <code>address</code>, return a defanged version of that IP address.</p>

<p>A <em>defanged&nbsp;IP address</em>&nbsp;replaces every period <code>&quot;.&quot;</code> with <code>&quot;[.]&quot;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> address = "1.1.1.1"
<strong>Output:</strong> "1[.]1[.]1[.]1"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> address = "255.100.50.0"
<strong>Output:</strong> "255[.]100[.]50[.]0"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The given <code>address</code> is a valid IPv4 address.</li>
</ul>

# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1), [C++](#code-cpp-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

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

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

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

