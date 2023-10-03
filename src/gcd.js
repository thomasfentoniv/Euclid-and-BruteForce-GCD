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

  // Find divisors for a
  let divA = [1, a];
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      divA.push(i);
    }
  }

  // Find divisors for b
  let divB = [1, b];
  for (let i = 2; i < b; i++) {
    if (b % i === 0) {
      divB.push(i);
    }
  }

  // Find common divisors
  let common = [];
  for (let num of divA) {
    if (divB.includes(num)) {
      common.push(num);
    }
  }

  // Find the largest common divisor
  let largest = Math.min(...common);
  for (let num of common) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}
