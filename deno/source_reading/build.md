#### build lib.deno_runtime.d.ts

caijw-> basePath: /Users/jingweicai/Documents/code/deno
caijw-> buildPath: /Users/jingweicai/Documents/code/deno/target/release
caijw-> debug: false
caijw-> outFile: /Users/jingweicai/Documents/code/deno/target/release/gen/lib/lib.deno_runtime.d.ts
caijw-> silent: true

1. main.ts
	year
	console.log

#### /Users/jingweicai/Documents/code/deno/build_extra/rust/rust.gni

$root_out_dir = .(/target/release)
out_dir = "$root_out_dir/rust_crates"

#### /Users/jingweicai/Documents/code/deno/BUILD.gn
rust_build = "//build_extra/rust/"


#### ts call 

- ts: TS call

	- ts: `dispatch.ts` dispatch.sendSync/dispatch.sendAsync

		- ts: `dispatch.ts` sendInternal

			- ts: `dispatch.ts` libdeno.send

				- C++ binding: `binding.cc` void Send(const v8::FunctionCallbackInfo<v8::Value>& args)

					- C++ binding: `binding.cc` DenoIsolate::recv_cb_

					- Rust: `isolate.rs` config.recv_cb

						- Rust: `isolate.rs` pre_dispatch

							- rust `ops.rs` dispatch







