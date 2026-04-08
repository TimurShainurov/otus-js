//1
const a = 5;
const b = 4;
console.log('Произведение:', a * b);
console.log('Cумма:', a + b);

//2
const str1 = 'Hello World!';
const str2 = 'Ivan';
console.log('Сумма символов в строках:', str1.length + str2.length);

//3
const number = +prompt('Введите трехзначное число:')
const digit1 = (number - number % 100) / 100;
const digit3 = number % 10
const digit2 = (number - digit1 * 100 - digit3) / 10

console.log('Сумма цифр числа:', digit1 + digit2 + digit3)

