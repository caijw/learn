- v8::ArrayBuffer::Allocator
- Isolate::New(params)
- Local<Message>



v8::Isolate:

Isolate represents an isolated instance of the V8 engine. V8 isolates have completely separate states. Objects from one isolate must not be used in other isolates. The embedder can create multiple isolates and use them in parallel in multiple threads. An isolate can be entered by at most one thread at any given time. The Locker/Unlocker API must be used to synchronize.


Isolate::Scope: 

Stack-allocated class which sets the isolate for all operations executed within a local scope.

只能在栈上分配的类，声明了一个作用域，这个作用域从scope对象声明到scope对象被销毁，该作用域内的所有操作都是在该isolate中进行的。

v8::HandleScope:

A stack-allocated class that governs a number of local handles. After a handle scope has been created, all local handles will be allocated within that handle scope until either the handle scope is deleted or another handle scope is created. If there is already a handle scope and a new one is created, all allocations will take place in the new handle scope until it is deleted. After that, new handles will again be allocated in the original handle scope.

After the handle scope of a local handle has been deleted the garbage collector will no longer track the object stored in the handle and may deallocate it. The behavior of accessing a handle for which the handle scope has been deleted is undefined.

v8::Local:

An object reference managed by the v8 garbage collector.

All objects returned from v8 have to be tracked by the garbage collector so that it knows that the objects are still alive. Also, because the garbage collector may move objects, it is unsafe to point directly to an object. Instead, all objects are stored in handles which are known by the garbage collector and updated whenever an object moves. Handles should always be passed by value (except in cases like out-parameters) and they should never be allocated on the heap.

There are two types of handles: local and persistent handles.

Local handles are light-weight and transient and typically used in local operations. They are managed by HandleScopes. That means that a HandleScope must exist on the stack when they are created and that they are only valid inside of the HandleScope active during their creation. For passing a local handle to an outer HandleScope, an EscapableHandleScope and its Escape() method must be used.

Persistent handles can be used when storing objects across several independent operations and have to be explicitly deallocated when they're no longer used.

It is safe to extract the object stored in the handle by dereferencing the handle (for instance, to extract the Object* from a Local<Object>); the value will still be governed by a handle behind the scenes and the same rules apply to these values as to their handles.



v8::Context:

A sandboxed execution context with its own set of built-in objects and functions.

v8::Context::Scope:

Stack-allocated class which sets the execution context for all operations executed within a local scope.
