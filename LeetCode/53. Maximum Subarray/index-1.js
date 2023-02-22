/**
 * 对动态规划的理解：将一个复杂的问题，先间接定义出另一个简单的子问题，再通过简单子问题的答案得出这个复杂问题的答案
 */
/**
 * 子问题：求出以每个数结尾的最大连续子数组的和分别是多少
 * 主问题：求出子问题中最大值
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let dp = nums[0], maxSum = nums[0]
  nums.shift()
  nums.forEach(num => {
    dp = Math.max(dp + num, num)
    maxSum = Math.max(dp, maxSum)
  })
  return maxSum
};

console.log(maxSubArray([9,3,-20,4,5]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));