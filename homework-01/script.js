//1
export function sum(a, b) {
    console.log(a + b);
}

export function multipl(a, b) {
    console.log(a * b);
}

//2
export function sumOfChars(str1, str2) {
    console.log(str1.length + str2.length);
}

//3
export function sumOfDigits(number) {
    const digit1 = (number - (number % 100)) / 100;
    const digit3 = number % 10;
    const digit2 = (number - digit1 * 100 - digit3) / 10;
    return digit1 + digit2 + digit3;
}

export function runSumOfDigits() {
    const input = +prompt('Enter a 3-digit number');

    if(input % 1 !== 0 || input < 100 || input > 999) {
        console.log('Invalid number'); 
        return
    }

    const result = sumOfDigits(input)
    console.log(result)
}
