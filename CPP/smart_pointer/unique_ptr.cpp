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
	unique_ptr
	*/
	// unique_ptr<string> p3 ( new string ("auto") );
	// unique_ptr<string> p4;
	// p4 = p3;   

	unique_ptr<string> ps;
	ps = demo("Uniquely special");


	unique_ptr<string> pu1(new string ("hello world"));
	unique_ptr<string> pu2;
	// pu2 = pu1;                                      // #1 not allowed
	unique_ptr<string> pu3;
	pu3 = unique_ptr<string>(new string ("You"));   // #2 allowed


	unique_ptr<string> ps1, ps2;
	ps1 = demo("hello");
	ps2 = move(ps1);
	ps1 = demo("alexia");
	cout << *ps2 << *ps1 << endl;

	return 0;
}