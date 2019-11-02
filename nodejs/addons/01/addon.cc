#include "../common/common.h"
#include <node_api.h>
#include <iostream>

napi_value func(napi_env env, napi_callback_info info) {
  napi_value res;
  NAPI_CALL(env, napi_get_undefined(env, &res));

  size_t argc = 1;
  napi_value args[1];
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, args, NULL, NULL));

  size_t strLogLen = 0;
  NAPI_CALL(env, napi_get_value_string_utf8(env, args[0], 0, 0, &strLogLen) );
  char *keyBuf = new char[strLogLen + 1];
  NAPI_CALL(env, napi_get_value_string_utf8(env, args[0], keyBuf, strLogLen + 1, &strLogLen));
  std::string str_strLog;
  str_strLog.assign(keyBuf, strLogLen);
  delete []keyBuf;
  
  std::cout << str_strLog << std::endl;

  return res;
}

napi_value Init(napi_env env, napi_value exports) {
	napi_property_descriptor properties[] = {
	  {"func", 0, func, 0, 0, 0, static_cast<napi_property_attributes>(napi_default | napi_writable | napi_enumerable | napi_configurable), 0 },
	};
	NAPI_CALL(env, napi_define_properties(env, exports, sizeof(properties)/sizeof(*properties), properties));
	return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)