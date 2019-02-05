"use strict";
function copyFields(target, source) {
    for (let id in source) {
        target[id] = source[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
console.log(x);
