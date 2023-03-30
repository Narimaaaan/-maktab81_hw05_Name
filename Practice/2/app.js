/*function clacAge1(birthday) {
    return 2022 - birthday
}
const age1 = clacAge1(1999);
console.log(age1);

const calcAge2 = function calcAge2(birthday) {
    return 2023 - birthday;
}

const age2 = calcAge2(1999);

const calcAge3 = birthday => 2023 - birthday;
const age3 = calcAge3(1995);
console.log(age3);

const yearsRetirement = (birthday, firstName) => 
{
    const age = 2023 - birthday;
    const retirement = 65 - age;
    return `${firstName} is retire in ${retirement} years`;
}

console.log(yearsRetirement(1999, "nariman"));
console.log(yearsRetirement(2004, "yashar"))

function cutFruitPieces(fruit) {
    return fruit * 4 ;
}

function fruitProcessor (apple , orange) {
    applePices = cutFruitPieces(apple);
    orangePices = cutFruitPieces(orange);

    const juice =  `Jucie with ${applePices} pieces of Apple and ${orangePices} pieces of Orange`;
    return juice;
}

console.log(fruitProcessor(4, 6));*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins ...")
    }
}

checkWinner(scoreDolphins, scoreKoalas);