# entry

## `WidgetsFlutterBinding`初始化

```dart
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
      // WidgetsFlutterBinding 构造函数，先调用父类构造函数
      // BindingBase，BindingBase 会调用 initInstances ，当前
      // 上下文会调用 WidgetsBinding 的 initInstances 方法，
      // WidgetsBinding 的 initInstances 又会调用 父类(BindingBase)
      // 的 initInstances 方法
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
```

输出:

```shell
[WidgetsFlutterBinding]ensureInitialized
[BindingBase]BindingBase
[WidgetsBinding]initInstances
[BindingBase]initInstances
[BindingBase]initServiceExtensions
```

需要注意这里的初始化调用顺序！！！
