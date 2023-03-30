let weight = Number(prompt("Enter your Weight(Kg)"));
let height = Number(prompt("Enter your height(M)"));

let bmi = weight / (height * height);



if (bmi < 18.5) {
    console.log("You are Underwight")
} else if (bmi >= 18.5, bmi < 25) {
    console.log("You are normal")
} else if (bmi >= 25, bmi < 30) {
    console.log("You are Overweight")
} else if (bmi >= 30) {
    console.log("You are Obese")
}