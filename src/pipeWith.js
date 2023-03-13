// const R = require("ramda")

// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;
// const addThenMultiplyThenDivide = R.pipeWith((f, g) => (x, y) => g(f(x, y), y), [add, multiply, divide]);

// const fn = addThenMultiplyThenDivide(2, 3)

// console.log(fn())

const { pipeWith, add, multiply } = require('ramda');

const addThenMultiply = pipeWith((f, x) => f(x), [add(1), multiply(2)]);

console.log(addThenMultiply(10)); // 6
