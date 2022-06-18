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