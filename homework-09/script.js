//1
function isRightTriangle(a, b, c) {
    const sides = [a, b, c].sort((x, y) => x - y);
    const [side1, side2, hypothenus] = sides;
    return hypothenus === Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, +2));
}

console.log(isRightTriangle(1, 1, 1))

//2
function lengthSquareCircle() {
    const input = +prompt('Enter a radius:');

    const length = 2 * Math.PI * input
    const square = Math.PI * Math.pow(input, 2)

    return [`Circle length = ${length}`, `Circle square = ${square}`].join(',')
}

console.log(lengthSquareCircle(5))

//3
function quadricEquation() {
    const input = prompt('Enter coefs: a,b,c').split(',')

    let [a, b, c] = input;

    let discriminant = b ** 2 - 4 * a * c;
    let res;
    if (discriminant > 0) {
        let res1 = (-b + Math.sqrt(discriminant)) / 2 * a;
        let res2 = (-b - Math.sqrt(discriminant)) / 2 * a;
        res = [res1, res2];
    } else if (discriminant === 0) {
        res = -b / (2 * a);
    } else {
        console.log('The equation has no roots!')
    }
    return res
}
console.log(quadricEquation())