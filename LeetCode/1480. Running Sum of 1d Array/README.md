[Leetcode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)
>        - [code-python-1](#code-python-1)

# Title

>[Directory](#Directory)

1480.&nbsp;Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:
```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

Example 2:
```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

Example 3:
```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

Constraints:
- 1 <= nums.length <= 1000
- -10^6 <= nums[i] <= 10^6

# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1), [C++](#code-cpp-1), [Python](#code-python-1)

[[[Method Introduction]]]

### Analyze

[[[Method analysis]]]

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let k = 0;
    let result = [];
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
```

#### code-cpp-1

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```C++
#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int k = 0;
        vector<int> result;
        for(int i = 0; i < nums.size(); i++) {
            k += nums[i];
            result.push_back(k);
        }
        return result;
    }
};

int main() {
    vector<int> nums;
    nums.push_back(1);
    nums.push_back(2);
    nums.push_back(3);
    nums.push_back(4);

    Solution solution;

    vector<int> vecOut = solution.runningSum(nums);

    for(int i = 0; i < vecOut.size(); i++) {
        cout << vecOut[i] << " ";
    }
    cout << endl;

    system("pause");
}
```

#### code-python-1

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method1) | [python3-1.py](./python3-1.py "python3-1.py")

```Python
class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        k = 0
        result = []
        for i in nums:
            k += i
            result.append(k)
        return result

if __name__ == '__main__':
    nums = [1, 2, 3, 4]
    solution = Solution()
    result = solution.runningSum(nums)
    print(result)
```
