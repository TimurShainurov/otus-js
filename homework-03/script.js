//1 
export function sum() {
    let res = 0
    for (let i = 50; i <= 100; i++) {
        res += i
    }
    console.log(res)
}

//2
export function multiplTable() {
    for (let i = 1; i <= 9; i++) {
        console.log(7 * i);
    }
}

//3
export function arithmeticMean(number) {
    let summarize = 0;
    let count = 0
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            count++;
            summarize += i;
        }
    }
    return summarize / count;
}

