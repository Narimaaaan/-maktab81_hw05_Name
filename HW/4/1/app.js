
// const array = ([1, -1, 2, -2, 3]);

// const findAllLonely = (arr) => {
//     const map = {};

//     arr.forEach((num) => {
//         // Keep track of the number of time each number appears in the array
//         if (!map[num]) return (map[num] = 1);
//         map[num]++;
//     });

//     // Filter through and only keep the values that have 1 instance
//     return Object.keys(map).filter((key) => {
//         return map[key] === 1;
//     });
// };

// console.log(findAllLonely(array));\

// str = "A man is as good as his word";
// alert(str.split('a').length - 1);

// let a = "acvbasbb";
// let b = {};
// for (let i = 0; i < a.length; i++) {
//     if ((a.match(new RegExp(a[i], "g"))).length > 1) {
//         b[a[i]] = (a.match(new RegExp(a[i], "g"))).length;
//     }
// }
// console.log(b);

const lonelyInteger = (array) => {
    let count = 1;
    for (let i in array) {
        let x = array[i];
        let k = 0;
        count=1;
        while (k < array.length) {

            if (-x == array[k]) {
                count++;
            }
            k++;
        }
        if (count == 1) {
            console.log(x);
        }
    }
}

const a = [-3, 1, 2, 3, -1, -4, -2]
const b = [-2,2,1,-1,3]
const c = [-9,-105,-9,-9,-9,-9,105]

lonelyInteger(a);
