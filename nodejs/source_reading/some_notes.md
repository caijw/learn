PER_ISOLATE_STRING_PROPERTIES(VS)

V(address_string, "address")

V(v8::String, address_string)


inline v8::Local<v8::String> address_string(v8::Isolate* isolate) const;




V(async, "async") 

inline v8::Local<v8::String> async(v8::Isolate* isolate) const;


------



v8::Eternal<v8::String> address_string_

v8::Eternal<v8::String> async_


------

js模块编译为c++代码

node.gyp 
library_files数组增加配置js文件
'lib/internal/per_context.js'

src/node_javascript.h
增加方法签名，供c++代码调用
v8::Local<v8::String> NodePerContextSource(v8::Isolate* isolate);

tools/js2c.py
增加方法实现，会被打包到合成的c++文件
v8::Local<v8::String> NodePerContextSource(v8::Isolate* isolate) {{
  return internal_per_context_value.ToStringChecked(isolate);
}}

/out/Release/obj/gen/node_javascript.cc
生成打包后的C++代码
包括：
js文件的二进制数组
+
v8::Local<v8::String> NodePerContextSource(v8::Isolate* isolate) {
  return internal_per_context_value.ToStringChecked(isolate);
}

internal_per_context_value 命名是一个约定。

