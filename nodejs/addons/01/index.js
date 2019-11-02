const addon = require("./build/Release/addon.node");

for (let i = 0; i < 100; ++i) {
  console.log(addon.func("hello world " + i));
}
