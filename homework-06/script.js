//1
function diff(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

//2
function isWord(str) {
    return str.trim().includes(' ')
}


//3
function pow(a, x) {
    let res = 1;
    for (let i = 0; i < x; i++) {
        res *= a   
    }

    return res
}

console.log(pow(4, 5))