const addon = require("./build/Release/addon.node");

const appid = 0x123456;
const i_userDef = 0;
const i_procId = 200;
const i_isAgent = 1;
const s_userPath = "/data/ulslog/";
const w_MsgPort = 0;
const w_RelayPort = 0;
const i_SvrConfiged = 1;
const i_ColorSvrConfiged = 1;
const c_WLogLevel = 1;
const c_WLogMsgLevel = 5;
const c_TLogLevel = 1;
const c_TLogMsgLevel = 5;
const c_RelayLogLevel = 5;
const i_LogSize = 50000;
const i_LogNum = 50;
const i_WaterDestID = 1;
const i_ColorDestID = 1;

console.log(
  appid,
  i_userDef,
  i_procId,
  i_isAgent,
  s_userPath,
  w_MsgPort,
  w_RelayPort,
  i_SvrConfiged,
  i_ColorSvrConfiged,
  c_WLogLevel,
  c_WLogMsgLevel,
  c_TLogLevel,
  c_TLogMsgLevel,
  c_RelayLogLevel,
  i_LogSize,
  i_LogNum,
  i_WaterDestID,
  i_ColorDestID
);

// console.log(
//   Object.prototype.toString.call(appid),
//   Object.prototype.toString.call(i_userDef),
//   Object.prototype.toString.call(i_procId),
//   Object.prototype.toString.call(i_isAgent),
//   Object.prototype.toString.call(s_userPath),
//   Object.prototype.toString.call(w_MsgPort),
//   Object.prototype.toString.call(w_RelayPort),
//   Object.prototype.toString.call(i_SvrConfiged),
//   Object.prototype.toString.call(i_ColorSvrConfiged),
//   Object.prototype.toString.call(c_WLogLevel),
//   Object.prototype.toString.call(c_WLogMsgLevel),
//   Object.prototype.toString.call(c_TLogLevel),
//   Object.prototype.toString.call(c_TLogMsgLevel),
//   Object.prototype.toString.call(c_RelayLogLevel),
//   Object.prototype.toString.call(i_LogSize),
//   Object.prototype.toString.call(i_LogNum),
//   Object.prototype.toString.call(i_WaterDestID),
//   Object.prototype.toString.call(i_ColorDestID)
// );

addon.Test(
  appid,
  i_userDef,
  i_procId,
  i_isAgent,
  s_userPath
);

addon.func1(
  appid,
  i_userDef,
  i_procId,
  i_isAgent,
  s_userPath
);

