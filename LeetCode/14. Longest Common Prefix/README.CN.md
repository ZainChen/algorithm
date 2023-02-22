[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)

# 标题

>[目录](#目录)

14.&nbsp;最长公共前缀

<p>编写一个函数来查找字符串数组中的最长公共前缀。</p>

<p>如果不存在公共前缀，返回空字符串&nbsp;<code>""</code>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>strs = ["flower","flow","flight"]
<strong>输出：</strong>"fl"
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>strs = ["dog","racecar","car"]
<strong>输出：</strong>""
<strong>解释：</strong>输入不存在公共前缀。</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> 仅由小写英文字母组成</li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1), [C++](#code-cpp-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

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

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

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

