"use strict";
//type assertions
//Sometimes the TypeScript compiler isn't as smart as you. Type Assertions let you override its guess,
// while Type Guards help it "narrow down"
//  a type within a block of code.
Object.defineProperty(exports, "__esModule", { value: true });
//Use an assertion when you know more about a value's type than TypeScript does. It doesn't change the data;
// it just tells the compiler to "trust me."
let someValue = "this is a string value";
//let strlen = someValue.length; // Error: Object is of type 'unknown'.
//let strlen = (someValue as string).length;
//orS
let strlen1 = someValue.length;
//type guards
//Guards are expressions that check the type of a variable at runtime to ensure
// safety within a specific scope.
function isString(value) {
    if (typeof value === "string") {
        console.log(value.toLocaleUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
console.log(makeSound(new Dog()));
