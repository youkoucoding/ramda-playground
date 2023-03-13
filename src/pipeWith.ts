import { pipeWith, add, multiply } from "ramda";

const addThenMultiply = pipeWith((f, x: number) => f(x), [add(1), multiply(2)]);

console.log(addThenMultiply(10)); // 6
