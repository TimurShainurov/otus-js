//1
let input = prompt('DD.MM.YYYY');
let [day, month, year] = input.split('.')
let date = new Date(`${year}-${month}-${day}`)
let dateDay = date.getDay()
switch (dateDay) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;

}


//2
let now = new Date()
let start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)

let diffMins = (now - start) / 1000 / 60
console.log(diffMins.toFixed(0))

//3

let user1 = '19.03.1980';
let user2 = '20.03.1980';

let [date1, month1, year1] = user1.split('.');
let [date2, month2, year2] = user2.split('.');

let dateUser1 = new Date(`${year1}-${month1}-${date1}`)
let dateUser2 = new Date(`${year2}-${month2}-${date2}`)

if (dateUser1 - dateUser2 > 0) {
    console.log('user1 is older')
} else if (dateUser1 - dateUser2 < 0) {
    console.log('user2 is older')
} else {
    console.log('users are the same age')
}