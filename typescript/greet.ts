class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

let x: [string, number];
x = ['hello', 10]; // OK

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean