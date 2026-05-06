//1
export function greaterNum(a, b) {
    a > b ? console.log(a) : console.log(b);
  }

//2
export function printMonths(number) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (number < 1 || number > 12) {
    throw new Error('Invalid number')
  }
  return (months[number - 1]);
}

export function runPrintMonths() {
  let input = +prompt("Enter a number between 1 and 12");
  const result = printMonths(input)
  console.log(result)
}

//3
export function doesCircleFitToSquare(circle, square) {
  if (circle > 0 && square > 0) {
    const diameter = 2 * Math.sqrt(circle / Math.PI);
    const side = Math.sqrt(square);

    return diameter <= side;
  } else {
    throw new Error("invalid arguments");
  }
}
