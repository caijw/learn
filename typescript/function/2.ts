function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

let r1: number = reverse(124);
let r2: string = reverse('hello');

console.log(`r1: ${r1}, r2: ${r2}`);