"use strict";
function push(arr, ...items) {
    items.forEach(function (item) {
        arr.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);
console.log(a);
