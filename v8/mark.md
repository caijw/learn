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

v8::External:

A JavaScript value that wraps a C++ void\*. This type of value is mainly used to associate C++ data structures with JavaScript objects.

handle提供了c++访问js对象的能力，external提供了js访问c++对象的能力。

external把一个c++对象作为void\*类型保存起来。

The external object is simply a wrapper around a void\*. External objects can only be used to store reference values in internal fields. JavaScript objects can not have references to C++ objects directly so the external value is used as a "bridge" to go from JavaScript into C++. In that sense external values are the opposite of handles since handles lets C++ make references to JavaScript objects.


Templates:

A template is a blueprint for JavaScript functions and objects in a context. You can use a template to wrap C++ functions and data structures within JavaScript objects so that they can be manipulated by JavaScript scripts. For example, Google Chrome uses templates to wrap C++ DOM nodes as JavaScript objects and to install functions in the global namespace. You can create a set of templates and then use the same ones for every new context you make. You can have as many templates as you require. However you can only have one instance of any template in any given context.

In JavaScript there is a strong duality between functions and objects. To create a new type of object in Java or C++ you would typically define a new class. In JavaScript you create a new function instead, and create instances using the function as a constructor. The layout and functionality of a JavaScript object is closely tied to the function that constructed it. This is reflected in the way V8 templates work. There are two types of templates: Function templates , Object templates

templates提供了js操作和访问c++函数和数据结构的能力。

v8::ObjectTemplate:

Each function template has an associated object template. This is used to configure objects created with this function as their constructor. You can associate two types of C++ callbacks with object templates:

- accessor callbacks are invoked when a specific object property is accessed by a script
- interceptor callbacks are invoked when any object property is accessed by a script

v8::FunctionTemplate:

A function template is the blueprint for a single function. You create a JavaScript instance of the template by calling the template’s GetFunction method from within the context in which you wish to instantiate the JavaScript function. You can also associate a C++ callback with a function template which is called when the JavaScript function instance is invoked.


