function check_number() {
    let number = Number(prompt("Enter Number:"));
    if (number > 9999 || number < 1000) {
        console.error("عدد نادرست وارد کردید!");
    } else {
        if (number != 5000) {
            if (number > 5000) {
                alert(این عدد ${ number- 5000} تا بزرگتر است!)
        }
        else {
            alert(این عدد ${ 5000-number } تا کوچکتر است!)
        }
        str_number = number.toString()
        for (let num in str_number) {
            console.log(str_number[num]);
            // console.log(Boolean(Number(str_number)))
            if (Number(str_number[num]) != 0) {
                console.log('نادرست است');
            } else {
                console.log('درست است');
            }
        }
    }
}


alert("اگه می خاید دوباره امتحان کنید صفحه را رفرش کنید")

    }
// check_number()


function BMI() {

    let wik = Number(prompt("Enter your weight:"));

    let him = Number(prompt("Enter your height:"));

    let bmi = wik / (him ** 2);

    bmi = bmi.toFixed(2);

    alert(BMI: ${ bmi });

    if (bmi < 18.5) {

        alert("Underweight");

    } else if (bmi >= 18.5 && bmi < 25) {

        alert("Normal");

    } else if (bmi >= 25 && bmi < 30) {

        alert("Overweight");

    } else if (bmi >= 30) {

        alert("Obese");

    }

}

BMI();