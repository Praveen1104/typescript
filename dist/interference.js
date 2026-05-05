"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hello World"; // TypeScript infers 'string'
let count = 42; // TypeScript infers 'number'
message = 100; // Error: Type 'number' is not assignable to type 'string'.
count = "forty-two"; // Error: Type 'string' is not assignable to type 'number'.
// TypeScript infers the type of 'message' as 'string' and 'count' as 'number' based on their initial values.
// When we try to assign a value of a different type, TypeScript raises an error, ensuring type safety in our code.
let values = [0, 1, null]; // Inferred as (number | null)[]
values.push(2); // Allowed, as 2 is a number
values.push(null); // Allowed, as null is part of the inferred type
values.push("three"); // Error: Argument of type 'string' is not assignable to parameter of type 'number | null'.
