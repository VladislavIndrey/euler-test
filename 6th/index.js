let a = 1,
  b = 1;

for (let i = 2; i <= 100; ++i) {
  a += i;
  b += Math.pow(i, 2);
}

const res = Math.pow(a, 2) - b;

console.log(res);
