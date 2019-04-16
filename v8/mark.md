- v8::ArrayBuffer::Allocator
- Isolate::New(params)
- Local<Message>


Platform: 用来管理isolate，确定他是在后台线程还是前台线程运行，管理线程池等。

Isolate: 一个单独的v8引擎实例，Isolate有完全独立的状态，对象在isolate之间不能共享。我们可以创建多个isolate，然后再不同的线程中使用。isolate在一个时刻只能由一个线程执行，多线程时必须加锁保证同步。

v8::Isolate::Scope: Stack-allocated class which sets the isolate for all operations executed within a local scope. isolate的一个范围，从概念上说是用来给每个引擎设置一个单独执行的环境。该对象只能在栈上分配。


HandleScope: 管理本地Handle

Context: context是有自己内置的函数和对象的一个执行环境。这里context被handle管理了，handle被上面说的handlescope管理。为什么要有context呢，因为JavaScript是非常动态的，每个JavaScript代码执行的全局对象和默认环境都可能不一样，比如一个程序修改一个全局对象，那么如果没有context的抽象，所以得JavaScript都得执行在全局对象被修改的环境中了。

当你创建了一个context后，你可以使用它很多次，当你在contextA的时候，你可以进入contextB，意思就是context是一个嵌套结构或者说是一个栈结构，退出ciontextB的时候又恢复成contextA。

为什么要有handle呢，我们可以直接用指针持有context，原因是context中的对象和函数是由v8来管理的，而且v8可以移动他们，所以指针的地址会变，所以用handle来管理他们，增加了一层抽象，我们就不用管v8如何处理这些内存了。当handle释放的时候，v8可以自己帮我们销毁js对象。

Context::Scope: 进入Context