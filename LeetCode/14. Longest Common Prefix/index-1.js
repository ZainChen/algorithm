/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let s = '';
    let k = 0;
    while(strs && strs.length > 0 && strs[0] && k < strs[0].length) {
        let p = strs[0][k];
        let t = true;
        for(let i = 1; i < strs.length; i++) {
            if(!(k < strs[i].length && strs[i][k] === p)) {
                t = false;
                break;
            }
        }
        if(t) {
            s += p;
        } else {
            break;
        }
        k++;
    }
    return s;
};

let sample1 = ["flower", "flow", "flight"];
let sample2 = ["dog", "racecar", "car"];
let sample3 = ["aca", "cba"];

console.log(longestCommonPrefix(sample1));
console.log(longestCommonPrefix(sample2));
console.log(longestCommonPrefix(sample3));
