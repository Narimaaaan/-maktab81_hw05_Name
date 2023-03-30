const calculator = (a, operator, b) => {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else {
    return "Wrong Operator";
  }
};

console.log(calculator(10, "-", 5));
console.log(calculator(15, "+", 3));
