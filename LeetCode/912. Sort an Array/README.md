[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-ts-1](#code-ts-1)

# Title

>[Directory](#Directory)

912.&nbsp;Sort an Array

Given an array of integers nums, sort the array in ascending order.

Example 1:
```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
```

Example 2:
```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
```

Constraints:
- 1 <= nums.length <= 5 * 10^4
- -5 * 10^4 <= nums[i] <= 5 * 10^4

# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [TypeScript](#code-ts-1)

[[[Method Introduction]]]

### Analyze

[[[Method analysis]]]

### Code

#### code-ts-1

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method1) | [index-1.ts](./index-1.ts "index-1.ts")

```JavaScript
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
