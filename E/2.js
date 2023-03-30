function separator(str) {
  const splitedOutput = str.split("");
  return `
  saal: ${splitedOutput.slice(0, 2).join("")}
  maah: ${splitedOutput.slice(2, 4).join("")}
  rooz: ${splitedOutput.slice(4, 6).join("")}
  `;
}
console.log(separator("000608"));
