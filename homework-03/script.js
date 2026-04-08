//1 
let sum = 0;
for (let i = 50; i <= 100; i++) {
    sum += i;
}

console.log(sum);

//2
for (let i = 1; i <= 9; i++) {
    console.log(`7 х ${i} = ${7 * i}`);
}

//3
const number = +prompt('Введите число N:');
let summarize = 0;
let count = 0
for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0){
        count++;
        summarize += i;
    }
}
console.log('Среднее арифметическое нечетных чисел от 1 до N:', summarize/count)
