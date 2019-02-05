提高deno启动速度
https://github.com/denoland/deno/issues/814
https://github.com/denoland/deno/pull/784
https://v8.dev/blog/improved-code-caching
https://github.com/sokra/node-voo


- isolate.rs: isolate.execute_mod
	- isolate.rs: code_fetch_and_maybe_compile
		- deno_dir.rs: state.dir.code_fetch(specifier, referrer)?;
			- deno_dir.rs: load_cache
				- deno_dir.rs: cache_path
					- std::fs::read_to_string(&output_code)
					- std::fs::read_to_string(&source_map)?;
	- compiler.rs: compile_sync
		- compiler.rs: req(specifier, referrer);
		- compiler.rs: lazy_start(parent_state);
			- workers.rs: workers::spawn(parent_state.clone(), "compilerMain()".to_string());






### js api调用
- js 
	- dispatch.ts: libdeno.send 
		- binding.cc: send 
			- binding.cc: d->recv_cb_(d->user_data_, req_id, control, data);
				- isolate.rs: pre_dispatch 
					- ops.rs: dispatch
					- isolate.rs: 同步 isolate.respond(req_id, buf);
						- api.cc deno_respond
							-  d->current_args_->GetReturnValue().Set(ab);
							- auto recv_ = d->recv_.Get(d->isolate_);
							- auto v = recv_->Call(context, context->Global(), 1, args);  /*main.ts  libdeno.recv(handleAsyncMsgFromRust); 设置了recv_*/
			        - isolate.rs: 异步 let task = op
			        - isolate.rs: tokio::spawn(task);
			        	- isolate.rs: 事件循环里面处理异步 event_loop(&self) : self.complete_op(req_id, buf)
			        		- isolate.rs: self.ntasks_decrement();
			        		- isolate.rs:: self.respond(req_id, buf);
			        			- isolate.rs:: libdeno::deno_respond
			        				- api.cc deno_respond
			        					- deno::DeleteDataRef(d, req_id);
			        					- auto v = recv_->Call(context, context->Global(), 1, args);
		- binding.cc: AddDataRef(d, req_id, data_v);	 


### 
- js cmd_id: 用来维护异步请求的{cmd_id, promise}映射的，，同步请求也有cmd_id，但是没有用到，每个js异步的请求对应一个cmd_id和一个promise，promise用来执行异步回调
- c++ binding req_id: 用来维护每个异步js请求的data_v js数据的C++ map结构，在开始异步处理的时候，AddDataRef(d, req_id, data_v)	，在回调执行的时候，deno::DeleteDataRef(d, req_id);