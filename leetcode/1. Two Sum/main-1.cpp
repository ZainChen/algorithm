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