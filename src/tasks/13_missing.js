/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */
export function missing(values) {
  if (!values.length) {
    return undefined;
  }
  const max = Math.max(...values);
  const min = 1;

  const neededSize = max - min + 1;

  if (neededSize === values.length) {
    return undefined;
  }
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  const absoluteMissingSum = (min + max) * (values.length + 1) / 2;

  return absoluteMissingSum - sum;
}

console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3 12 (1 + 5) * 2 = 12
console.log(missing([1, 2, 3, 4])); // undefined
console.log(missing([])); // undefined

