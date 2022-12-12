let e = 1,
  d = 1;

for (let i = 2; i <= 100; ++i) {
  d += Math.pow(i, 2);
  e += i;
}

const res = Math.pow(e, 2) - d;

console.log(res);
