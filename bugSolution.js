function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Correct handling of NaN
  } else if (a === null || b === null) {
    return null; 
  }
  return a + b;
}

console.log(foo(1, NaN)); // Output: NaN
console.log(foo(NaN, 1)); // Output: NaN
console.log(foo(NaN, NaN)); // Output: NaN
console.log(foo(null, 1)); // Output: null
console.log(foo(1, null)); // Output: null