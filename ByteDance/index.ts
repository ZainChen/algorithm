var twoSum = function(nums: number[], sum: number) {
  const map = new Map<number, boolean>()
  for (let i = 0; i < nums.length; i++) {
    const valueOne = sum - nums[i]
    if (map.has(nums[i])) {
      return [valueOne, nums[i]]
    }
    map.set(valueOne, true)
  }
  return null
}

console.log(twoSum([9, 2, 1, 4, 30, 6], 31))