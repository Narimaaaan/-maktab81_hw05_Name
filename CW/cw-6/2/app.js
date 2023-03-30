// function count() {
//     array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

//     array_elements.sort();

//     var current = null;
//     var cnt = 0;
//     for (var i = 0; i < array_elements.length; i++) {
//         if (array_elements[i] != current) {
//             if (cnt > 0) {
//                 document.write(current + ' comes --> ' + cnt + ' times<br>');
//             }
//             current = array_elements[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
//     }
//     if (cnt > 0) {
//         document.write(current + ' comes --> ' + cnt + ' times');
//     }

// }

// count();

const countDuplicate = (array) => {
    let counts = {};
    for (let i = 0; i < array.length; i++) {
        if (counts[arr[i]]) {
            counts[arr[i]] += 1;
        } else {
            counts[arr[i]] = 1;
        }
        
    }
    return counts
}

const array = [1,3,5,4,6,7,9,5,4,1,1,2,2,2,3,3,5,5,];
console.log(countDuplicate);