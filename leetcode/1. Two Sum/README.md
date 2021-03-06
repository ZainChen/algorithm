[Leetcode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1: Violence](#Method1)
>        - [code-js-1](#code-js-1)
>        - [code-cpp-1](#code-cpp-1)
>        - [code-python-1](#code-python-1)
>    - [Method2: Two-pass hash table](#Method2)
>        - [code-js-2](#code-js-2)
>        - [code-cpp-2](#code-cpp-2)
>    - [Method3: Once hash table](#Method3)
>        - [code-js-3](#code-js-3)
>        - [code-cpp-3](#code-cpp-3)

# Title

>[Directory](#Directory)

1.&nbsp;Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [Javascript](#code-js-1), [C++](#code-cpp-1), [Python](#code-python-1)

Violence

### Analyze

...

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method1) | [index-1.js](./index-1.js "index-1.js")

```Javascript
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
#### code-cpp-1

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```C++
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
#### code-python-1

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method1) | [python2-1.py](./python2-1.py "python2-1.py")

```Python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        l = len(nums)
        for i in range(l-1):
            for j in range(i+1, l):
                if nums[i]+nums[j] == target:
                    return [i, j]

if __name__ == '__main__':
    nums = [2, 7, 11, 15]
    target = 9
    solution = Solution()
    result = solution.twoSum(nums, target)
    print(result)

```
## Method2

>[Directory](#Directory) | [Title](#Title) | [Javascript](#code-js-2), [C++](#code-cpp-2)

Two-pass hash table

### Analyze

Use the map subscript

### Code

#### code-js-2

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method2) | [index-2.js](./index-2.js "index-2.js")

```Javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a = [-1, -1];
    let b = new Object();
    let l = nums.length;
    for(let i = 0; i < l; i++)
        b[nums[i]] = i;
    for(let i = 0; i < l; i++)
        if(typeof b[target-nums[i]] !== "undefined" && b[target-nums[i]] != i) {
            a[0] = i;
            a[1] = b[target-nums[i]];
            return a;
        }
    return a;
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
```
#### code-cpp-2

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method2) | [main-2.cpp](./main-2.cpp "main-2.cpp")

```C++
#include<iostream>
#include<vector>
#include<map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> vecReturn;
        int numsSize = nums.size();
        map<int, int> mapNum;
        for(int i = 0; i < numsSize; i++)
            mapNum[nums[i]] = i;
        for(int i = 0; i < numsSize; i++) {
            if(mapNum.count(target-nums[i]) && mapNum[target-nums[i]] != i) {
                vecReturn.push_back(i);
                vecReturn.push_back(mapNum[target-nums[i]]);
                return vecReturn;
            }
        }
        return vecReturn;
    }
};

int main() {
    int target = -8;
    vector<int> nums;
    nums.push_back(-1);
    nums.push_back(-2);
    nums.push_back(-3);
    nums.push_back(-4);
    nums.push_back(-5);

    Solution solution;

    vector<int> vecOut = solution.twoSum(nums, target);

    for(int i = 0; i < vecOut.size(); i++) {
        cout << vecOut[i] << " ";
    }
    cout << endl;

    system("pause");
}
```
## Method3

>[Directory](#Directory) | [Title](#Title) | [Javascript](#code-js-3), [C++](#code-cpp-3)

Once hash table

### Analyze

Use the map subscript.

### Code

#### code-js-3

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method3) | [index-3.js](./index-3.js "index-3.js")

```Javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a = [-1, -1];
    let b = new Object();
    for(let i = 0; i < nums.length; i++) {
        if(typeof b[target-nums[i]] !== "undefined") {
            a[0] = b[target-nums[i]];
            a[1] = i;
            return a;
        }
        b[nums[i]] = i;
    }
    return a;
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
```
#### code-cpp-3

>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method3) | [main-3.cpp](./main-3.cpp "main-3.cpp")

```C++
#include<iostream>
#include<vector>
#include<map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> a(2, -1);
        map<int, int> b;
        for(int i = 0; i < nums.size(); i++) {
            if(b.count(target-nums[i])) {  //判断 map 中是否存在 target-nums[i] 的对应值
                a[0] = b[target-nums[i]];
                a[1] = i;
                return a;
            }
            b[nums[i]] = i;
        }
        return a;
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
