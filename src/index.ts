import R from 'ramda';

/**
 * add
 */
// add Adds two values. Equivalent to a + b but curried.
let add1 = R.add(2, 3);
let add2 = R.add(2)(3);

// customer func
const incrementByHundred = R.add(100);
let incrementRes = incrementByHundred(incrementByHundred(200)); // 400

/**
 * addIndex
 */

// addIndex Creates a new list iteration function.
// make the value and keys(index) of array use together
// 1. The first param must be a mapping function and the last param is the list.
// 2. Something like R.filter or R.reject or any of the array iterating functions really
const indexPlusValue = R.addIndex(R.map);
let addIndexRes = indexPlusValue((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);

console.log(R.addIndex(R.map)(R.add as any, [10, 20, 30])); // [ 10, 21, 32 ]
