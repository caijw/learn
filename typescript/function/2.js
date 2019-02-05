"use strict";
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
let r1 = reverse(124);
let r2 = reverse('hello');
console.log(`r1: ${r1}, r2: ${r2}`);
