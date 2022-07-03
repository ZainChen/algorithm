[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一](#方法一)
>        - [code-ts-1](#code-ts-1)

# 标题

>[目录](#目录)

912.&nbsp;排序数组

给你一个整数数组 nums，请你将该数组升序排列。

示例 1：

```
输入：nums = [5,2,3,1]
输出：[1,2,3,5]
```

示例 2：

```
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
```

提示：
- 1 <= nums.length <= 5 * 10^4
- -5 * 10^4 <= nums[i] <= 5 * 10^4

# 解

## 方法一

>[目录](#目录) | [标题](#标题) | [TypeScript](#code-ts-1)

...

### 分析

...

### 代码

#### code-ts-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.ts](./index-1.ts "index-1.ts")

```js
// js 内置排序函数
// function sortArray(nums: number[]): number[] {
//   return nums.sort((a, b) => a - b)
// };

function quickSort(nums: number[], left: number, right: number): number[] {
  if (left < right) {
    let position = left
    const mainPosition = right
    for (let i = left; i < right; i++) {
      if (nums[i] < nums[mainPosition]) {
        [nums[position], nums[i]] = [nums[i], nums[position]]
        position++
      }
    }
    [nums[position], nums[mainPosition]] = [nums[mainPosition], nums[position]]
    quickSort(nums, left, position - 1)
    quickSort(nums, position + 1, right)
  }
  return nums
}

function sortArray(nums: number[]): number[] {
  return quickSort(nums, 0, nums.length - 1)
};

console.log('sortArray', sortArray([5,2,3,1,4]))
```
