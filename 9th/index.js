function res() {
  console.time("TIME");
  const sum = 1000;
  let a = 1;
  let b = 0;

  for (; a < sum / 2; a++) {
    for (b = a + 1; b < sum / 3; b++) {
      const c = sum - a - b;
      if (a * a + b * b == c * c) {
        console.timeEnd("TIME");
        return a + b + c;
      }
    }
  }
}
res();
