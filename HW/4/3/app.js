const bubble_sort = (input) => {
    for (let i in input) {
        let j = 0;
        while (j < input.length - i) {
            if (input[j] > input[j + 1]) {
                let temp = A[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
            j++;
        }
    }
    console.log(input);
}

bubble_sort([2, 3, 4, 5, 7, 11, 13]);

