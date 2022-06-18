[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题

>[目录](#目录)

1410.&nbsp;HTML 实体解析器

「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。

HTML 里这些特殊字符和它们对应的字符实体包括：
- 双引号：字符实体为 &quot; ，对应的字符是 " 。
- 单引号：字符实体为 &apos; ，对应的字符是 ' 。
- 与符号：字符实体为 &amp; ，对应对的字符是 & 。
- 大于号：字符实体为 &gt; ，对应的字符是 > 。
- 小于号：字符实体为 &lt; ，对应的字符是 < 。
- 斜线号：字符实体为 &frasl; ，对应的字符是 / 。
- 给你输入字符串 text ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。

示例 1：
```
输入：text = "&amp; is an HTML entity but &ambassador; is not."
输出："& is an HTML entity but &ambassador; is not."
解释：解析器把字符实体 &amp; 用 & 替换
```

示例 2：
```
输入：text = "and I quote: &quot;...&quot;"
输出："and I quote: \"...\""
```

示例 3：
```
输入：text = "Stay home! Practice on Leetcode :)"
输出："Stay home! Practice on Leetcode :)"
```

示例 4：
```
输入：text = "x &gt; y &amp;&amp; x &lt; y is always false"
输出："x > y && x < y is always false"
```

示例 5：
```
输入：text = "leetcode.com&frasl;problemset&frasl;all"
输出："leetcode.com/problemset/all"
```

提示：
- 1 <= text.length <= 10^5
- 字符串可能包含 256 个ASCII 字符中的任意字符。

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
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    let c = {
        '&quot;': '\"',
        '&apos;': '\'',
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/',
    };
    let r = '';
    let k = 0;
    let b = false;
    let t = '';
    while(k < text.length) {
        switch(text[k]) {
            case '&':
                t += text[k];
                b = true;
                break;
            case ';':
                t += text[k];
                r += c[t] ? c[t] : t;
                b = false;
                t = '';
                break;
            default:
                if(b) {
                    t += text[k];
                } else {
                    r += text[k];
                }
        }
        k += 1;
    }
    return r;
};

let sample1 = "&amp; is an HTML entity but &ambassador; is not.";
let sample2 = "and I quote: &quot;...&quot;";
let sample3 = "Stay home! Practice on Leetcode :)";
let sample4 = "x &gt; y &amp;&amp; x &lt; y is always false";
let sample5 = "leetcode.com&frasl;problemset&frasl;all";
let sample6 = "and I quote: &quot;...&quot;";

console.log('zain1>>>>>', entityParser(sample1));
console.log('zain2>>>>>', entityParser(sample2));
console.log('zain3>>>>>', entityParser(sample3));
console.log('zain4>>>>>', entityParser(sample4));
console.log('zain5>>>>>', entityParser(sample5));
console.log('zain5>>>>>', entityParser(sample6));
```
