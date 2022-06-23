[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

7.&nbsp;Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

Example 1:
```
Input: x = 123
Output: 321
```

Example 2:
```
Input: x = -123
Output: -321
```

Example 3:
```
Input: x = 120
Output: 21
```

Constraints:
- -2^31 <= x <= 2^31 - 1

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
