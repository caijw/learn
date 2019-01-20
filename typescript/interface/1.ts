interface Person {
    name: string;
    age?: number;
    [propName: number]: any;
}

let jam: Person = {
    name: 'jam',
    age: 25,
    1: 'male'
};

console.log(jam);