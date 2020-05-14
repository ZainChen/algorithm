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