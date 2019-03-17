# smart pointer

智能指针是一个RAII（Resource Acquisition is initialization）类模型，用来动态的分配内存。它提供所有普通指针提供的接口，却很少发生异常。在构造中，它分配内存，当离开作用域时，它会自动释放已分配的内存。这样的话，程序员就从手动管理动态内存的繁杂任务中解放出来了。

## auto_ptr

### 缺点1

auto_ptr还是足够智能的，但是它还是有一些根本性的破绽的。当把一个auto_ptr赋给另外一个auto_ptr时，它的所有权(ownship)也转移了。当我在函数间传递auto_ptr时，这就是一个问题。话说，我在Foo()中有一个auto_ptr，然后在Foo()中我把指针传递给了Fun()函数，当Fun()函数执行完毕时，指针的所有权不会再返还给Foo。

```c++
class Test
{
public:
 Test(int a = 0 ) : m_a(a)
 {
 }
 ~Test( )
 {
  cout<<"Calling destructor"<<endl;
 }
public:
 int m_a;
};
//***************************************************************
void Fun(auto_ptr<Test> p1 )
{
 cout<<p1->m_a<<endl;
}
//***************************************************************
void main( )
{
 std::auto_ptr<Test> p( new Test(5) ); 
 Fun(p);
 cout<<p->m_a<<endl;
} 
```

由于auto_ptr的野指针行为，上面的代码导致程序崩溃。在这期间发生了这些细节，p拥有一块内存，当Fun调用时， p把关联的内存块的所有权传给了auto_ptr p1, p1是p的copy（注：这里从Fun函数的定义式看出，函数参数时值传递，所以把p的值拷进了函数中），这时p1就拥有了之前p拥有的内存块。目前为止，一切安好。现在Fun函数执行完了，p1离开了作用域，所以p1关联的内存块也就释放了。那么p呢？p什么都没了，这就是crash的原因了，下一行代码还试图访问p，好像p还拥有什么资源似的。

### 缺点2

还有另外一个缺点。auto_ptr不能指向一组对象，就是说它不能和操作符new[]一起使用。

```c++
void main( )
{
 std::auto_ptr<Test> p(new Test[5]);
}
```

上面的代码将产生一个运行时错误。因为当auto_ptr离开作用域时，delete被默认用来释放关联的内存空间。当auto_ptr只指向一个对象时，这当然是没问题的，但是在上面的代码里，我们在堆里创建了一组对象，应该使用delete[]来释放，而不是delete.

### 缺点3

auto_ptr不能和标准容器（vector,list,map....)一起使用。

因为auto_ptr容易产生错误，所以它也将被废弃了。C++11提供了一组新的智能指针，每一个都各有用武之地。

## [uinque_ptr](http://www.cplusplus.com/reference/memory/unique_ptr/)

unique_ptr,是用于取代c++98的auto_ptr的产物,在c++98的时候还没有移动语义(move semantics)的支持,因此对于auto_ptr的控制权转移的实现没有核心元素的支持,但是还是实现了auto_ptr的移动语义,这样带来的一些问题是拷贝构造函数和复制操作重载函数不够完美,具体体现就是把auto_ptr作为函数参数,传进去的时候控制权转移,转移到函数参数,当函数返回的时候并没有一个控制权移交的过程,所以过了函数调用则原先的auto_ptr已经失效了.在c++11当中有了移动语义,使用move()把unique_ptr传入函数,这样你就知道原先的unique_ptr已经失效了.移动语义本身就说明了这样的问题,比较坑爹的是标准描述是说对于move之后使用原来的内容是未定义行为,并非抛出异常,所以还是要靠人肉遵守游戏规则.再一个,auto_ptr不支持传入deleter,所以只能支持单对象(delete object),而unique_ptr对数组类型有偏特化重载,并且还做了相应的优化,比如用[]访问相应元素等.

unique_ptr 是一个独享所有权的智能指针，它提供了严格意义上的所有权，包括：

1. 拥有它指向的对象
2. 无法进行复制构造，无法进行复制赋值操作。即无法使两个unique_ptr指向同一个对象。但是可以进行移动构造和移动赋值操作
3. 保存指向某个对象的指针，当它本身被删除释放的时候，会使用给定的删除器释放它指向的对象

unique_ptr 可以实现如下功能：

1. 为动态申请的内存提供异常安全
2. 将动态申请的内存所有权传递给某函数
3. 从某个函数返回动态申请内存的所有权
4. 在容器中保存指针
5. auto_ptr 应该具有的功能

unique_ptr 和 auto_ptr用法很相似，不过不能使用两个智能指针赋值操作，应该使用std::move; 而且它可以直接用if(ptest == NULL)来判断是否空指针；release、get、reset等用法也和auto_ptr一致，使用函数的返回值赋值时，可以直接使用=, 这里使用c++11 的移动语义特性。另外注意的是当把它当做参数传递给函数时（使用值传递，引用传递时不用这样），传实参时也要使用std::move,比如foo(std::move(ptest))。它还增加了一个成员函数swap用于交换两个智能指针的值

### unique_ptr的创建

unique_ptr的创建方法和shared_ptr一样，除非创建一个指向数组类型的unique_ptr

```c++
unique_ptr<int> uptr( new int );
```

unique_ptr提供了创建数组对象的特殊方法，当指针离开作用域时，调用delete[]代替delete。当创建unique_ptr时，这一组对象被视作模板参数的部分。这样，程序员就不需要再提供一个指定的析构方法，如下：

```c++
unique_ptr<int[ ]> uptr( new int[5] );
```

当把unique_ptr赋给另外一个对象时，资源的所有权就会被转移。

记住unique_ptr不提供复制语义（拷贝赋值和拷贝构造都不可以），只支持移动语义(move semantics).

### unique_ptr的接口

unique_ptr提供的接口和传统指针差不多，但是不支持指针运算。

unique_ptr提供一个release()的方法，释放所有权。release和reset的区别在于，release仅仅释放所有权但不释放资源，reset也释放资源。

## [shared_ptr](http://www.cplusplus.com/reference/memory/shared_ptr/)

第一种智能指针是shared_ptr,它有一个叫做共享所有权(sharedownership)的概念。shared_ptr的目标非常简单：多个指针可以同时指向一个对象，当最后一个shared_ptr离开作用域时，内存才会自动释放。

资源可以被多个指针共享，它使用计数机制来表明资源被几个指针共享。

可以通过成员函数use_count()来查看资源的所有者个数，use_count成员函数返回shared_ptr指向的当前资源的引用计数。

shared_ptr构造函数调用时，资源计数增加1，shared_ptr析构函数调用时，资源计数减少1，如果资源计数为0，资源被释放。

除了可以通过new来构造，还可以通过传入auto_ptr, unique_ptr,weak_ptr来构造。

当我们调用release()时，当前指针会释放资源所有权，计数减一。当计数等于0时，资源会被释放。

```c++
/*
shared_ptr例子
*/
int main()
{
    shared_ptr<Test> ptest(new Test("123"));
    shared_ptr<Test> ptest2(new Test("456"));
    cout<<ptest2->getStr()<<endl;
    cout<<ptest2.use_count()<<endl;
    ptest = ptest2;//"456"引用次数加1，“123”销毁
    ptest->print();
    cout<<ptest2.use_count()<<endl;//2
    cout<<ptest.use_count()<<endl;//2
    ptest.reset();
    ptest2.reset();//此时“456”销毁
    cout<<"done !\n";
    return 0;
}
```

### shared_ptr的创建

```c++
    shared_ptr<int> sptr1( new int );
    shared_ptr<int> sptr2 = make_shared<int>(100);
```

使用make_shared宏来加速创建的过程。

上面的代码创建了一个shared_ptr,指向一块内存，该内存包含一个整数100，以及引用计数1.

如果通过sptr2再创建一个shared_ptr,引用计数就会变成2. 该计数被称为强引用(strong reference)，除此之外，shared_ptr还有另外一种引用计数叫做弱引用(weak reference)

### shared_ptr的析构

shared_ptr默认调用delete释放关联的资源。如果用户采用一个不一样的析构策略时，他可以自由指定构造这个shared_ptr的策略。

```c++
class Test
{
public:
 Test(int a = 0 ) : m_a(a)
 {
 }
 ~Test( )
 {
  cout<<"Calling destructor"<<endl;
 }
public:
         int m_a;
};
void main( )
{
    shared_ptr<Test> sptr1( new Test[5],
        [ ](Test* p) { delete[ ] p; } );
}
```

### shared_ptr的接口

就像一个普通指针一样，shared_ptr也提供解引用操作符\*,->

除此之外，它还提供了一些更重要的接口：

- get(): 获取shared_ptr绑定的资源
- reset(): 释放关联内存块的所有权，如果是最后一个指向该资源的shared_ptr,就释放这块内存。
- unique: 判断是否是唯一指向当前内存的shared_ptr
- operator bool: 判断当前的shared_ptr是否指向一个内存块，可以用if 表达式判断。

### shared_ptr的问题

#### 指向同一个内存

```c++
void main( )
{
 int* p = new int;
 shared_ptr<int> sptr1( p);
 shared_ptr<int> sptr2( p );
}
```
上述代码会产生一个错误，因为两个来自不同组的shared_ptr指向同一个资源。析构函数调用的时候，会释放两次同一个资源。
避免这个问题，尽量不要从一个裸指针(naked pointer)创建shared_ptr。

#### 循环引用

```c++
class B;
class A
{
public:
 A(  ) : m_sptrB(nullptr) { };
 ~A( )
 {
  cout<<" A is destroyed"<<endl;
 }
 shared_ptr<B> m_sptrB;
};
class B
{
public:
 B(  ) : m_sptrA(nullptr) { };
 ~B( )
 {
  cout<<" B is destroyed"<<endl;
 }
 shared_ptr<A> m_sptrA;
};
//***********************************************************
void main( )
{
 shared_ptr<B> sptrB( new B );
 shared_ptr<A> sptrA( new A );
 sptrB->m_sptrA = sptrA;
 sptrA->m_sptrB = sptrB;
}
```

当sptrA和sptrB离开作用域时，它们的引用计数都只减少到1，所以它们指向的资源并没有释放！！！！！

总结:

- 如果从一个普通指针创建一个shared_ptr，普通指针可能被其他代码释放
- 两个不同组的shared_ptr指向同一个资源
- 循环引用：如果共享智能指针卷入了循环引用，资源都不会正常释放

## [weak_ptr](http://www.cplusplus.com/reference/memory/weak_ptr/?kw=weak_ptr)

weak_ptr是用来解决shared_ptr相互引用时的死锁问题,如果说两个shared_ptr相互引用,那么这两个指针的引用计数永远不可能下降为0,资源永远不会释放。它是对对象的一种弱引用，不会增加对象的引用计数，和shared_ptr之间可以相互转化，shared_ptr可以直接赋值给它，它可以通过调用lock函数来获得shared_ptr。

```c++
/*
shared_ptr循环引用的死锁问题
*/
class B;
class A
{
public:
    shared_ptr<B> pb_;
    ~A()
    {
        cout<<"A delete\n";
    }
};
class B
{
public:
    shared_ptr<A> pa_;
    ~B()
    {
        cout<<"B delete\n";
    }
};

void fun()
{
    shared_ptr<B> pb(new B());
    shared_ptr<A> pa(new A());
    pb->pa_ = pa;
    pa->pb_ = pb;
    cout<<pb.use_count()<<endl;
    cout<<pa.use_count()<<endl;
}
int main()
{
    fun();
    return 0;
}
```

看到fun函数中pa ，pb之间互相引用，两个资源的引用计数为2，当要跳出函数时，智能指针pa，pb析构时两个资源引用计数会减一，但是两者引用计数还是为1，导致跳出函数时资源没有被释放（A B的析构函数没有被调用），如果把其中一个改为weak_ptr就可以了，我们把类A里面的`shared_ptr<B> pb_;` 改为`weak_ptr<B> pb_;` 运行结果如下，这样的话，资源B的引用开始就只有1，当pb析构时，B的计数变为0，B得到释放，B释放的同时也会使A的计数减一，同时pa析构时使A的计数减一，那么A的计数为0，A得到释放。

注意的是我们不能通过weak_ptr直接访问对象的方法，比如B对象中有一个方法print(),我们不能这样访问，pa->pb_->print(); 英文pb_是一个weak_ptr，应该先把它转化为shared_ptr,如：`shared_ptr<B> p = pa->pb_.lock();    p->print();`

weak_ptr 拥有共享语义（sharing semantics）和不包含语义（not owning semantics）。这意味着，weak_ptr可以共享shared_ptr持有的资源。所以可以从一个包含资源的shared_ptr创建weak_ptr。

weak_ptr不支持普通指针包含的\*，->操作。它并不包含资源所以也不允许程序员操作资源。

需要从weak_ptr中创建shared_ptr然后再使用它。通过增加强引用计数，当使用时可以确保资源不会被销毁。当引用计数增加时，可以肯定的是从weak_ptr中创建的shared_ptr引用计数至少为1.否则，当你使用weak_ptr就可能发生如下问题：当shared_ptr离开作用域时，其拥有的资源会释放，从而导致了混乱。

### weak_ptr的创建

可以以shared_ptr作为参数构造weak_ptr.从shared_ptr创建一个weak_ptr增加了共享指针的弱引用计数(weak reference)，意味着shared_ptr与其它的指针共享着它所拥有的资源。但是当shared_ptr离开作用域时，这个计数不作为是否释放资源的依据。换句话说，就是除非强引用计数变为0，才会释放掉指针指向的资源，在这里，弱引用计数(weak reference)不起作用。

```c++
shared_ptr<Test> sptr( new Test );
weak_ptr<Test> wptr( sptr );
weak_ptr<Test> wptr1 = wptr;
```

将一个weak_ptr赋给另一个weak_ptr会增加弱引用计数(weak reference count)。

所以，当shared_ptr离开作用域时，其内的资源释放了，weak_ptr过期了（expired）

如何判断weak_ptr是否指向有效资源，有两种方法：

1. 调用use-count()去获取引用计数，该方法只返回强引用计数，并不返回弱引用计数。
2. 调用expired()方法。比调用use_count()方法速度更快。

从weak_ptr调用lock()可以得到shared_ptr或者直接将weak_ptr转型为shared_ptr:

```c++
shared_ptr<Test> sptr( new Test );
weak_ptr<Test> wptr( sptr );
shared_ptr<Test> sptr2 = wptr.lock( );
```

如之前所述，从weak_ptr中获取shared_ptr增加强引用计数。

weak_ptr如何解决循环引用问题：

```c++
class B;
class A
{
public:
 A(  ) : m_a(5)  { };
 ~A( )
 {
  cout<<" A is destroyed"<<endl;
 }
 void PrintSpB( );
 weak_ptr<B> m_sptrB;
 int m_a;
};
class B
{
public:
 B(  ) : m_b(10) { };
 ~B( )
 {
  cout<<" B is destroyed"<<endl;
 }
 weak_ptr<A> m_sptrA;
 int m_b;
};

void A::PrintSpB( )
{
 if( !m_sptrB.expired() )
 {  
  cout<< m_sptrB.lock( )->m_b<<endl;
 }
}

void main( )
{
 shared_ptr<B> sptrB( new B );
 shared_ptr<A> sptrA( new A );
 sptrB->m_sptrA = sptrA;
 sptrA->m_sptrB = sptrB;
 sptrA->PrintSpB( );
}
```