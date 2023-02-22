[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)

# 标题

>[目录](#目录)

1295.&nbsp;统计位数为偶数的数字

<p>给你一个整数数组&nbsp;<code>nums</code>，请你返回其中位数为&nbsp;<strong>偶数</strong>&nbsp;的数字的个数。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>nums = [12,345,2,6,7896]
<strong>输出：</strong>2
<strong>解释：
</strong>12 是 2 位数字（位数为偶数）&nbsp;
345 是 3 位数字（位数为奇数）&nbsp;&nbsp;
2 是 1 位数字（位数为奇数）&nbsp;
6 是 1 位数字 位数为奇数）&nbsp;
7896 是 4 位数字（位数为偶数）&nbsp;&nbsp;
因此只有 12 和 7896 是位数为偶数的数字
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>nums = [555,901,482,1771]
<strong>输出：</strong>1 
<strong>解释： </strong>
只有 1771 是位数为偶数的数字。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 500</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10^5</code></li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1), [C++](#code-cpp-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let a = 0;
    for(let i = 0; i < nums.length; i++) {
        if((nums[i]).toString().length % 2 === 0) {
            a += 1;
        }
    }
    return a;
};

let sample1 = [12, 345, 2, 6, 7896];
let sample2 = [555,901,482,1771];

console.log('zain1>>>>>', findNumbers(sample1));
console.log('zain2>>>>>', findNumbers(sample2));

```

#### code-cpp-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```C++
#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    int numberBit(int num) {
        int a = 1;
        while(num / 10) {
            a++;
            num /= 10;
        }
        return a;
    }

    int findNumbers(vector<int>& nums) {
        int a = 0;
        for(int i = 0; i < nums.size(); i++)
            if(numberBit(nums[i]) % 2 == 0)
                a++;
        return a;
    }
};

int main() {
    int a[] = {12, 345, 2, 6, 7896};
    vector<int> nums(begin(a), end(a));

    Solution solution;

    cout << solution.findNumbers(nums) << endl;

    system("pause");
}
```

