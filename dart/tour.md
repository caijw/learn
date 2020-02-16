# tour

表达式: 有运行时值
语句: 没有运行时值

JIT + VM 运行：

```sh
dart main.dart
```

AOT + runtime 运行：

```sh
dart2aot main.dart main.dart.aot
dartaotruntime main.dart.aot
```

pub:

```sh
pub run xxx/xxx.dart arg1 arg2
```

开启assert:

```sh
dart --enable-asserts  lib/proj1.dart
```

词法作用域:

Dart 是一门词法作用域的编程语言，就意味着变量的作用域是固定的， 简单说变量的作用域在编写代码的时候就已经确定了。 花括号内的是变量可见的作用域。

词法闭包:

闭包 即一个函数对象，即使函数对象的调用在它原始作用域之外， 依然能够访问在它词法作用域内的变量。
