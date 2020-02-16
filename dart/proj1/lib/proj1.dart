import 'dart:async';
import 'dart:io';

class Parent {
  void test() {
    print("parent");
  }
}

class Child extends Parent {
  @override
  void test() {
    print("child");
  }

  @override
  void noSuchMethod(Invocation invocation) {
    print("noSuchMethod");
    return super.noSuchMethod(invocation);
  }
}

//BindingBase
abstract class BindingBase {
  void initInstances() {
    print("BindingBase——initInstances");
  }
}

//GestureBinding
mixin GestureBinding on BindingBase {
  @override
  void initInstances() {
    print("GestureBinding——initInstances");
    super.initInstances();
  }
}
//RendererBinding
mixin RendererBinding on BindingBase {
  @override
  void initInstances() {
    print("RendererBinding——initInstances");
    super.initInstances();
  }
}
// WidgetsBinding
mixin WidgetsBinding on BindingBase {
  @override
  void initInstances() {
    print("WidgetsBinding——initInstances");
    super.initInstances();
  }
}

//WidgetsFlutterBinding
class WidgetsFlutterBinding extends BindingBase
    with GestureBinding, RendererBinding, WidgetsBinding {}

// void main() {
//   test();
// }

// test() async {
//   // 使用 periodic 创建流，第一个参数为间隔时间，第二个参数为回调函数
//   Stream<int> stream = Stream<int>.periodic(Duration(seconds: 1), callback);
//   // await for循环从流中读取
//   await for (var i in stream) {
//     print(i);
//   }
// }

// // 可以在回调函数中对值进行处理，这里直接返回了
// int callback(int value) {
//   return value;
// }

// void main() {
//   test();
// }

// test() async {
//   print("test start");
//   Future<String> fut = Future(() {
//     return "async task";
//   });

//   // 从Future创建Stream
//   Stream<String> stream = Stream<String>.fromFuture(fut);
//   await for (var s in stream) {
//     print(s);
//   }
//   print("test end");
// }

// void main() {
//   test();
// }

// test() async {
//   print("test start");
//   Future<String> fut1 = Future(() {
//     // 模拟耗时5秒
//     sleep(Duration(seconds: 10));
//     return "async task1";
//   });
//   Future<String> fut2 = Future(() {
//     return "async task2";
//   });

//   // 将多个Future放入一个列表中，将该列表传入
//   Stream<String> stream = Stream<String>.fromFutures([fut1, fut2]);
//   await for (var s in stream) {
//     print(s);
//   }
//   print("test end");
// }

// void main() {
//   test();
// }

// test() async{
//   // 创建
//   StreamController streamController = StreamController();
//   // 放入事件
//   streamController.add('element_1');
//   streamController.addError("this is error");
//   streamController.sink.add('element_2');
//   streamController.stream.listen(
//     print,
//   onError: print,
//   onDone: ()=>print("onDone"));
// }

// void main() {
//   test();
// }

// test() async{
//   // 创建
//   StreamController sc = StreamController(
//     onListen: ()=>print("onListen"),
//     onPause: ()=>print("onPause"),
//     onResume: ()=>print("onResume"),
//     onCancel: ()=>print("onCancel"),
//     sync:false
//   );

//   StreamSubscription ss = sc.stream.listen(print);

//   sc.add('element_1');

//   // 暂停
//   ss.pause();
//   // 恢复
//   ss.resume();
//   // 取消
//   ss.cancel();

//   // 关闭流
//   sc.close();
// }

// class SortedCollection {
//   Function compare;

//   SortedCollection(int f(Object a, Object b)) {
//     compare = f;
//   }
// }

// // Initial, broken implementation. // broken ？
// int sort(Object a, Object b) => 0;

// void main() {
//   SortedCollection coll = SortedCollection(sort);

//   // 虽然知道 compare 是函数，
//   // 但是函数是什么类型 ？
//   print(coll.compare is Function);
//   // assert();
// }

// typedef Compare = int Function(Object a, Object b);

// class SortedCollection {
//   Compare compare;

//   SortedCollection(this.compare);
// }

// // Initial, broken implementation.
// int sort(Object a, Object b) => 0;


// void main() {
//   SortedCollection coll = SortedCollection(sort);
//   print(coll.compare is Function);
//   print(coll.compare is Compare);
// }

class Food {
  
}

class Activity {
  
}

/// A domesticated South American camelid (Lama glama).
///
/// 自从西班牙时代以来，
/// 安第斯文化就将骆驼当做肉食类和运输类动物。
class Llama {
  String name;

  /// 喂养骆驼 [Food].
  ///
  /// 典型的美洲驼每周吃一捆干草。
  void feed(Food food) {
    // ...
  }

  /// 使用 [Activity] 训练骆驼
  /// [timeLimit] 分钟。
  void exercise(Activity activity, int timeLimit) {
    // ...
  }
}

// main(List<String> args) {
//   var it = naturalsTo(5).iterator;
//   while(it.moveNext()) {
//     print(it.current);
//   }
// }

// Iterable<int> naturalsTo(int n) sync* {
//   print('start');
//   int k = 0;
//   while (k < n) {
//     yield k++;
//   }
//   print('end');
// }

// main(List<String> args) {
//   // 流监听
//   // asynchronousNaturalsTo(5).listen((onData) {
//   //   print(onData);
//   // });

//   // 流监听 StreamSubscription 对象
//   StreamSubscription subscription = asynchronousNaturalsTo(5).listen(null);
//   subscription.onData((value) {
//     print(value);
//     // subscription.pause();
//   });
// }

// Stream<int> asynchronousNaturalsTo(int n) async* {
//   print('start');
//   int k = 0;
//   while (k < n) {
//     yield k++;
//   }
//   print('end');
// }

// main(List<String> args) {
//   var it = naturalsDownFrom(5).iterator;
//   while(it.moveNext()) {
//     print(it.current);
//   }
// }

// Iterable<int> naturalsDownFrom(int n) sync* {
//   if ( n > 0) {
//     yield n;
//     yield* naturalsDownFrom(n-1);
//   }
// }

class A {
  int data;
  A(this.data);
}
void change(A a) {
  a.data = a.data + 1;
}

void main () {
  var a = A(10);
  print(a.data);
  change(a);
  print(a.data);
}