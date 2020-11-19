function runningSum(nums: number[]): number[] {
    let k: number = 0;
    let result: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        k += nums[i];
        result.push(k);
    }
    return result;
};

/**
 * 控制台打印数组（字符串形式）
 * @param {number[]} array
 * @return {number[]}
 */
function consoleArray(array) {
    let str = '[';
    for (let i = 0; i < array.length; i++) {
        str += array[i].toString();
        if (i < array.length - 1) {
            str += ',';
        }
    }
    str += ']';
    console.log(str);
}

consoleArray(runningSum([1,2,3,4]));
consoleArray(runningSum([1,1,1,1,1]));
consoleArray(runningSum([3,1,2,10,1]));