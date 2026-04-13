//1
let input = prompt('DD.MM.YYYY');
let [day, month, year] = input.split('.')
let date = new Date(year, month - 1, day);
const formatter = new Intl.DateTimeFormat('ru-RU', {weekday:"short", year:'numeric'})
const weekday = formatter.format(date)
console.log(weekday)

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