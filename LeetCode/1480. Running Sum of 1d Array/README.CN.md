[Leetcode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)
>        - [code-python-1](#code-python-1)

# 标题

>[目录](#目录)

1480.&nbsp;一维数组的动态和

给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

请返回 nums 的动态和。

示例 1：
```
输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
```

示例 2：
```
输入：nums = [1,1,1,1,1]
输出：[1,2,3,4,5]
解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
```

示例 3：
```
输入：nums = [3,1,2,10,1]
输出：[3,4,6,16,17]
```

提示：
- 1 <= nums.length <= 1000
- -10^6 <= nums[i] <= 10^6

# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1), [C++](#code-cpp-1), [Python](#code-python-1)

[[[方法简介]]]

### 分析

[[[方法分析]]]

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法1) | [index-1.js](./index-1.js "index-1.js")

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

>[目录](#目录) | [标题](#标题) | [分析](#方法1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

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

>[目录](#目录) | [标题](#标题) | [分析](#方法1) | [python3-1.py](./python3-1.py "python3-1.py")

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
