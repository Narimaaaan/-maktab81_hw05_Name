function checkreverse(number) {
  const reverse = number.split("").reverse().join("");
  if (reverse === number) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(checkreverse("1221"));
console.log(checkreverse("1231"));
console.log(checkreverse("010"));
