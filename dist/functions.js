"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//basic function with type
function add(a, b) {
    return a + b;
}
//function with optional 
function optional(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(optional(2, 3));
//default parameter
function defaultPara(a, b = 1) {
    return a + b;
}
//rest parameters
function restParameters(...num) {
    return num.reduce((s, n) => s + n, 3);
}
const addition = (a, b) => a + b;
let typefunction;
