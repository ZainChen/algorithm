[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

560&nbsp;Subarray Sum Equals K

<p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return <em>the total number of subarrays whose sum equals to</em> <code>k</code>.</p>

<p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,1], k = 2
<strong>Output:</strong> 2
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3], k = 3
<strong>Output:</strong> 2
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>-10<sup>7</sup> &lt;= k &lt;= 10<sup>7</sup></code></li>
</ul>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

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

