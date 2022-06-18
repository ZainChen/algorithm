[Leetcode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

560.&nbsp;Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

Example 1:
```
Input: nums = [1,1,1], k = 2
Output: 2
```

Example 2:
```
Input: nums = [1,2,3], k = 3
Output: 2
```

Constraints:
- 1 <= nums.length <= 2 * 104
- -1000 <= nums[i] <= 1000
- -107 <= k <= 107

# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1)

[[[Method Introduction]]]

### Analyze

[[[Method analysis]]]

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method1) | [index-1.js](./index-1.js "index-1.js")

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
