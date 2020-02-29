// 定义一个函数
printInteger(int aNumber) {
  print('The number is $aNumber.'); // 打印到控制台。
}
// mixin A 只能用在 B 上面
mixin A on B {
  void fun() {
    print('A fun');
  }
}

class B {
  void fun() {
    print('B fun');
  }
}

class C with A {
  void fun1() {
    fun();
  }
}

// 应用从这里开始执行。
main() {
  C c = C();
  c.fun1();
}