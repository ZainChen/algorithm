[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)

# Title

>[Directory](#Directory)

1410.&nbsp;HTML Entity Parser

HTML entity parser is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.

The special characters and their entities for HTML are:
- Quotation Mark: the entity is &quot; and symbol character is ".
- Single Quote Mark: the entity is &apos; and symbol character is '.
- Ampersand: the entity is &amp; and symbol character is &.
- Greater Than Sign: the entity is &gt; and symbol character is >.
- Less Than Sign: the entity is &lt; and symbol character is <.
- Slash: the entity is &frasl; and symbol character is /.

Given the input text string to the HTML parser, you have to implement the entity parser.

Return the text after replacing the entities by the special characters.

Example 1:
```
Input: text = "&amp; is an HTML entity but &ambassador; is not."
Output: "& is an HTML entity but &ambassador; is not."
Explanation: The parser will replace the &amp; entity by &
```

Example 2:
```
Input: text = "and I quote: &quot;...&quot;"
Output: "and I quote: \"...\""
```

Example 3:
```
Input: text = "Stay home! Practice on Leetcode :)"
Output: "Stay home! Practice on Leetcode :)"
```

Example 4:
```
Input: text = "x &gt; y &amp;&amp; x &lt; y is always false"
Output: "x > y && x < y is always false"
```

Example 5:
```
Input: text = "leetcode.com&frasl;problemset&frasl;all"
Output: "leetcode.com/problemset/all"
```

Constraints:
- 1 <= text.length <= 10^5
- The string may contain any possible characters out of all the 256 ASCII characters.

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
