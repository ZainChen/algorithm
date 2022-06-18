[Leetcode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#title)
>- [Solution](#solution)
>    - [Method-1: Violence](#method-1)
>        - [code-cpp-1](#code-cpp-1)
>        - [code-js-1](#code-js-1)

# Title

>[directory](#directory)

1108.&nbsp;Defanging an IP Address

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

```
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
```

Example 2:

```
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```
 
Constraints:

The given address is a valid IPv4 address.

# Solution

## Method-1

>[directory](#directory) | [title](#title) | [C++](#code-cpp-1), [JavaScript](#code-js-1), [Python](#code-python2-1)

Violence

### Analyze

...

### Code

#### code-cpp-1

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

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

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [index-1.js](./index-1.js "index-1.js")

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
