// 定义一个函数
printInteger(int aNumber) {
  print('The number is $aNumber.'); // 打印到控制台。
}

class B {
  void fun1() {
    // fun();
  }
}

// 只有某些类型可以mix in A，这些类型是B的子类
mixin A on B {
  void fun() {
    fun1();
  }
}

class C with B, A {

}

// class C with A {
//   void fun1() {
//     fun();
//   }
// }

// 应用从这里开始执行。
main() {

}