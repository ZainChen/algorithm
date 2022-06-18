[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#title)
>- [Solution](#solution)
>    - [Method-1: String flipping method](#method-1)
>        - [code-js-1](#code-js-1)
>    - [Method-2: Integer remainder](#method-2)
>        - [code-js-2](#code-js-2)

# Title

>[directory](#directory)

9.&nbsp;Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

- For example, 121 is a palindrome while 123 is not.
 
Example 1:
```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

Example 2:
```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

Example 3:
```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

Constraints:
- -231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?

# Solution

## Method-1

>[directory](#directory) | [title](#title) | [JavaScript](#code-js-1)

String flipping method

### Analyze

...

### Code

#### code-js-1

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [index-1.js](./index-1.js "index-1.js")

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

## Method-2

>[directory](#directory) | [title](#title) | [JavaScript](#code-js-2)

Integer remainder

### Analyze

...

### Code

#### code-js-2

>[directory](#directory) | [title](#title) | [analyze](#method-2) | [index-2.js](./index-2.js "index-2.js")

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
