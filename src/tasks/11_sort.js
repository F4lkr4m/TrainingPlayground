/**
 * Релизуйте сортировку массива
 * @param   {any[]}     values  сортируемый массив
 * @returns {any[]}
 */
export function sort(values) {
  return values.sort((a, b) => a - b);
}

console.log(sort([7, 2, 99, 5, 1, 3, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]
