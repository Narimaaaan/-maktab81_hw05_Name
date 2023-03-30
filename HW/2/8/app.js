let number = Number(prompt("Enter the number"));
let charset = prompt("Enter yor character");

let index = 1;
while (index <= number) {
    let i = 0;
    let text = "";
    while (i < index) {
        text += charset;
        i++
    }

    console.log(text);
    index++;
}