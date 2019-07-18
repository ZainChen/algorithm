/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a = [-1, -1];
    let l = nums.length;
    for(let i = 0; i < l; i++)
        for(let j = i+1; j < l; j++)
            if(nums[i]+nums[j] === target) {
                a[0] = i;
                a[1] = j;
                return a;
            }
    return a;
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));