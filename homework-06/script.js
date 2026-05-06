//1
export function diff(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

//2
function isWord(str) {
    return !str.trim().includes(' ')
}

//3
function pow(a, x) {
    return a**x
}
