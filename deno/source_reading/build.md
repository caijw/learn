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