export function isAnagram(word, testWord) {
  const wordLetters = new Set();
  const testWordLetters = new Set();
  // Собираем уникальные буквы
  [...word].forEach((letter) => wordLetters.add(letter));
  [...testWord].forEach((letter) => testWordLetters.add(letter));
  // Если множества не равны -> значит не анаграммы 
  if (wordLetters.size !== testWordLetters.size) {
    return false;
  }
  // Проверяем множества на совпадения
  for (let letter of testWord) {
    if (!wordLetters.has(letter)) {
      return false;
    }
  }
  return true;
}

/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getAnagrams(list) {
  const result = [];
  let stack = [...list];
  while (stack.length) {
    const curr = stack.shift();
    const newStack = [];
    const currAnagrams = stack.filter((word) => {
      if (isAnagram(curr, word)) {
        return true;
      }
      newStack.push(word);
      return false;
    });
    if (currAnagrams.length) {
      result.push([curr, ...currAnagrams]);
    }
    stack = newStack;
  }
  return result;
}

const inputList = [
	'кот', 'пила', 'барокко',
	'стоп', 'ток', 'кошка',
	'липа', 'коробка', 'пост',
];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));
// [
//   ['кот', 'ток'],
//   ['пила', 'липа'],
//   ['барокко', 'коробка'],
//   ['стоп', 'пост'],
// ]

const test = (func, input, expected) => {
  const result = func(...input);
  if (result === expected) {
    console.log(`OK____${result} === ${expected}`);
    return;
  }
  console.log(`NOT_OK____${result} === ${expected}`);
}

test(isAnagram, ['пила', 'липа'], true);
test(isAnagram, ['кот', 'ток'], true);
test(isAnagram, ['барокко', 'коробка'], true);

