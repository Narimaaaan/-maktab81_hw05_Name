const detectWord = (word) => {
    return word.split("").filter((letter) => {
        if (letter === letter.toLowerCase()
        ) return letter
    }).join("");

}
console.log(detectWord("UcUNFYGaFYFYGtNUH"));