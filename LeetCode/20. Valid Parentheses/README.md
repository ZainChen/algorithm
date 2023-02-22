[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

20.&nbsp;Valid Parentheses

<p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
	<li>Open brackets must be closed by the same type of brackets.</li>
	<li>Open brackets must be closed in the correct order.</li>
	<li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;()&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;()[]{}&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(]&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li>
</ul>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
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

