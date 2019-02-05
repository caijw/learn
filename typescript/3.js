"use strict";
function test() {
    const env = {};
    env['hello'] = 'world';
    return env;
}
var env = test();
env["test_key"] = 1;
