

function sum(x, y) {
    if (typeof (x) == "number" || typeof (y) == "number") {
        return x + y;
    } else {
        return "Please Enter your number again"
    }
}

console.log(sum(7, 6));

/*function sum(x, y) {
    if (isNaN(x) === isNaN(y)) {
        return x + y;
    } else {
        return "Please Enter your number again"
    }
}*/