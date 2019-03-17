# smart pointer

## auto_ptr

### unique_ptr为何优于auto_ptr:

```c++
	auto_ptr<string> p1( new string ("auto") );
	auto_ptr<string> p2;
	p2 = p1;
```

p2接管string对象的所有权后，p1的所有权将被剥夺。前面说过，这是好事，可防止p1和p2的析构函数试图刪同—个对象；

但如果程序随后试图使用p1，这将是件坏事，因为p1不再指向有效的数据。

## unique_ptr

```c++
	unique_ptr<string> p3 ( new string ("auto") );
	unique_ptr<string> p4;
	p4 = p3; 
```

避免了p3不再指向有效数据的问题。因此，unique_ptr比auto_ptr更安全。

```c++

	unique_ptr<string> demo(const char * s){
		unique_ptr<string> temp (new string (s));
	    return temp;
	}

	unique_ptr<string> ps;
	ps = demo("Uniquely special");

```

有时候，会将一个智能指针赋给另一个并不会留下危险的悬挂指针。

demo()返回一个临时unique_ptr，然后ps接管了原本归返回的unique_ptr所有的对象，而返回时临时的 unique_ptr 被销毁，也就是说没有机会使用 unique_ptr 来访问无效的数据，换句话来说，这种赋值是不会出现任何问题的，即没有理由禁止这种赋值。实际上，编译器确实允许这种赋值，这正是unique_ptr更聪明的地方。

当程序试图将一个 unique_ptr 赋值给另一个时，如果源 unique_ptr 是个临时右值，编译器允许这么做；如果源 unique_ptr 将存在一段时间，编译器将禁止这么做，比如：

```c++
	unique_ptr<string> pu1(new string ("hello world"));
	unique_ptr<string> pu2;
	pu2 = pu1;                                      // #1 not allowed
	unique_ptr<string> pu3;
	pu3 = unique_ptr<string>(new string ("You"));   // #2 allowed
```

其中#1留下悬挂的unique_ptr(pu1)，这可能导致危害。而#2不会留下悬挂的unique_ptr，因为它调用 unique_ptr 的构造函数，该构造函数创建的临时对象在其所有权让给 pu3 后就会被销毁。这种随情况而已的行为表明，unique_ptr 优于允许两种赋值的auto_ptr 。

当然，您可能确实想执行类似于#1的操作，仅当以非智能的方式使用摒弃的智能指针时（如解除引用时），这种赋值才不安全。要安全的重用这种指针，可给它赋新值。C++有一个标准库函数std::move()，让你能够将一个unique_ptr赋给另一个。下面是一个使用前述demo()函数的例子，该函数返回一个unique_ptr<string>对象：
使用move后，原来的指针仍转让所有权变成空指针，可以对其重新赋值。

```c++
	unique_ptr<string> ps1, ps2;
	ps1 = demo("hello");
	ps2 = move(ps1);
	ps1 = demo("alexia");
	cout << *ps2 << *ps1 << endl;

```