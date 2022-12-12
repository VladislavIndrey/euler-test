let b = 1;

for (let i = 2; i <= 100; ++i) {
  b += i;
}
const res = Math.pow(b, 2) - b;
console.log(res);
