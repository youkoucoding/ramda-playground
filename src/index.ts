import R, { allPass } from 'ramda';

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

// console.log(R.addIndex(R.map)(R.add as any, [10, 20, 30])); // [ 10, 21, 32 ]

/**
 * adjust
 * return a new copy of the array
 */

const adjusted = R.adjust(2, R.add(10), [10, 20, 30]);
// const adjusted = R.adjust(2, R.add(10))([10, 20, 30]);
// console.log('🚀 ~ file: index.ts ~ line 33 ~ adjusted', adjusted); // [10,20,40]

/**
 * all
 * Returns true if all elements of the list match the predicate, false if there are any that don't.
 */

const arrAll = [10, 20, 30];
const f = (x: number) => x == 10;

R.all(f, arrAll);
// console.log('🚀 ~ file: index.ts ~ line 45 ~ res', res); // false

/**
 * allPass
 * list of predicates (function)
 */

const gt09 = R.gte(R.__, 9);
const lt20 = R.lte(R.__, 30);

console.log(R.allPass([gt09, lt20])(12)); // true
console.log(R.allPass([gt09, lt20])(8)); // false
console.log(R.all(R.allPass([gt09, lt20]))(arrAll)); // true
