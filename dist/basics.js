"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//primitives
let username = "praven";
let age = 26;
let isadmin = true;
//null undefined
let nullvalue = null;
let value = undefined;
//arrays
let numbers = [1, 2, 3, 3, 4, 5];
let strings = ["one", "two"];
//tuples
let tuples = ["test", 26, false];
//enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
let favcolor = color.red;
//any
let random = 10;
random = "name";
random = false;
//unknown safer than any
let userInput;
userInput = 10;
userInput = "bosco";
//functions that not return anything
function notReturn(message) {
    console.log(message);
}
//
