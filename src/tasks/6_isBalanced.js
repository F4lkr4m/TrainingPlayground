const CLOSE_BRACKET = '}';
const OPEN_BRACKET = '{';

/**
 * Проверка на сбалансированность фигурных скобкок
 * @param  {string}  input
 * @return {boolean}
 */
export function isBalanced(input) {
  
  const stack = [];
  for (const bracket of input) {

    if (bracket === OPEN_BRACKET) {
      stack.push(OPEN_BRACKET);
      continue;
    }
    if (!stack.length) {
      return false;
    }
    stack.pop();
  }

  if (stack.length) {
    return false;
  }

  return true;
}

console.log('balanced:', isBalanced('{{}{}}{}')); // true
console.log('not balanced:', isBalanced('{}{{}')); // false
console.log('not balanced:', isBalanced('{{}}')); // false

