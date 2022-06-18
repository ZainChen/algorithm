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
