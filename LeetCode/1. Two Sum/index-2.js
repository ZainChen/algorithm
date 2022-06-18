/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a = [-1, -1];
    let b = new Object();
    let l = nums.length;
    for(let i = 0; i < l; i++)
        b[nums[i]] = i;
    for(let i = 0; i < l; i++)
        if(typeof b[target-nums[i]] !== "undefined" && b[target-nums[i]] != i) {
            a[0] = i;
            a[1] = b[target-nums[i]];
            return a;
        }
    return a;
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));