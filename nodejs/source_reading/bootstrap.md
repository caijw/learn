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
        - `v8_platform.Initialize(per_process_opts->v8_thread_pool_size);` 所在文件`node/src/node.cc`
        - `V8::Initialize();` 所在文件`node/src/node.cc`
        - `v8_initialized = true;` 所在文件`node/src/node.cc`
        - `Start(uv_default_loop(), args, exec_args);` 所在文件`node/src/node.cc`
            - `Isolate* const isolate = NewIsolate(allocator.get());` 所在文件`node/src/node.cc`
                - `Isolate* isolate = Isolate::New(params);` 所在文件`node/src/node.cc`
                - `isolate->AddMessageListener(OnMessage);` 所在文件`node/src/node.cc`
                - `isolate->SetAbortOnUncaughtExceptionCallback(ShouldAbortOnUncaughtException);` 所在文件`node/src/node.cc`
                - `isolate->SetMicrotasksPolicy(MicrotasksPolicy::kExplicit);`  所在文件`node/src/node.cc`
                - `isolate->SetFatalErrorHandler(OnFatalError);` 所在文件`node/src/node.cc`
                - `isolate->SetAllowWasmCodeGenerationCallback(AllowWasmCodeGenerationCallback);` 所在文件`node/src/node.cc`
            - `node_isolate = isolate;` 所在文件`node/src/node.cc`
            - `std::unique_ptr<IsolateData, decltype(&FreeIsolateData)> isolate_data( CreateIsolateData( isolate, event_loop, v8_platform.Platform(), allocator.get()), &FreeIsolateData);`  所在文件`node/src/node.cc`
                - `new IsolateData(isolate, loop, platform, allocator->zero_fill_field());` 所在文件`node/src/node.cc`
            - `Start(isolate, isolate_data.get(), args, exec_args);` 所在文件`node/src/node.cc`
                - `Local<Context> context = NewContext(isolate);` 所在文件`node/src/node.cc`
                    - `auto context = Context::New(isolate, nullptr, object_template);` 所在文件`node/src/node.cc`
                    - `Local<String> per_context = NodePerContextSource(isolate);` 所在文件`node/src/node.cc`
                    - `ScriptCompiler::Source per_context_src(per_context, nullptr);`  所在文件`node/src/node.cc`
                    - `Local<Script> s = ScriptCompiler::Compile( context, &per_context_src).ToLocalChecked();`  所在文件`node/src/node.cc`
                    - `s->Run(context).ToLocalChecked();` 所在文件`node/src/node.cc`
                    ->
            - `node_isolate = nullptr;` 所在文件`node/src/node.cc`
            - `isolate->Dispose();` 所在文件`node/src/node.cc`
        - `v8_platform.StopTracingAgent();` 所在文件`node/src/node.cc`
        - `v8_initialized = false;` 所在文件`node/src/node.cc`
        - `V8::Dispose();` 所在文件`node/src/node.cc`
        - `v8_platform.Dispose();` 所在文件`node/src/node.cc`