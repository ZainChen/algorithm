[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#title)
>- [Solution](#solution)
>    - [Method-1: Violence](#method-1)
>        - [code-cpp-1](#code-cpp-1)
>        - [code-js-1](#code-js-1)

# Title

>[directory](#directory)

1295.&nbsp;Find Numbers with Even Number of Digits

Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

```
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
```

Example 2:

```
Input: nums = [555,901,482,1771]
Output: 1
Explanation: 
Only 1771 contains an even number of digits.
 
```

Constraints:
- 1 <= nums.length <= 500
- 1 <= nums[i] <= 10^5

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
    int numberBit(int num) {
        int a = 1;
        while(num / 10) {
            a++;
            num /= 10;
        }
        return a;
    }

    int findNumbers(vector<int>& nums) {
        int a = 0;
        for(int i = 0; i < nums.size(); i++)
            if(numberBit(nums[i]) % 2 == 0)
                a++;
        return a;
    }
};

int main() {
    int a[] = {12, 345, 2, 6, 7896};
    vector<int> nums(begin(a), end(a));

    Solution solution;

    cout << solution.findNumbers(nums) << endl;

    system("pause");
}
```

#### code-js-1

>[directory](#directory) | [title](#title) | [analyze](#method-1) | [index-1.js](./index-1.js "index-1.js")

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let a = 0;
    for(let i = 0; i < nums.length; i++) {
        if((nums[i]).toString().length % 2 === 0) {
            a += 1;
        }
    }
    return a;
};

let sample1 = [12, 345, 2, 6, 7896];
let sample2 = [555,901,482,1771];

console.log('zain1>>>>>', findNumbers(sample1));
console.log('zain2>>>>>', findNumbers(sample2));
```
