function gcd1(a, b) {
  // Base cases
  if (a === 0) return b;
  if (b === 0) return a;

  // Iterative Euclidean Algorithm
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function gcd2(a, b) {
  // Base cases
  if (a === 0) return b;
  if (b === 0) return a;

  // Initializing arrays to store divisors
  let divA = [1, a];
  let divB = [1, b];

  // Array to store common divisors of a and b
  let common = [];

  // Find divisors for 'a'
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      divA.push(i);
    }
  }

  // Find divisors for 'b'
  for (let i = 2; i < b; i++) {
    if (b % i === 0) {
      divB.push(i);
    }
  }

  // Populate the array with common divisors
  for (let n of divA) {
    if (divB.includes(n)) {
      common.push(n);
    }
  }

  // Find the largest common divisor
  let largest = Number.MIN_SAFE_INTEGER;
  for (let n of common) {
    if (n > largest) {
      largest = n;
    }
  }

  return largest;
}

module.exports = { gcd1, gcd2 };
