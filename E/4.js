const maximum = (arr) => {
  var largest = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

const minimum = (arr) => {
  var smallest = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

const average = (arr) => {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + parseInt(arr[i]);
  }
  console.log(sum);
  return sum / arr.length;
};

const factory = (n) => {
  const temp = [];
  for (var i = 0; i < n; i++) {
    var value = prompt(`Enter No.${i + 1}`);
    temp.push(value);
  }
  return `
    Maximum: ${maximum(temp)}
    Minimum: ${minimum(temp)}
    Average: ${average(temp)}
  `;
};

console.log(factory(4));
