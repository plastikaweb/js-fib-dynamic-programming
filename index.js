// memoization fibonnaci number
// js object, keys will be arg to fn, value will the return value

const f = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = f(n - 1, memo) + f(n - 2, memo);
  return memo[n];
};

console.log(f(6));
console.log(f(7));
console.log(f(8));
console.log(f(50));
