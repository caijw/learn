# nodejs的启动

- 入口函数 `int main(int argc, char* argv[])` 所在文件`node/src/node_main.cc`.
    - `node::Start(argc, argv)` 所在文件`node/src/node.cc`
        - `Init(&args, &exec_args)` 所在文件`node/src/node.cc`
            - `RegisterBuiltinModules()` 所在文件`node/src/node.cc`
                - `NODE_BUILTIN_MODULES(V)` 所在文件`node/src/node.cc`
                    - `NODE_BUILTIN_STANDARD_MODULES(V)` 所在文件`node/src/node_internals.h`
                        - `V(async_wrap)` 所在文件`node/src/node_internals.h`
                        - ......
                        - `V(zlib)` 所在文件`node/src/node_internals.h`
                    - `NODE_BUILTIN_OPENSSL_MODULES(V)` 所在文件`node/src/node_internals.h`
                    - `NODE_BUILTIN_ICU_MODULES(V)` 所在文件`node/src/node_internals.h`
            - `ProcessArgv(argv, exec_argv, false);` 所在文件`node/src/node.cc`
            - `node_is_initialized = true;`