[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-ts-1](#code-ts-1)

# Title

>[Directory](#Directory)

912.&nbsp;Sort an Array

<p>Given an array of integers <code>nums</code>, sort the array in ascending order and return it.</p>

<p>You must solve the problem <strong>without using any built-in</strong> functions in <code>O(nlog(n))</code> time complexity and with the smallest space complexity possible.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,2,3,1]
<strong>Output:</strong> [1,2,3,5]
<strong>Explanation:</strong> After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,1,1,2,0,0]
<strong>Output:</strong> [0,0,1,1,2,5]
<strong>Explanation:</strong> Note that the values of nums are not necessairly unique.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-5 * 10<sup>4</sup> &lt;= nums[i] &lt;= 5 * 10<sup>4</sup></code></li>
</ul>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [TypeScript](#code-ts-1)

### Code

#### code-ts-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.ts](./index-1.ts "index-1.ts")

```TypeScript
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

