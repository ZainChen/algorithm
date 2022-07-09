[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

88.&nbsp;合并两个有序数组

给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

示例 1：
```
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
```

示例 2：
```
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
```

示例 3：
```
输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
```

提示：

- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -109 <= nums1[i], nums2[j] <= 109

进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？

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
