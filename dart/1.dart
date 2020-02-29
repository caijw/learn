// 定义一个函数
printInteger(int aNumber) {
  print('The number is $aNumber.'); // 打印到控制台。
}

class B  {
  void fun1() {
    // fun();
  }
}


// mixin A 只能用在 B 上面
mixin A on B {
  void fun() {
    fun1();
  }
}

// class C with A {
//   void fun1() {
//     fun();
//   }
// }

// 应用从这里开始执行。
main() {

}