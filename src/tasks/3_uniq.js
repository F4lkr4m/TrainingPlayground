/**
 * Получения массива уникальных значений
 * @param  {number[]} values
 * @return {*}
 */
export function uniq(values) {
  const uniqNumbers = new Set();
  values.forEach((number) => uniqNumbers.add(number));
	return [...uniqNumbers.keys()];
}

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));
