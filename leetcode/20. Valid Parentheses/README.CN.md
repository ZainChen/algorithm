[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一：暴力](#方法一)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

20.&nbsp;有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。

左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

示例 1:

```
输入: "()"
输出: true
```

示例 2:

```
输入: "()[]{}"
输出: true
```

示例 3:

```
输入: "(]"
输出: false
```

示例 4:

```
输入: "([)]"
输出: false
```

示例 5:

```
输入: "{[]}"
输出: true
```

# 解

## 方法一

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

暴力

### 分析

...

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.js](./index-1.js "index-1.js")

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
