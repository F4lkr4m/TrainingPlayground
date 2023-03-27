/**
 * Получение свойства объекта
 * @param {object} src
 * @param {string} path
 */
export function get(src, path) {
  const pathArray = path.split('.');

  let pointer = src;
  for (let curr of pathArray) {
    if (pointer[curr]) {
      pointer = pointer[curr];
      continue;
    }
    return undefined;
  }

  return pointer;
}

var fixture = {
	foo: {
		bar: [
			{qux: 'bingo'},
		],
	},
};

// Проверка
console.log(get(fixture, 'foo.bar.0.qux') === 'bingo');
