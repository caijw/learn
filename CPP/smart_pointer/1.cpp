#include <iostream>
#include <string>
#include <memory>

class report
{
private:
    std::string str;
public:
 report(const std::string s) : str(s) {
  std::cout << "Object created.\n";
 }
 ~report() {
  std::cout << "Object deleted.\n";
 }
 void comment() const {
  std::cout << str << "\n";
 }
};

int main() {
 {
  std::auto_ptr<report> ps(new report("using auto ptr"));
  ps->comment();
 }

 {
  std::shared_ptr<report> ps(new report("using shared ptr"));
  ps->comment();
 }

 {
  std::unique_ptr<report> ps(new report("using unique ptr"));
  ps->comment();
 }
 return 0;
}