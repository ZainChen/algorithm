[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

88.&nbsp;Merge Sorted Array

<p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in <strong>non-decreasing order</strong>, and two integers <code>m</code> and <code>n</code>, representing the number of elements in <code>nums1</code> and <code>nums2</code> respectively.</p>

<p><strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a single array sorted in <strong>non-decreasing order</strong>.</p>

<p>The final sorted array should not be returned by the function, but instead be <em>stored inside the array </em><code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a length of <code>n</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
<strong>Output:</strong> [1,2,2,3,5,6]
<strong>Explanation:</strong> The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [<u>1</u>,<u>2</u>,2,<u>3</u>,5,6] with the underlined elements coming from nums1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1], m = 1, nums2 = [], n = 0
<strong>Output:</strong> [1]
<strong>Explanation:</strong> The arrays we are merging are [1] and [].
The result of the merge is [1].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [0], m = 0, nums2 = [1], n = 1
<strong>Output:</strong> [1]
<strong>Explanation:</strong> The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>nums1.length == m + n</code></li>
	<li><code>nums2.length == n</code></li>
	<li><code>0 &lt;= m, n &lt;= 200</code></li>
	<li><code>1 &lt;= m + n &lt;= 200</code></li>
	<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up: </strong>Can you come up with an algorithm that runs in <code>O(m + n)</code> time?</p>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  m--
  n--
  while (m >= 0 || n >= 0) {
    const index = m + n + 1
    if (m < 0 || nums1[m] < nums2[n]) {
        nums1[index] = nums2[n--]
    } else if (n < 0 || nums1[m] > nums2[n]) {
        nums1[index] = nums1[m--]
    } else if (nums1[m] === nums2[n]) {
      nums1[index] = nums1[m--]
      nums1[m + n + 1] = nums2[n--]
    }
  }
};

var merge1 = function(nums1, m, nums2, n) {
  m--
  n--
  while (m >= 0 || n >= 0) {
    if (m < 0) {
      while(n >= 0) {
        nums1[m + n + 1] = nums2[n]
        n--
      }
    } else if (n < 0) {
      while(m >= 0) {
        nums1[m + n + 1] = nums1[m]
        m--
      }
    } else if (nums1[m] === nums2[n]) {
      nums1[m + n + 1] = nums1[m]
      m--
      nums1[m + n + 1] = nums2[n]
      n--
    } else if (nums1[m] > nums2[n]) {
      nums1[m + n + 1] = nums1[m]
      m--
    } else if (nums1[m] < nums2[n]) {
      nums1[m + n + 1] = nums2[n]
      n--
    }
  }
};

var merge2 = function(nums1, m, nums2, n) {
  // Object.assign(nums1, [...nums1.slice(0, m), ...nums2].sort((a, b) => a - b))
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
}

const nums = [1,2,3,0,0,0]

// merge(nums, 3, [2,5,6], 3)

merge(nums, 3, [2,5,6], 3)

console.log('nums', nums)

```

