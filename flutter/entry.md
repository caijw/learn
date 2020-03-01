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

mixin GestureBinding on BindingBase {
  static GestureBinding get instance => _instance;
  static GestureBinding _instance;
  @override
  void initInstances() {
    print('[GestureBinding]initInstances');
    super.initInstances();
    _instance = this;
  }
}

mixin ServicesBinding on BindingBase {
  static ServicesBinding get instance => _instance;
  static ServicesBinding _instance;
  @override
  void initInstances() {
    print('[ServicesBinding]initInstances');
    super.initInstances();
    _instance = this;
  }
}

mixin SchedulerBinding on BindingBase, ServicesBinding {
  static SchedulerBinding get instance => _instance;
  static SchedulerBinding _instance;
  @override
  void initInstances() {
    print('[SchedulerBinding]initInstances');
    super.initInstances();
    _instance = this;
  }
}

mixin PaintingBinding on BindingBase, ServicesBinding {
  static PaintingBinding get instance => _instance;
  static PaintingBinding _instance;
  @override
  void initInstances() {
    print('[PaintingBinding]initInstances');
    super.initInstances();
    _instance = this;
  }
}

mixin SemanticsBinding on BindingBase {
  static SemanticsBinding get instance => _instance;
  static SemanticsBinding _instance;
  @override
  void initInstances() {
    print('[SemanticsBinding]initInstances');
    super.initInstances();
    _instance = this;
  }
}

mixin RendererBinding
    on
        BindingBase,
        ServicesBinding,
        SchedulerBinding,
        GestureBinding,
        SemanticsBinding {
  static RendererBinding get instance => _instance;
  static RendererBinding _instance;
  @override
  void initInstances() {
    print('[RendererBinding]initInstances');
    super.initInstances();
    _instance = this;
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

class WidgetsFlutterBinding extends BindingBase
    with
        GestureBinding,
        ServicesBinding,
        SchedulerBinding,
        PaintingBinding,
        SemanticsBinding,
        RendererBinding,
        WidgetsBinding {
  static WidgetsBinding ensureInitialized() {
    print('[WidgetsFlutterBinding]ensureInitialized');
    if (WidgetsBinding.instance == null) {
      WidgetsFlutterBinding();
    }
    return WidgetsBinding.instance;
  }
}

main() {
  WidgetsFlutterBinding.ensureInitialized();
}

```

输出:

```shell
[WidgetsFlutterBinding]ensureInitialized
[BindingBase]BindingBase
[WidgetsBinding]initInstances
[RendererBinding]initInstances
[SemanticsBinding]initInstances
[PaintingBinding]initInstances
[SchedulerBinding]initInstances
[ServicesBinding]initInstances
[GestureBinding]initInstances
[BindingBase]initInstances
[BindingBase]initServiceExtensions
```

需要注意这里的初始化调用顺序！！！

`WidgetsFlutterBinding`的`ensureInitialized`返回会调用`WidgetsFlutterBinding`构造函数，`WidgetsFlutterBinding`构造函数默认会调用父类`BindingBase`的构造函数，`BindingBase`构造函数会调用`initInstances`方法，在当前作用域，调用的是`WidgetsFlutterBinding`的`initInstances`方法，由于继承和`mixin`，调用的是`WidgetsBinding`的`initInstances`，`WidgetsBinding`的`initInstances`还会调用`super.initInstances`，这时候会调用到`RendererBinding`的`initInstances`，以此类推。

因为保证了每个类的`initInstances`方法都会调用父类的`initInstances`（`super.initInstances()`），所以出现了`initInstances`的调用链。
