#include <iostream>
#include <string>
#include <memory>

using namespace std;


unique_ptr<string> demo(const char * s){
	unique_ptr<string> temp (new string (s));
    return temp;
}

int main(){
	/*
	auto_ptr
	*/
	auto_ptr<string> p1( new string ("auto") );
	auto_ptr<string> p2;
	p2 = p1;
	return 0;
}