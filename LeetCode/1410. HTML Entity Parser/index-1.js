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