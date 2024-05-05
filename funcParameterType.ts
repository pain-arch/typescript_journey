// regular function
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(2, 3);
const sum2 = add(2, '3'); // error

console.log(sum);
console.log(sum2);

//Arrow function
const ans = (a: string, b: string): string => {
    return a + b;
}

console.log(ans('Hello', 'World'));
console.log(ans('Hello', 2)); // error
console.log(ans(2)); // error



