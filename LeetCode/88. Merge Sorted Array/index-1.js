/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  m--
  n--
  while (m >= 0 || n >= 0) {
    const index = m + n + 1
    if (m < 0 || nums1[m] < nums2[n]) {
        nums1[index] = nums2[n--]
    } else if (n < 0 || nums1[m] > nums2[n]) {
        nums1[index] = nums1[m--]
    } else if (nums1[m] === nums2[n]) {
      nums1[index] = nums1[m--]
      nums1[m + n + 1] = nums2[n--]
    }
  }
};

var merge1 = function(nums1, m, nums2, n) {
  m--
  n--
  while (m >= 0 || n >= 0) {
    if (m < 0) {
      while(n >= 0) {
        nums1[m + n + 1] = nums2[n]
        n--
      }
    } else if (n < 0) {
      while(m >= 0) {
        nums1[m + n + 1] = nums1[m]
        m--
      }
    } else if (nums1[m] === nums2[n]) {
      nums1[m + n + 1] = nums1[m]
      m--
      nums1[m + n + 1] = nums2[n]
      n--
    } else if (nums1[m] > nums2[n]) {
      nums1[m + n + 1] = nums1[m]
      m--
    } else if (nums1[m] < nums2[n]) {
      nums1[m + n + 1] = nums2[n]
      n--
    }
  }
};

var merge2 = function(nums1, m, nums2, n) {
  // Object.assign(nums1, [...nums1.slice(0, m), ...nums2].sort((a, b) => a - b))
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
}

const nums = [1,2,3,0,0,0]

// merge(nums, 3, [2,5,6], 3)

merge(nums, 3, [2,5,6], 3)

console.log('nums', nums)
