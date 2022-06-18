#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string s = "";
        int k = 0;
        while(strs.size() > 0 && k < strs[0].size()) {
            char p = strs[0][k];
            bool t = true;
            for(int i = 1; i < strs.size(); i++) {
                if(!(k < strs[i].size() && strs[i][k] == p)) {
                    t = false;
                    break;
                }
            }
            if(t) {
                s += p;
            } else {
                break;
            }
            k++;
        }
        return s;
    }
};

int main() {
    string str[] = {"flower", "flow", "flight"};
    vector<string> strs(str, str+sizeof(str)/sizeof(str[0]));
    
    string str1[] = {"aca", "cba"};
    vector<string> strs1(str1, str1+sizeof(str1)/sizeof(str1[0]));

    Solution solution;

    string vecOut = solution.longestCommonPrefix(strs);
    cout << vecOut << endl;
    string vecOut1 = solution.longestCommonPrefix(strs1);
    cout << vecOut1 << endl;

    system("pause");
}