/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let a = 0;
    for(let i = 0; i < nums.length; i++) {
        if((nums[i]).toString().length % 2 === 0) {
            a += 1;
        }
    }
    return a;
};

let sample1 = [12, 345, 2, 6, 7896];
let sample2 = [555,901,482,1771];

console.log('zain1>>>>>', findNumbers(sample1));
console.log('zain2>>>>>', findNumbers(sample2));
