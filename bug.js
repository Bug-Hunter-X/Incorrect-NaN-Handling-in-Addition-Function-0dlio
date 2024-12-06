function foo(a, b) {
  if (a === null || b === null) {
    return null; // This is incorrect for handling NaN
  }
  return a + b;
}

console.log(foo(1, NaN)); // Output: NaN
console.log(foo(NaN, 1)); // Output: NaN
console.log(foo(NaN, NaN)); // Output: NaN
console.log(foo(null, 1)); //Output: null
console.log(foo(1, null)); // Output: null