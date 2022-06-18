[Leetcode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

560.&nbsp;和为K的子数组

给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

示例 1 :
```
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
```

说明 :
1. 数组的长度为 [1, 20,000]。
2. 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。

# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

[[[方法简介]]]

### 分析

[[[方法分析]]]

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let n = 0;
    // let s = [];
    for(let x = 0; x < nums.length; x++) {
        let t = [];
        for(let y = 0; y < nums.length; y++) {
            if(x > y) {
                t.push('*');
            } else if(y > x) {
                let a = t[y-1]+nums[y];
                t.push(a);
                if(a === k) {
                    n += 1;
                }
            } else {
                t.push(nums[y])
                if(nums[y] === k) {
                    n += 1;
                }
            }
        }
        // s.push(t);
    }
    // console.table(s);
    return n;
};

console.log('zain1>>>>>', subarraySum([1,1,1], 2));
console.log('zain2>>>>>', subarraySum([1, 2, 5, 4, 3], 3));
console.log('zain3>>>>>', subarraySum([1, 2, 5, 4, 3], 15));
console.log('zain4>>>>>', subarraySum([100, 1, 2, 3, 4], 3));

```
