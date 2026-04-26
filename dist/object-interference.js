"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let use = {
    name: "praveen",
    age: 26,
    email: "email",
    id: 1
};
let laptop = {
    name: "Asus",
    price: 84000,
    getDiscount(perceent) {
        return this.price * (perceent / 20);
    }
};
