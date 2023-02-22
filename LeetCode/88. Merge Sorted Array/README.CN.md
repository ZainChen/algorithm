[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

88.&nbsp;合并两个有序数组

<p>给你两个按 <strong>非递减顺序</strong> 排列的整数数组&nbsp;<code>nums1</code><em> </em>和 <code>nums2</code>，另有两个整数 <code>m</code> 和 <code>n</code> ，分别表示 <code>nums1</code> 和 <code>nums2</code> 中的元素数目。</p>

<p>请你 <strong>合并</strong> <code>nums2</code><em> </em>到 <code>nums1</code> 中，使合并后的数组同样按 <strong>非递减顺序</strong> 排列。</p>

<p><strong>注意：</strong>最终，合并后数组不应由函数返回，而是存储在数组 <code>nums1</code> 中。为了应对这种情况，<code>nums1</code> 的初始长度为 <code>m + n</code>，其中前 <code>m</code> 个元素表示应合并的元素，后 <code>n</code> 个元素为 <code>0</code> ，应忽略。<code>nums2</code> 的长度为 <code>n</code> 。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
<strong>输出：</strong>[1,2,2,3,5,6]
<strong>解释：</strong>需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [<em><strong>1</strong></em>,<em><strong>2</strong></em>,2,<em><strong>3</strong></em>,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums1 = [1], m = 1, nums2 = [], n = 0
<strong>输出：</strong>[1]
<strong>解释：</strong>需要合并 [1] 和 [] 。
合并结果是 [1] 。
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>nums1 = [0], m = 0, nums2 = [1], n = 1
<strong>输出：</strong>[1]
<strong>解释：</strong>需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>nums1.length == m + n</code></li>
	<li><code>nums2.length == n</code></li>
	<li><code>0 &lt;= m, n &lt;= 200</code></li>
	<li><code>1 &lt;= m + n &lt;= 200</code></li>
	<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>

<p><strong>进阶：</strong>你可以设计实现一个时间复杂度为 <code>O(m + n)</code> 的算法解决此问题吗？</p>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

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

