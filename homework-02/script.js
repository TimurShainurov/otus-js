//1
const a = 10;
const b = 100

a > b ? console.log(a) : console.log(b);

//2
const num = +prompt('Enter a number between 1 and 12:')
const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August ',
    9: 'September',
    10: 'October ',
    11: 'November ',
    12: 'December'
}
console.log(months[num]);

//3
const circle = 78.5;
const square = 25;

const diameter = 2 * Math.sqrt(circle / Math.PI);
const side = Math.sqrt(square)

console.log(diameter <= side ? 'Yes' : 'No')
