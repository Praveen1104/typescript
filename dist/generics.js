"use strict";
// They allow you to create components (functions, classes, or interfaces)
//  that can work with many different types while still keeping full type safety.1.
//  The "Why" (The Problem)Imagine you want a function that returns the first item of an
//  array.Using any: You lose all type information. If you pass an array of numbers,
//  TypeScript won't know the result is a number.Specific Types:
//  You’d have to write one version for number[], another for string[], etc.
Object.defineProperty(exports, "__esModule", { value: true });
//  Generics solve this problem by allowing you to write a single function that can
//  work with any type, while still preserving type information.
function getFirstItem(arr) {
    return arr[0];
}
// Here, <T> is a type parameter that can be replaced with any type when the function is called.
// Example usage:
const numbers = [1, 2, 3];
const firstNumber = getFirstItem(numbers); // TypeScript infers that T is number, so firstNumber is of type number.
console.log(firstNumber); // Output: 1
const strings = ["a", "b", "c"];
const firstString = getFirstItem(strings); // TypeScript infers that T is string, so firstString is of type string.
console.log(firstString); // Output: "a"
const pair1 = { key: "age", value: 30 };
const pair2 = { key: 1, value: "one" };
console.log(pair1); // Output: { key: "age", value: 30 }
console.log(pair2); // Output: { key: 1, value: "one" }
