// O(n log(log(n))) + O(n)
function findSum() {
  console.time("TIME");
  const MAX = 2000000 - 1;
  const prime = Array.from({ length: MAX }, (_, i) => true);
  let sum = 0;
  let p = 2;

  prime[1] = false;

  // Sieve of Eratosthenes O(n log(log(n)))
  for (; p * p <= MAX; p++) {
    if (prime[p] == true) {
      for (let i = p * 2; i <= MAX; i += p) prime[i] = false;
    }
  }

  // O(n)
  prime.forEach((val, index) => {
    if (val) sum += index;
  });

  console.timeEnd("TIME");
  return sum;
}

findSum();
