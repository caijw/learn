// import * as path from "path";
// import path = require("path");
// require('ts-node').register();

// import {hello} from "./node_ex2";

// console.log(hello);


interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };