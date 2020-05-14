#include<iostream>
using namespace std;

class Solution {
public:
    string defangIPaddr(string address) {
        string s = "";
        for (int i = 0; i < address.size(); i++) {
            string t(1, address[i]);
            s += t == "." ? "[.]" : t;
        }
        return s;
    }
};

int main() {
    string str = "1.1.1.1";
    string str1 = "255.100.50.0";

    Solution solution;

    string sOut = solution.defangIPaddr(str);
    cout << sOut << endl;
    string sOut1 = solution.defangIPaddr(str1);
    cout << sOut1 << endl;

    system("pause");
}