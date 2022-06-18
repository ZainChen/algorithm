[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一：字符串翻转法](#方法一)
>        - [code-js-1](#code-js-1)
>    - [方法二：整数求余数](#方法二)
>        - [code-js-2](#code-js-2)

# 标题

>[目录](#目录)

9.&nbsp;回文数

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

- 例如，121 是回文，而 123 不是。

示例 1：
```
输入：x = 121
输出：true
```

示例 2：
```
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

示例 3：
```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

提示：
- -231 <= x <= 231 - 1
 
进阶：你能不将整数转为字符串来解决这个问题吗？

# 解

## 方法一

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

字符串翻转法

### 分析

...

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.js](./index-1.js "index-1.js")

```js
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

## 方法二

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-2)

整数求余数

### 分析

...

### 代码

#### code-js-2

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-2.js](./index-2.js "index-2.js")

```js
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
