const countCharacters = (character, str) => {
    let count = 0;
    for (let i in str) {
        if (str[i] == character) {
            count++;
        }
    }
    return count;
}

let count = countCharacters('e', 'In the name of God');
alert(count);
