"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    //methods
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. You can reach me at ${this.email}`;
    }
    //getter
    getAge() {
        return this.age;
    }
    //setter
    setAge(age) {
        this.age = age;
    }
}
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `Employee ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
    }
}
let praveen = new Employee("1", "praveen", "IT");
console.log(praveen.getDetails());
