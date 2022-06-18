[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一：暴力](#方法一)
>        - [code-cpp-1](#code-cpp-1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

1295.&nbsp;统计位数为偶数的数字

给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。

示例 1：

```
输入：nums = [12,345,2,6,7896]
输出：2
解释：
12 是 2 位数字（位数为偶数） 
345 是 3 位数字（位数为奇数）  
2 是 1 位数字（位数为奇数） 
6 是 1 位数字 位数为奇数） 
7896 是 4 位数字（位数为偶数）  
因此只有 12 和 7896 是位数为偶数的数字
```

示例 2：

```
输入：nums = [555,901,482,1771]
输出：1 
解释： 
只有 1771 是位数为偶数的数字。
```

提示：
- 1 <= nums.length <= 500
- 1 <= nums[i] <= 10^5

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

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.js](./index-1.js "index-1.js")

```js
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
