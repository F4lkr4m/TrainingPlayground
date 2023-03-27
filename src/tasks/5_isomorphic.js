/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
export function isIsomorphic(left, right) {
  // Если длины не равны, то делать нечего
  if (left.length !== right.length) {
    return false;
  }

  // Составляем соответствие букв
  const letterRelations = new Map();

  // Идем по всем буквам первого слова и смотрим на отношения между буквами
  for (let index = 0; index < left.length; index++) {
    const letter = left[index];
    
    // Если есть текущее отношение букв
    if (letterRelations.has(letter)) {
      // Тогда сравниваем, равна ли текущая буква в отношении с уже существующим 
      const relatedLetter = letterRelations.get(letter);
      if (relatedLetter !== right[index]) {
        return false;
      }
      continue;
    }
    // Если нет отношения, то добавляем его
    letterRelations.set(letter, right[index]);
  }
  return true;
}

console.log('egg -> add:', isIsomorphic('egg', 'add')); // true
console.log('paper -> title:', isIsomorphic('paper', 'title')); // true

