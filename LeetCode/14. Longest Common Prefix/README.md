[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)

# Title

>[Directory](#Directory)

14&nbsp;Longest Common Prefix

<p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>&quot;&quot;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
<strong>Output:</strong> &quot;fl&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lowercase English letters.</li>
</ul>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1), [C++](#code-cpp-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
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

console.log(longestCommonPrefix(sample1));
console.log(longestCommonPrefix(sample2));
console.log(longestCommonPrefix(sample3));

```

#### code-cpp-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```C++
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

