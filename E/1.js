function x(n, k) {
  for (let i = 0; i < k; i++) {
    n /=  2;
  }
  console.log(Math.floor(n));
}

x(213, 5);
x(29, 4);
x(17, 3);
