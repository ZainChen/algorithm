[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-cpp-1](#code-cpp-1)

# Title

>[Directory](#Directory)

1431.&nbsp;Kids With the Greatest Number of Candies

<p>There are <code>n</code> kids with candies. You are given an integer array <code>candies</code>, where each <code>candies[i]</code> represents the number of candies the <code>i<sup>th</sup></code> kid has, and an integer <code>extraCandies</code>, denoting the number of extra candies that you have.</p>

<p>Return <em>a boolean array </em><code>result</code><em> of length </em><code>n</code><em>, where </em><code>result[i]</code><em> is </em><code>true</code><em> if, after giving the </em><code>i<sup>th</sup></code><em> kid all the </em><code>extraCandies</code><em>, they will have the <strong>greatest</strong> number of candies among all the kids</em><em>, or </em><code>false</code><em> otherwise</em>.</p>

<p>Note that <strong>multiple</strong> kids can have the <strong>greatest</strong> number of candies.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> candies = [2,3,5,1,3], extraCandies = 3
<strong>Output:</strong> [true,true,true,false,true] 
<strong>Explanation:</strong> If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> candies = [4,2,1,1,2], extraCandies = 1
<strong>Output:</strong> [true,false,false,false,false] 
<strong>Explanation:</strong> There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> candies = [12,1,12], extraCandies = 10
<strong>Output:</strong> [true,false,true]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == candies.length</code></li>
	<li><code>2 &lt;= n &lt;= 100</code></li>
	<li><code>1 &lt;= candies[i] &lt;= 100</code></li>
	<li><code>1 &lt;= extraCandies &lt;= 50</code></li>
</ul>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [C++](#code-cpp-1)

### Code

#### code-cpp-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [main-1.cpp](./main-1.cpp "main-1.cpp")

```C++
#include<iostream>
#include<vector>
#include<map>
using namespace std;

class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int max = 0;
        int candiesSize = candies.size();
        for(int i = 0; i < candiesSize; i++) {
            if(candies[i] > max) {
                max = candies[i];
            }
        }
        vector<bool> result;
        for(int i = 0; i < candiesSize; i++) {
            if(candies[i]+extraCandies >= max) {
                result.push_back(true);
            } else {
                result.push_back(false);
            }
        }
        return result;
    }
};

/**
 * 输出 bool 类型的容器
 */
void printfVectorBool(vector<bool> result) {
    map<bool, string> boolString = {{true, "true"}, {false, "false"}};
    string s = "[";
    for(int i = 0; i < result.size(); i++) {
        s += boolString[result[i]];
        if(i < result.size() - 1) {
            s += ",";
        }
    }
    s += "]\n";
    cout << s;
}

int main() {
    int a[] = {2, 3, 5, 1, 3};
    vector<int> candies(begin(a), end(a));
    int extraCandies = 3;

    Solution solution;

    vector<bool> result = solution.kidsWithCandies(candies, extraCandies);
    printfVectorBool(result);

    system("pause");
}
```

