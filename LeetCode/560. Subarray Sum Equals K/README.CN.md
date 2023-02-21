[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

560&nbsp;和为 K 的子数组

<p>给你一个整数数组 <code>nums</code> 和一个整数&nbsp;<code>k</code> ，请你统计并返回 <em>该数组中和为&nbsp;<code>k</code><strong>&nbsp;</strong>的连续子数组的个数&nbsp;</em>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,1,1], k = 2
<strong>输出：</strong>2
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,2,3], k = 3
<strong>输出：</strong>2
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>-10<sup>7</sup> &lt;= k &lt;= 10<sup>7</sup></code></li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

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

