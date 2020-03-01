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
