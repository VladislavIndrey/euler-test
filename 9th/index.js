function res() {
  console.time('TIME');
  const sum = 1000;
  let a = 1;
  let b = 0;
  for (; a <= sum / 3; a++) {
    for (b = a + 1; b <= sum / 2; b++) {
      const c = sum - a - b;
      if (a * a + b * b == c * c) {
        console.log(a, b, c, a + b + c);
      }
    }
  }
  console.timeEnd('TIME');
}

res();
