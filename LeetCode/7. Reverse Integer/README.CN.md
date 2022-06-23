[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

7.&nbsp;整数反转

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [-2^31, 2^31 - 1] ，就返回 0。

**假设环境不允许存储 64 位整数（有符号或无符号）。**

示例 1：
```
输入：x = 123
输出：321
```

示例 2：
```
输入：x = -123
输出：-321
```

示例 3：
```
输入：x = 120
输出：21
```

示例 4：
```
输入：x = 0
输出：0
```

提示：
- -2^31 <= x <= 2^31 - 1

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
 * @param {number} value
 * @return {number}
 */
var reverse = function(value) {
  let newValue = 0
  while(value) {
    newValue = newValue * 10 + value % 10
    value = parseInt(value / 10)
  }
  if (newValue < -(2**31 -1) || newValue > 2**31 -1) {
    return 0
  }
  return newValue
};

console.log(reverse(-1230922))
console.log(reverse(2123456789))
```
