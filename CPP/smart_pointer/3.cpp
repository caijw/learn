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
	/*
	unique_ptr
	*/
	// unique_ptr<string> p3 ( new string ("auto") );
	// unique_ptr<string> p4;
	// p4 = p3;   

	unique_ptr<string> ps;
	ps = demo("Uniquely special");

	return 0;
}