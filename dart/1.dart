// 定义一个函数
printInteger(int aNumber) {
  print('The number is $aNumber.'); // 打印到控制台。
}

class B {
  void fun1() {
    print('B fun1');
  }
}

// 只有某些类型可以mix in A，这些类型是B的子类/A是B的子类
mixin A on B {
  void fun() {
    super.fun1();
  }
}

class C with B, A {}

abstract class BindingBase {
  void initInstances() {
    print('[BindingBase]initInstances');
  }
  void initServiceExtensions() {
    print('[BindingBase]initServiceExtensions');
  }
  BindingBase() {
    print('[BindingBase]BindingBase');
    initInstances();
    initServiceExtensions();
  }
}

mixin WidgetsBinding on BindingBase {
  static WidgetsBinding get instance => _instance;
  static WidgetsBinding _instance;
  @override
  void initInstances() {
    print('[WidgetsBinding]initInstances');
    super.initInstances();
    _instance = this;
  }
}

class WidgetsFlutterBinding extends BindingBase with WidgetsBinding {
  static WidgetsBinding ensureInitialized() {
    print('[WidgetsFlutterBinding]ensureInitialized');
    if (WidgetsBinding.instance == null) {
      WidgetsFlutterBinding();
    }
    return WidgetsBinding.instance;
  }
}

// 应用从这里开始执行。
main() {
  // C().fun();
  WidgetsFlutterBinding.ensureInitialized();
}
