[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

88.&nbsp;Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

Example 2:
```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

Example 3:
```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

Constraints:

- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -109 <= nums1[i], nums2[j] <= 109

Follow up: Can you come up with an algorithm that runs in O(m + n) time?

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
