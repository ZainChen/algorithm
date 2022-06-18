/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let n = 0;
    // let s = [];
    for(let x = 0; x < nums.length; x++) {
        let t = [];
        for(let y = 0; y < nums.length; y++) {
            if(x > y) {
                t.push('*');
            } else if(y > x) {
                let a = t[y-1]+nums[y];
                t.push(a);
                if(a === k) {
                    n += 1;
                }
            } else {
                t.push(nums[y])
                if(nums[y] === k) {
                    n += 1;
                }
            }
        }
        // s.push(t);
    }
    // console.table(s);
    return n;
};

console.log('zain1>>>>>', subarraySum([1,1,1], 2));
console.log('zain2>>>>>', subarraySum([1, 2, 5, 4, 3], 3));
console.log('zain3>>>>>', subarraySum([1, 2, 5, 4, 3], 15));
console.log('zain4>>>>>', subarraySum([100, 1, 2, 3, 4], 3));
