//1

let user = {
    name: 'John'
}
let number = +prompt('Введите возраст:');
user.age = number;


//2
let admin = Object.assign({ role: 'admin' }, user)

//3
let {name, age, role} = admin;

