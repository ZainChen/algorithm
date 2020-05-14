[Leetcode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#title)
>- [Solution](#solution)
>    - [Method-1: Violence](#method-1)
>        - [code-js-1](#code-js-1)

# Title

>[directory](#directory)

20.&nbsp;Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.

Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

```
Input: "()"
Output: true
```

Example 2:

```
Input: "()[]{}"
Output: true
```

Example 3:

```
Input: "(]"
Output: false
```

Example 4:

```
Input: "([)]"
Output: false
```

Example 5:

```
Input: "{[]}"
Output: true
```

# Solution

## Method-1

>[directory](#directory) | [title](#title) | [JavaScript](#code-js-1)

Violence

### Analyze

...

### Code

#### code-js-1

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [index-1.js](./index-1.js "index-1.js")

```js
/**
 * 指定括号翻转
 * @param {*} s 
 */
let bracketsReverse = function(s) {
    switch(s) {
        case ')': return '(';
        case ']': return '[';
        case '}': return '{';
        default: '';
    }
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let t = '';
    let k = true;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            t += s[i];
        } else {
            let tLength = t.length;
            if(t[tLength-1] === bracketsReverse(s[i])) {
                t = t.substring(0, tLength-1);
                k = false;
            } else {
                return false;
            }
        }
    }
    return (t || (s.length > 0 && k)) ? false : true;
};

let sample1 = "()";
let sample2 = "()[]{}";
let sample3 = "(]";
let sample4 = "([)]";
let sample5 = "{[]}";
let sample6 = "]";
let sample7 = "";
let sample8 ="(])";

console.log('zain1>>>>>', isValid(sample1));
console.log('zain2>>>>>', isValid(sample2));
console.log('zain3>>>>>', isValid(sample3));
console.log('zain4>>>>>', isValid(sample4));
console.log('zain5>>>>>', isValid(sample5));
console.log('zain6>>>>>', isValid(sample6));
console.log('zain7>>>>>', isValid(sample7));
console.log('zain8>>>>>', isValid(sample8));
```
