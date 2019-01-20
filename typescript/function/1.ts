function push(arr: any[], ...items: any[]): void{
    items.forEach(function(item) {
        arr.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);

console.log(a);