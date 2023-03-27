const sum = (a, b, c) => {
  return a + b + c;
};

export const curry = (func) => {
  const helper = (...args) => {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return (...args2) => helper(...[...args, ...args2]);
    }
  }
  return helper;
}


const curry2 = function (func) {
  return function curried (...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    }
  } 
}

const curriedSum = curry(sum)(1)(2)(3);
const curriedSum2 = curry2(sum)(1)(2)(3);

console.log(curriedSum);
console.log(curriedSum2);

