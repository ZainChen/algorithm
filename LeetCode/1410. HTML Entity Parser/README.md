[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

1410&nbsp;HTML Entity Parser

<p><strong>HTML entity parser</strong> is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.</p>

<p>The special characters and their entities for HTML are:</p>

<ul>
	<li><strong>Quotation Mark:</strong> the entity is <code>&amp;quot;</code> and symbol character is <code>&quot;</code>.</li>
	<li><strong>Single Quote Mark:</strong> the entity is <code>&amp;apos;</code> and symbol character is <code>&#39;</code>.</li>
	<li><strong>Ampersand:</strong> the entity is <code>&amp;amp;</code> and symbol character is <code>&amp;</code>.</li>
	<li><strong>Greater Than Sign:</strong> the entity is <code>&amp;gt;</code> and symbol character is <code>&gt;</code>.</li>
	<li><strong>Less Than Sign:</strong> the entity is <code>&amp;lt;</code> and symbol character is <code>&lt;</code>.</li>
	<li><strong>Slash:</strong> the entity is <code>&amp;frasl;</code> and symbol character is <code>/</code>.</li>
</ul>

<p>Given the input <code>text</code> string to the HTML parser, you have to implement the entity parser.</p>

<p>Return <em>the text after replacing the entities by the special characters</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> text = &quot;&amp;amp; is an HTML entity but &amp;ambassador; is not.&quot;
<strong>Output:</strong> &quot;&amp; is an HTML entity but &amp;ambassador; is not.&quot;
<strong>Explanation:</strong> The parser will replace the &amp;amp; entity by &amp;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> text = &quot;and I quote: &amp;quot;...&amp;quot;&quot;
<strong>Output:</strong> &quot;and I quote: \&quot;...\&quot;&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= text.length &lt;= 10<sup>5</sup></code></li>
	<li>The string may contain any possible characters out of all the 256 ASCII characters.</li>
</ul>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

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

