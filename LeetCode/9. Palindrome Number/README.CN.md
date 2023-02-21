[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>    - [方法2](#方法2)
>        - [code-js-2](#code-js-2)

# 标题

>[目录](#目录)

9&nbsp;回文数

<p>给你一个整数 <code>x</code> ，如果 <code>x</code> 是一个回文整数，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>

<p>回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。</p>

<ul>
	<li>例如，<code>121</code> 是回文，而 <code>123</code> 不是。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>x = 121
<strong>输出：</strong>true
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre>
<strong>输入：</strong>x = -121
<strong>输出：</strong>false
<strong>解释：</strong>从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>x = 10
<strong>输出：</strong>false
<strong>解释：</strong>从右向左读, 为 01 。因此它不是一个回文数。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>

<p>&nbsp;</p>

<p><strong>进阶：</strong>你能不将整数转为字符串来解决这个问题吗？</p>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const reverse = `${x}`.split('').reverse().join('');
  return reverse === `${x}`;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(0))

```

## 方法2

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-2)

### 代码

#### code-js-2

>[目录](#目录) | [标题](#标题) | [方法2](#方法2) | [index-2.js](./index-2.js "index-2.js")

```JavaScript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) {
    return false
  }

  let newNum = 0
  let temp = x
  while (temp) {
    newNum = newNum *10 + temp % 10
    temp = parseInt(temp / 10)
  }
  return newNum === x
};

console.log(isPalindrome(121))
console.log(isPalindrome(3728900))
console.log(isPalindrome(-121))
console.log(isPalindrome(0))

```

