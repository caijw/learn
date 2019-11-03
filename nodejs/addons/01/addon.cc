#include "../common/common.h"
#include <node_api.h>
#include <iostream>

typedef struct
{
  uint32_t dwAppId;    //业务的AppId,由系统管理员分配,必填字段
  uint32_t dwUserDef1; //初始化用户自定义字段1，由调用者自己填写，自己解释
  uint32_t dwProcId;
  uint16_t wMsgPort;       //可指定发送远程日志所绑定的端口，为0则随机端口
  uint16_t wRelayPort;     //可指定转发包所绑定的端口，为0则随机端口
  uint16_t cAgentLocalLog; //是否由Agent来负责记录本地log，业务进程不再记录
} LsInitParam;             //进程初始化时可确定的信息
typedef struct
{
  uint64_t ddwUin;          //64位uin，必填字段,同conn的qwUin
  uint32_t dwClientIp;      //触发前端服务的用户IP，一般是用户所用机器的IP,网络序，同conn的dwClientIP
  uint8_t sClientIpV6[16];  //触发前端服务的用户IP，一般是用户所用机器的IP,ipv6 格式
  uint32_t dwServiceIp;     //前端应用主机IP,conn ip认为是前端应用主机IP,网络序 ，同conn的dwServiceIp
  uint32_t dwClientVersion; //客户端版本号,同conn的wVersion
  uint32_t dwCmd;           //命令号，同conn的wCmd
  uint32_t dwSubCmd;        //子命令号，同conn的dwSubCmd
  int32_t dwErrId;          //处理过程中的错误返回码，同conn的wErrNo，每次调用记录日志的 api时都要传入该参数
  uint32_t dwUserDef1;      //用户自定义字段1，由调用者自己填写，自己解释，conn的cPkgType，dwLoginTime，dwLogOutTime可使用自定义字段记录并索引
  uint32_t dwUserDef2;      //用户自定义字段2，由调用者自己填写，自己解释
  uint32_t dwUserDef3;      //用户自定义字段3，由调用者自己填写，自己解释
  uint32_t dwUserDef4;      //用户自定义字段4，由调用者自己填写，自己解释
} LsPkgParam;               //一次请求包处理开始时才能确定的信息

int LsCheckWriteWL(int iLogLevel)
{
  return 0;
}
int LsClientInit(int iSvrConfiged, int iColorSvrConfiged, LsInitParam *pstLsInitParam, char *szLogFilePath, int8_t cWLogLevel, int8_t cWLogMsgLevel, int8_t cTLogLevel, int8_t cTLogMsgLevel, int8_t cRelayLogLevel, int iLogSize, int iLogNum, int iWaterDestID, int iColorDestID)
{
  return 0;
}
// int LsPreSetParam(LsPkgParam *pstLsPkgParam){
//   return 0;
// }
// int LsWaterLog(const char * szFile, int iLine, const char * szFunction, int iLogLevel,  const char *sFormat, ...)
// __attribute__ ((format(printf,5,6))){
//   return 0;
// }

LsInitParam stLsInitParam;





napi_value Test(napi_env env, napi_callback_info info) {
  size_t argc = 5;
  napi_value args[5];

  NAPI_CALL(env,
    napi_get_cb_info(env, info, &argc, args, NULL, NULL));

  // napi_valuetype t;
  // NAPI_CALL(env, napi_typeof(env, args[0], &t));
  // NAPI_ASSERT(env, t == napi_number,
  //     "Wrong first argument, integer expected.");
  // NAPI_CALL(env, napi_typeof(env, args[1], &t));
  // NAPI_ASSERT(env, t == napi_object,
  //   "Wrong second argument, object expected.");
  // NAPI_CALL(env, napi_typeof(env, args[2], &t));
  // NAPI_ASSERT(env, t == napi_function,
  //   "Wrong third argument, function expected.");

  napi_valuetype valuetype;
  NAPI_CALL(env, napi_typeof(env, args[0], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as first argument.");
  NAPI_CALL(env, napi_typeof(env, args[1], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as second argument.");
  NAPI_CALL(env, napi_typeof(env, args[2], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 3rd argument.");
  NAPI_CALL(env, napi_typeof(env, args[3], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 4th argument.");
  NAPI_CALL(env, napi_typeof(env, args[4], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_string, "init_cfg: Wrong type of arguments. Expects a string as 5th argument.");



  return nullptr;
}

napi_value func1(napi_env env, napi_callback_info info) 
{

  size_t argc = 1; // 这里要填5才对
  napi_value args[5];
  napi_status status;


  // status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, args, NULL, NULL));
  // NAPI_ASSERT(env, argc == 5, "init_cfg: Wrong number of arguments. Expects 18 argument.");
  std::cout << "0 " << " " << argc << std::endl;

  // 参数类型校验
  napi_valuetype valuetype;
  NAPI_CALL(env, napi_typeof(env, args[0], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as first argument.");
  NAPI_CALL(env, napi_typeof(env, args[1], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as second argument.");
  NAPI_CALL(env, napi_typeof(env, args[2], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 3rd argument.");
  NAPI_CALL(env, napi_typeof(env, args[3], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 4th argument.");
  NAPI_CALL(env, napi_typeof(env, args[4], &valuetype));
  std::cout << "valuetype: " << valuetype << std::endl;
  NAPI_ASSERT(env, valuetype == napi_string, "init_cfg: Wrong type of arguments. Expects a string as 5th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[5], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 6th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[6], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 7th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[7], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 8th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[8], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 9th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[9], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 10th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[10], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 11th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[11], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 12th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[12], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 13th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[13], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 14th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[14], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 15th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[15], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 16th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[16], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 17th argument.");
  // NAPI_CALL(env, napi_typeof(env, args[17], &valuetype));
  // NAPI_ASSERT(env, valuetype == napi_number, "init_cfg: Wrong type of arguments. Expects a number as 18th argument.");

  memset(&stLsInitParam, 0, sizeof(LsInitParam));


  uint32_t dwAppId;
  status = napi_get_value_uint32(env, args[0], &dwAppId);
  // NAPI_CALL(env, napi_get_value_uint32(env, args[0], &dwAppId ));    //一定要设置，AppId
  stLsInitParam.dwAppId = dwAppId;
  std::cout << "1 " << stLsInitParam.dwAppId << " " << status << std::endl;

  uint32_t dwUserDef1;
  status = napi_get_value_uint32(env, args[1], &dwUserDef1);
  // NAPI_CALL(env, napi_get_value_uint32(env, args[1], &dwUserDef1 ));    //用户自定义字段，可以不设置
  stLsInitParam.dwUserDef1 = dwUserDef1;
  std::cout << "2 " << stLsInitParam.dwUserDef1 << " " << status << std::endl;

  uint32_t dwProcId;
  status = napi_get_value_uint32(env, args[2], &dwProcId);
  // NAPI_CALL(env, napi_get_value_uint32(env, args[2], &dwProcId ));    //用来区分在本地记录日志文件的进程，不同的进程其dwProcId必须不一样，否则会导致多个进程写同一个日志文件
  stLsInitParam.dwProcId = dwProcId;
  std::cout << "3 " << stLsInitParam.dwProcId << " " << status << std::endl;

  uint32_t cAgentLocalLog;
  status = napi_get_value_uint32(env, args[3], &cAgentLocalLog);
  // NAPI_CALL(env, napi_get_value_uint32(env, args[3], &cAgentLocalLog));    //1本地日志是agent记录  0用户进程记录
  stLsInitParam.cAgentLocalLog = cAgentLocalLog;
  std::cout << "4 " << stLsInitParam.cAgentLocalLog << " " << status << std::endl;

  size_t bufLen = 0;
  char *buf;

  status = napi_get_value_string_utf8(env, args[4], 0, 0, &bufLen);

  // NAPI_CALL(env, napi_get_value_string_utf8(env, args[4], 0, 0, &bufLen) );

  std::cout << "5 " << bufLen << " " << status << std::endl;

  buf = new char[bufLen + 1];
  if (!buf)
  {
    NAPI_ASSERT(env, false, "memory alloc fail");
  }
  NAPI_CALL(env, napi_get_value_string_utf8(env, args[4], buf, bufLen + 1, &bufLen));
  std::string str_userPath; // 本地磁盘log文件的绝对路径,本地的流水日志和染色日志都记录在该路径下,不能传入空指针,否则函数调用出错
  str_userPath.assign(buf, bufLen);
  delete[] buf;

  std::cout << "str_userPath: " << str_userPath << std::endl;

  return NULL;

  // Nan::Utf8String param(info[4]->ToString());
  // std::string str_userPath = std::string(*param); // 本地磁盘log文件的绝对路径,本地的流水日志和染色日志都记录在该路径下,不能传入空指针,否则函数调用出错
  uint32_t wMsgPort;
  NAPI_CALL(env, napi_get_value_uint32(env, args[5], &wMsgPort)); //可指定发送远程日志所绑定的端口，为0则随机端口
  stLsInitParam.wMsgPort = wMsgPort;
  uint32_t wRelayPort;
  NAPI_CALL(env, napi_get_value_uint32(env, args[6], &wRelayPort)); //可指定转发包所绑定的端口，为0则随机端口
  stLsInitParam.wRelayPort = wRelayPort;

  // stLsInitParam.wMsgPort = info[5]->Uint32Value();  //可指定发送远程日志所绑定的端口，为0则随机端口
  // stLsInitParam.wRelayPort = info[6]->Uint32Value();//可指定转发包所绑定的端口，为0则随机端口

  int iSvrConfiged;
  int iColorSvrConfiged;
  NAPI_CALL(env, napi_get_value_int32(env, args[7], &iSvrConfiged));
  NAPI_CALL(env, napi_get_value_int32(env, args[8], &iColorSvrConfiged));

  // int iSvrConfiged = info[7]->Uint32Value();
  // int iColorSvrConfiged = info[8]->Uint32Value();

  int32_t cWLogLevel;
  int32_t cWLogMsgLevel;
  int32_t cTLogLevel;
  int32_t cTLogMsgLevel;
  int32_t cRelayLogLevel;
  int iLogSize;
  int iLogNum;
  int iWaterDestID;
  int iColorDestID;

  NAPI_CALL(env, napi_get_value_int32(env, args[9], &cWLogLevel));
  NAPI_CALL(env, napi_get_value_int32(env, args[10], &cWLogMsgLevel));
  NAPI_CALL(env, napi_get_value_int32(env, args[11], &cTLogLevel));
  NAPI_CALL(env, napi_get_value_int32(env, args[12], &cTLogMsgLevel));
  NAPI_CALL(env, napi_get_value_int32(env, args[13], &cRelayLogLevel));
  NAPI_CALL(env, napi_get_value_int32(env, args[14], &iLogSize));
  NAPI_CALL(env, napi_get_value_int32(env, args[15], &iLogNum));
  NAPI_CALL(env, napi_get_value_int32(env, args[16], &iWaterDestID));
  NAPI_CALL(env, napi_get_value_int32(env, args[17], &iColorDestID));

  // int8_t cWLogLevel = info[9]->Uint32Value();
  // int8_t cWLogMsgLevel = info[10]->Uint32Value();
  // int8_t cTLogLevel = info[11]->Uint32Value();
  // int8_t cTLogMsgLevel = info[12]->Uint32Value();
  // int8_t cRelayLogLevel = info[13]->Uint32Value();
  // int iLogSize = info[14]->Uint32Value();
  // int iLogNum = info[15]->Uint32Value();
  // int iWaterDestID = info[16]->Uint32Value();
  // int iColorDestID = info[17]->Uint32Value();

  /*进程初始化时调用LsClientInit()*/
  int iRet = LsClientInit(
      iSvrConfiged,
      iColorSvrConfiged,
      &stLsInitParam,
      (char *)str_userPath.c_str(),
      cWLogLevel,
      cWLogMsgLevel,
      cTLogLevel,
      cTLogMsgLevel,
      cRelayLogLevel,
      iLogSize,
      iLogNum,
      iWaterDestID,
      iColorDestID);

  napi_value res;
  NAPI_CALL(env, napi_create_int32(env, iRet, &res));

  if (-30 == iRet || -40 == iRet) //没有安装logsys_cfg_cli导致
  {
    fprintf(stderr, "LsClientInit() failed, return :%d\n", iRet);
    //exit(1);   //如果认为不安装logsys_cfg_cli可以接受,进程继续运行,否则退出
  }
  else if (iRet < 0) //LsClientInit()的pstLsInitParam或szLogFilePath参数为空指针导致
  {
    fprintf(stderr, "LsClientInit() failed, return :%d\n", iRet);
    //exit(1);   //传入可空指针,LsClientInit执行发生严重错误,必须退出
  }
  return res;
}

napi_value Init(napi_env env, napi_value exports)
{
  // napi_property_attributes attr = static_cast<napi_property_attributes>(napi_default | napi_enumerable);
  // napi_property_descriptor properties[] = {
  //     {"func", 0, func, 0, 0, 0, attr, 0},
  // };
  // NAPI_CALL(env, napi_define_properties(env, exports, sizeof(properties) / sizeof(*properties), properties));
  // return exports;

  napi_property_descriptor properties[] = {
    DECLARE_NAPI_PROPERTY("func1", func1),
    DECLARE_NAPI_PROPERTY("Test", Test)
  };

  NAPI_CALL(env, napi_define_properties(
      env, exports, sizeof(properties) / sizeof(*properties), properties));

  return exports;

}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)