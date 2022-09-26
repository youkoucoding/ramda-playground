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

// console.log(R.allPass([gt09, lt20])(12)); // true
// console.log(R.allPass([gt09, lt20])(8)); // false
// console.log(R.all(R.allPass([gt09, lt20]))(arrAll)); // true

/**
 * always
 * Returns a function that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.
 */

// const K = (x) => (_) => x;
// console.log(R.always(1)('asdasdasdasda')); // 1

/**
 * and
 * Returns the first argument if it is falsy, otherwise the second argument. Acts as the boolean and statement if both inputs are Booleans.
 */
// R.and(true, true); //=> true
// R.and(true, false); //=> false
// R.and(false, true); //=> false
// R.and(false, false); //=> false

/**
 * any
 * (a → Boolean) → [a] → Boolean
 * Returns true if at least one of the elements of the list match the predicate, false otherwise.
 */
// console.log(R.any(R.equals(10), [10, 12])); // true
// console.log(R.any(R.equals(10), [11, 12])); // false

/**
 * anyPass
 * allPass for logical or
 */

// console.log(R.anyPass([R.gte(R.__, 10), R.lte(R.__, 5)])(9)); // false

/**
 * ap
 * ap applies a list of functions to a list of values.
 * Dispatches to the ap method of the second argument, if present. Also treats curried functions as applicatives.
 */

// result [] length is funcs * values
R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); //=> [2, 4, 6, 4, 5, 6]
R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
// R.ap can also be used as S combinator
// when only two functions are passed
R.ap(R.concat, R.toUpper)('ramda'); // ramdaRAMDA // (a -> b -> c) -> (a -> b ) -> (a -> c)

/**
 * aperture
 * Number → [a] → [[a]]
 */

R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
R.aperture(7, [1, 2, 3, 4, 5]); //=> []
// console.log(R.aperture(1)(['2'])); // [ [ '2' ] ]
// console.log(R.aperture(5, [1, 2, 3, 4, 5])); // [ [ 1, 2, 3, 4, 5 ] ]

/**
 * append
 * a → [a] → [a]
 * Returns a new list containing the contents of the given list, followed by the given element.
 */
R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
R.append('tests', []); //=> ['tests']
R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]

/**
 * apply
 * (*… → a) → [*] → a
 * Applies function fn to the argument list args.
 */
let nums = [1, 2, 3, -99, 42, 6, 7];
R.apply(Math.max, nums); //=> 42
