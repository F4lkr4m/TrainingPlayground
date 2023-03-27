/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
export function intersection(left, right) {
  
  const leftNumbers = new Set();
  const rightNumbers = new Set();

  left.forEach((number) => leftNumbers.add(number));
  right.forEach((number) => rightNumbers.add(number));

  return [...rightNumbers.values()].filter((number) => leftNumbers.has(number));
}

console.log(intersection(
	[1, 2, 3, 4, 5],
	[2, 8, 3]
));
