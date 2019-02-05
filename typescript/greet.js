"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
let x;
x = ['hello', 10]; // OK
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log('hello1 ');
