/*const val1 = "a" || (("b" && "") || "c");
console.log(val1);
const val2 = "a" && 0 && "";
console.log(val2);
const val3 = "" || 0;
console.log(val3);*/

function num() {
    let max = Number(prompt());
    let min = Number(prompt());
    if (min > max) {
        min = min + max;
        max = min - max;
        min = min - max;
    }
    console.log(Math.floor(math.random() * max) + min);
}

num();