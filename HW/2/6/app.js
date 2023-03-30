function bmm(a, b) {
    let tempt = a % b;
    while (tempt !== 0) {
        a = b
        b = tempt
        tempt = a % b
    }
    return b
}

function kmm(a, b) {
    return ((a * b) / (bmm(a, b)))
}

console.log(bmm(65,32));
console.log(kmm(21,32));