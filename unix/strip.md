
从特定文件中剥掉一些符号信息和调试信息

```sh
gcc main.c
ls -l a.out 
file a.out // 文件类型查看
nm a.out // 读出a.out中的符号信息
```

```sh
gcc main.c
strip a.out
ls -l a.out
file a.out // 文件类型查看
nm a.out // 读出a.out中的符号信息
```

strip用于脱掉文件的衣服， 文件会变小， 其中的符号信息会失去。

原来的a.out比较大， 可以执行。 在strip之后， 文件变小了， 仍然可以执行， 这就就节省了很多空间。

在实际的开发中， 经常需要对动态库.so进行strip操作， 减少占地空间。 而在调试的时候（比如用addr2line）， 就需要符号了。 因此， 通常的做法是： strip前的库用来调试， strip后的库用来实际发布， 他们两者有对应关系。 一旦发布的strip后的库出了问题， 就可以找对应的未strip的库来定位。
