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