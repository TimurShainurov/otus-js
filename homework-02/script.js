//1
const a = 10;
const b = 100

a > b ? console.log(a) : console.log(b);

//2
const num = +prompt('Введите число от 1 до 12:')
switch (num) {
    case 1:
        console.log('Январь');
        break;
    case 2:
        console.log('Февраль');
        break;
    case 3:
        console.log('Март');
        break;
    case 4:
        console.log('Апрель');
        break;
    case 5:
        console.log('Май');
        break;
    case 6:
        console.log('Июнь');
        break;
    case 7:
        console.log('Июль');
        break;
    case 8:
        console.log('Август');
        break;
    case 9:
        console.log('Сентябрь');
        break;
    case 10:
        console.log('Октябрь');
        break;
    case 11:
        console.log('Ноябрь');
        break;
    case 12:
        console.log('Декабрь');
        break;
}

//3
const circle = 78.5;
const square = 25;

const diameter = 2 * Math.sqrt(circle / Math.PI);
const side = Math.sqrt(square)

console.log(diameter <= side? 'Yes':'No')
