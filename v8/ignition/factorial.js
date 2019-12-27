function factorial(N) {
    if (N === 1) {
        return 1;
    } else {
        return N * factorial(N - 1);
    }
}

factorial(10); // V8不会编译没有被调用的函数，因此这一行不能省略
