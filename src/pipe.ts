import R from "ramda";

// synchronous funcition's pipeline style
function firstAdd(left: number, right: number) {
  return left * right;
}

function secondPass(num: number) {
  return num * num;
}

function thirdFunc(val: number) {
  return val + 1;
}

const test = R.pipe(firstAdd, secondPass, thirdFunc);

console.log("synchronous func's result is: ", test(3, 3));
