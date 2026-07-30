"use strict";
function throwError(message) {
    throw new Error(message);
}
throwError("404 Error");
function infiniteLoop() {
    while (true) {
        console.log("Running....");
    }
}
console.log(infiniteLoop());
