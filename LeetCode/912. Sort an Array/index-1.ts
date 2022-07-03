// js 内置排序函数
// function sortArray(nums: number[]): number[] {
//   return nums.sort((a, b) => a - b)
// };

function quickSort(nums: number[], left: number, right: number): number[] {
  if (left < right) {
    let position = left
    const mainPosition = right
    for (let i = left; i < right; i++) {
      if (nums[i] < nums[mainPosition]) {
        [nums[position], nums[i]] = [nums[i], nums[position]]
        position++
      }
    }
    [nums[position], nums[mainPosition]] = [nums[mainPosition], nums[position]]
    quickSort(nums, left, position - 1)
    quickSort(nums, position + 1, right)
  }
  return nums
}

function sortArray(nums: number[]): number[] {
  return quickSort(nums, 0, nums.length - 1)
};

console.log('sortArray', sortArray([5,2,3,1,4]))
