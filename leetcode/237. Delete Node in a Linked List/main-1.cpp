#include<iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        node->val = node->next->val;
        node->next = node->next->next;
    }
};

ListNode* createList(int* a, int n) {
    if(n < 1)
        return NULL;
    ListNode* list = new ListNode(a[0]);
    ListNode* p = list;
    for(int i = 1; i < n; i++) {
        ListNode* node = new ListNode(a[i]);
        p->next = node;
        p = p->next;
    }
    return list;
}

ListNode* findNode(ListNode* list, int val) {
    while(list) {
        if(list->val == val)
            return list;
        list = list->next;
    }
    return NULL;
}

void printList(ListNode* list) {
    while(list) {
        cout << list->val;
        if(list->next)
            cout << "->";
        list = list->next;
    }
    cout << endl;
}

int main() {
    int a[] = {4, 5, 1, 9};
    ListNode* list = createList(a, 4);
    printList(list);
    Solution().deleteNode(findNode(list, 5));
    printList(list);
    
    system("pause");
    return 0;
}
