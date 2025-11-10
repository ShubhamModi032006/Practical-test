#include<iostream>
using namespace std;

class Node{
    public:
    int num;
    Node* next;
    Node(int num){
        this->num = num;
        next = nullptr;
    }
};

void insertatstart(Node* &head,int num){
    Node* newNode = new Node(num);
    if(head == nullptr){
        head = newNode;
        return;
    }
    newNode->next = head;
    head = newNode;
    return;
}

void display(Node* head){
    Node* temp = head;
    while(temp != nullptr){
        cout<<temp->num<<" ";
        temp = temp->next;
    }
    cout<<endl;
}


int main(){
    Node* head = nullptr;
    insertatstart(head,10);
    insertatstart(head,20);
    insertatstart(head,30);
    display(head);
    return 0;
}