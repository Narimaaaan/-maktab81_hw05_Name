
let userName = prompt("Enter your Name");
let isConfirmed = confirm(`Did you confirm your Name ${userName}`);

if (isConfirmed) {
    console.log(`Hello ${userName}`);
} else {
    console.log("Please enter your User name");
}