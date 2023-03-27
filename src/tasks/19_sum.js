export const sum = function (...numbers) {
  return numbers.reduce((acc, curr) => {
      return acc + curr;
  }, 0)
};

console.log("result:", sum(1, 2, 3, 4, 5));
