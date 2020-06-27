[Leetcode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)

# 标题


>[目录](#目录)


<div class="notranslate"><p>「HTML&nbsp;实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。</p>

<p>HTML 里这些特殊字符和它们对应的字符实体包括：</p>

<ul>
	<li><strong>双引号：</strong>字符实体为&nbsp;<code>&amp;quot;</code>&nbsp;，对应的字符是&nbsp;<code>"</code>&nbsp;。</li>
	<li><strong>单引号：</strong>字符实体为&nbsp;<code>&amp;apos;</code>&nbsp;，对应的字符是&nbsp;<code>'</code>&nbsp;。</li>
	<li><strong>与符号：</strong>字符实体为&nbsp;<code>&amp;amp;</code>&nbsp;，对应对的字符是&nbsp;<code>&amp;</code>&nbsp;。</li>
	<li><strong>大于号：</strong>字符实体为&nbsp;<code>&amp;gt;</code>&nbsp;，对应的字符是&nbsp;<code>&gt;</code>&nbsp;。</li>
	<li><strong>小于号：</strong>字符实体为&nbsp;<code>&amp;lt;</code>&nbsp;，对应的字符是&nbsp;<code>&lt;</code>&nbsp;。</li>
	<li><strong>斜线号：</strong>字符实体为&nbsp;<code>&amp;frasl;</code>&nbsp;，对应的字符是&nbsp;<code>/</code>&nbsp;。</li>
</ul>

<p>给你输入字符串&nbsp;<code>text</code>&nbsp;，请你实现一个 HTML&nbsp;实体解析器，返回解析器解析后的结果。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>text = "&amp;amp; is an HTML entity but &amp;ambassador; is not."
<strong>输出：</strong>"&amp; is an HTML entity but &amp;ambassador; is not."
<strong>解释：</strong>解析器把字符实体 &amp;amp; 用 &amp; 替换
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre><strong>输入：</strong>text = "and I quote: &amp;quot;...&amp;quot;"
<strong>输出：</strong>"and I quote: \"...\""
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>text = "Stay home! Practice on Leetcode :)"
<strong>输出：</strong>"Stay home! Practice on Leetcode :)"
</pre>

<p><strong>示例 4：</strong></p>

<pre><strong>输入：</strong>text = "x &amp;gt; y &amp;amp;&amp;amp; x &amp;lt; y is always false"
<strong>输出：</strong>"x &gt; y &amp;&amp; x &lt; y is always false"
</pre>

<p><strong>示例 5：</strong></p>

<pre><strong>输入：</strong>text = "leetcode.com&amp;frasl;problemset&amp;frasl;all"
<strong>输出：</strong>"leetcode.com/problemset/all"
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= text.length &lt;= 10^5</code></li>
	<li>字符串可能包含 256 个ASCII 字符中的任意字符。</li>
</ul>
</div>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [Javascript](#code-js-1)

[[[方法简介]]]

### 分析

[[[方法分析]]]

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法1) | [index-1.js](./index-1.js "index-1.js")

```Javascript
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
