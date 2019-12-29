const babelParser = require("@babel/parser");
const acorn = require("acorn");
function whitespace(c) {
  return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
};
let txt = `a === in ? "1" : ""`;

// let script = `var a = {let: 1}`;

let ast;

try{
  ast = babelParser.parse(txt, {
    plugins: [
      "@babel/plugin-transform-reserved-words",
      'objectRestSpread',
    ]
  });
}catch(err){
    let message = err.message;
    let reg = /Unexpected token \((\d+):(\d+)\)/; // Unexpected token (1:6) 非法的token，js保留关键字会提示这个错误     
    let regRes = message.match(reg);
    let line = 0;
    let col = 0;
    if (regRes) {
      line = regRes[1] || 0
      col = regRes[2] || 0;
    }
    if (line && col) {
      let txtLines = txt.split('\n');
      let txtLine = txtLines[line - 1];
      let token = ``;

      for (let i = col; !whitespace(txtLine[i]); ++i) {
        token = `${token}${txtLine[i]}`
      }

      message = `Unexpected token: ${token}`;
    }
    console.error(message);
}




console.log("ast:", ast);