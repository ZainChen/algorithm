[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-ts-1](#code-ts-1)

# 标题

>[目录](#目录)

912&nbsp;排序数组

<p>给你一个整数数组&nbsp;<code>nums</code>，请你将该数组升序排列。</p>

<p>&nbsp;</p>

<ol>
</ol>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [5,2,3,1]
<strong>输出：</strong>[1,2,3,5]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [5,1,1,2,0,0]
<strong>输出：</strong>[0,0,1,1,2,5]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-5 * 10<sup>4</sup> &lt;= nums[i] &lt;= 5 * 10<sup>4</sup></code></li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [TypeScript](#code-ts-1)

### 代码

#### code-ts-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.ts](./index-1.ts "index-1.ts")

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

