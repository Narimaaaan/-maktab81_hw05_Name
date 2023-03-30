const equal = (obj1, obj2) => {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }

    }
    return true;
}

const obj1 = {
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
}
const obj2 =
{
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
}

console.log(equal(obj1,obj2));
