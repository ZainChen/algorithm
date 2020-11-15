/**
 * 任意两数和最大（一次遍历，纯净版。原理：最大值优先选更大值，第二大的值选最大值不要的或换下来的值(捡漏)）
 * @param {number[]} nums
 * @return {number} 最大值及合成最大值的两数下标
 */
function maxTwoSum4(nums) {
    let numsLength = nums.length;
    if (numsLength < 2) {
        console.log('数组长度需大于或等于2');
        return null;
    }
    // 记录最大值
    let maxNum1;
    // 记录第二大的值
    let maxNum2;
    [maxNum1, maxNum2] = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];
    for (let i = 2; i < numsLength; i++) {
        // 如果当前数大于记录的最大值
        if (nums[i] > maxNum1) {
            // 更新最大值之前，把最大值给第二个最大值，防止第二大的值丢失
            maxNum2 = maxNum1;
            maxNum1 = nums[i];
        } else if (nums[i] > maxNum2) {
            // 如果当前数比最大值小，看看是否要将当前数给第二大的值
            maxNum2 = nums[i];
        }
    }
    let maxSum = maxNum1 + maxNum2;
    return maxSum;
}
console.log(maxTwoSum4([3, 4, 11, 1, 15, -8, 99]));

/**
 * 任意两数和最大（一次遍历，记录了两个数下标。原理：最大值优先选更大值，第二大的值选最大值不要的或换下来的值(捡漏)）
 * @param {number[]} nums
 * @return {Object} 最大值及合成最大值的两数下标
 */
function maxTwoSum3(nums) {
    let numsLength = nums.length;
    if (numsLength < 2) {
        console.log('数组长度需大于或等于2');
        return null;
    }
    // 记录最大值
    let maxNum1 = {};
    // 记录第二大的值
    let maxNum2 = {};
    if (nums[0] > nums[1]) {
        maxNum1 = { value: nums[0], position: 0 }
        maxNum2 = { value: nums[1], position: 1 }
    } else {
        maxNum1 = { value: nums[1], position: 1 }
        maxNum2 = { value: nums[0], position: 0 }
    }
    for (let i = 2; i < numsLength; i++) {
        // 如果当前数大于记录的最大值，标记需要更新最大值
        if (nums[i] > maxNum1.value) {
            // 更新最大值之前，把最大值给第二个最大值，防止第二大的值丢失
            maxNum2.value = maxNum1.value;
            maxNum2.position = maxNum1.position;
            maxNum1.value = nums[i];
            maxNum1.position = i;
        } else {
            // 如果当前数比最大值小，看看是否要将当前数给第二大的值
            if (nums[i] > maxNum2.value) {
                maxNum2.value = nums[i];
                maxNum2.position = i;
            }
        }
    }
    let maxSumObj = {
        sum: maxNum1.value + maxNum2.value,
        position: [maxNum1.position, maxNum2.position]
    };
    return maxSumObj;
}
console.log(maxTwoSum3([3, 4, 11, 1, 15, -8]));

/**
 * 任意两数和最大（两次遍历数组，分别记录最大值）
 * @param {number[]} nums
 * @return {Object} 最大值及合成最大值的两数下标
 */
function maxTwoSum2(nums) {
    let numsLength = nums.length;
    if (numsLength < 2) {
        console.log('数组长度需大于或等于2');
        return null;
    }
    let maxNum1 = { value: nums[0], position: 0 }
    let maxNum2 = { value: nums[0], position: 0 }
    for(let i = 1; i < numsLength; i++) {
        if (nums[i] > maxNum1.value) {
            maxNum1.value = nums[i];
            maxNum1.position = i;
        }
    }
    for(let j = 0; j < numsLength; j++) {
        if (j !== maxNum1.position && nums[j] > maxNum2.value) {
            maxNum2.value = nums[j];
            maxNum2.position = j;
        }
    }
    let maxSumObj = {
        sum: maxNum1.value + maxNum2.value,
        position: [maxNum1.position, maxNum2.position]
    };
    return maxSumObj;
}
console.log(maxTwoSum2([8, 4, 11, 15, 8, -8]));


/**
 * 任意两数和最大（循环嵌套）
 * @param {number[]} nums
 * @return {Object} 最大值及合成最大值的两数下标
 */
function maxTwoSum1(nums) {
    let numsLength = nums.length;
    if (numsLength < 2) {
        console.log('数组长度需大于或等于2');
        return null;
    }
    let maxSumObj = {
        sum: nums[0] + nums[1],
        position: [0, 1]
    };
    for (let i = 0; i < numsLength; i++) {
        for (let j = 0; j < numsLength; j++) {
            if (i !== j && !(i === 0 && j === 1)) {
                let sum = nums[i] + nums[j];
                if (sum > maxSumObj.sum) {
                    maxSumObj.sum = sum;
                    maxSumObj.position = [i, j];
                }
            }
        }
    }
    return maxSumObj;
}
console.log(maxTwoSum1([8, 4, 11, 15, 8, -8]));
