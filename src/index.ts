import R from 'ramda';

// add Adds two values. Equivalent to a + b but curried.
let add1 = R.add(2, 3);
let add2 = R.add(2)(3);

// customer func
const incrementByHundred = R.add(100);
let incrementRes = incrementByHundred(incrementByHundred(200)); // 400
