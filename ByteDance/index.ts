const sort = (nums: number[]) => {
  const result: number[] = Object.assign([], nums)
  for (let i = 0; i < result.length - 1;  i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[i]) {
        const temp = result[i]
        result[i] = result[j]
        result[j] = temp
      }
    }
  }
  return result
}

const nums = [0, 9, 7, 9, 5, 5, 1]

console.log('sort', nums, sort(nums))
