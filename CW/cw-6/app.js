const objectToArray = (obj)=> {
    return Object.enteries(obj);
}

const myObject = { pasha:23, amir:22};
const array = objectToArray(myObject);
console.log(array);