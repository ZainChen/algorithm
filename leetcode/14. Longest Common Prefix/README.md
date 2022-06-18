[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#title)
>- [Solution](#solution)
>    - [Method-1: Violence](#method-1)
>        - [code-cpp-1](#code-cpp-1)
>        - [code-js-1](#code-js-1)

# Title

>[directory](#directory)

14.&nbsp;Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

```
Input: ["flower","flow","flight"]
Output: "fl"
```

Example 2:

```
Input: ["dog","racecar","car"]
Output: ""
```

Explanation: There is no common prefix among the input strings.

Note:

All given inputs are in lowercase letters a-z.

# Solution

## Method-1

>[directory](#directory) | [title](#title) | [C++](#code-cpp-1), [JavaScript](#code-js-1), [Python](#code-python2-1)

Violence

### Analyze

...

### Code

#### code-cpp-1

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```cpp
#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> vecReturn;
        int numsSize = nums.size();
        for(int i = 0; i < numsSize; i++) {
            for(int j = i+1; j < numsSize; j++) {
                if(nums[i]+nums[j] == target) {
                    vecReturn.push_back(i);
                    vecReturn.push_back(j);
                    return vecReturn;
                }
            }
        }
        return vecReturn;
    }
};

int main() {
    int target = 9;
    vector<int> nums;
    nums.push_back(2);
    nums.push_back(7);
    nums.push_back(11);
    nums.push_back(15);

    Solution solution;

    vector<int> vecOut = solution.twoSum(nums, target);

    for(int i = 0; i < vecOut.size(); i++) {
        cout << vecOut[i] << " ";
    }
    cout << endl;

    system("pause");
}
```

#### code-js-1

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [index-1.js](./index-1.js "index-1.js")

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a = [-1, -1];
    let l = nums.length;
    for(let i = 0; i < l; i++)
        for(let j = i+1; j < l; j++)
            if(nums[i]+nums[j] === target) {
                a[0] = i;
                a[1] = j;
                return a;
            }
    return a;
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
```
