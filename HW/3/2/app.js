// // let name = prompt("Enter your name");
// let i = true;
// let data = [];
// while (i) {
//     const information = prompt("Enter your Information");
//     // const age = prompt("Enter your Age");
//     // const profile = prompt("Enter your profile");
//     // const income = prompt("Enter your income");
//     // console.log(name);
//     // console.log(typeof name);
//     if (!information) {

//         i = false;
//     }
//     else (
//         data.push({
//             information

//         }))
// }
// console.log(data);
// -----------------------------------------------------
    function sort(A) {
        let B = []
        B.push(A[0]);
        let index = 1;
        while (index < A.length) {
            let t_2 = A[index];
            for (let i in B) {
                if (t_2.age > B[i].age)
                {
                    let temp = B[i];
                    B[i] = t_2;
                    t_2 = temp;
                }
            }
            B.push(t_2);
            index += 1;
        }

        return B;

    }

function max_income(A) {
    let maxIncom = 0;
    let index = 0;
    for (let i in A) {
        if (Number(A[i].income) > maxIncom) {
            maxIncom = Number(A[i].income);
            index = i;
        }
    }
    return index;
}


function average(A) {
    let sum = 0;
    for (let i in A) {
        sum += Number(A[i].income);
    }
    return sum / A.length;
}

function is_profile(A) {
    let k = 0;
    for (let i in A) {
        if (A[i].profile == "yes") {
            k += 1;
        }
    }
    if (k == A.length) {
        return "Yes";
    }
    return "No";
}

function qustion_2() {
    const I_N = []
    let information = "";
    while (true) {
        information = prompt("Enter information:");
        if (!information) {
            break;
        }
        const arr = information.split(",");
        // console.log(arr);
        I_N.push({
            "name": arr[0],
            "age": arr[1],
            "profile": arr[2],
            "income": arr[3],
        })
    }
    console.log(I_N);

    console.log(sort(I_N));

    console.log(I_N[max_income(I_N)].name)

    console.log(average(I_N));

    console.log(is_profile(I_N));
}
qustion_2()

