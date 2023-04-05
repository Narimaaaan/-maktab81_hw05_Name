// const bubble_sort = (input) => {
//     for (let i in input) {
//         let j = 0;
//         while (j < input.length - i) {
//             if (input[j] > input[j + 1]) {
//                 let temp = A[j];
//                 input[j] = input[j + 1];
//                 input[j + 1] = temp;
//             }
//             j++;
//         }
//     }
//     console.log(input);
// }

// bubble_sort([2, 3, 4, 5, 7, 11, 13]);

let sort = (input) => {
    for (let i = 0; i < input.length; i++) {
        for (let k = 0; k < input.length - i - 1; k++) {
            if (input[k].age > input[k + 1].age) {
                const temp = input[k];
                input[k] = input[k + 1];
                input[k + 1] = temp;
            }
        }
    }
    return input;
}

let firstGroup = [{
    name: "nariman",
    age: 16,

},
{
    name: "farzad",
    age: 15,

},
{
    name: "Amirreza",
    age: 12,
},
{
    name: "Khadije",
    age: 11,
}]

console.log(sort(firstGroup));



