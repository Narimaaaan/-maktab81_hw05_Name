let q1 = prompt("Wich one is the most fast car in the world? a-Veyron b-Venome c-Agera RS d-Skiline");
let q2 = prompt("What is the largest city in the world? a-NY b-LA c-Tehran d-Dubai");
let q3 = prompt("What is the population of Iran? a-85 b-95 c-65 d-35");
let q4 = prompt("Wich one is the most long yatch in the world? a-Dilbar b-FlyingFox c-JB's yatch d-BG's yatch");
let score = 0;
if (q1 === "c") {
    score++
}

if (q2 === "a") {
    score++
}

if (q3 === "a") {
    score++
}

if (q4 === "a") {
    score++
}

console.log("Your score is", score);