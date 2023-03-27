/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */
export function isPalindrome(value) {
  const formattedValue = value.toLowerCase().replace(/[^a-z]/g, '');
  for (let i = 0; i < formattedValue.length; i++) {
    if (formattedValue.at(i) !== formattedValue.at(-(i + 1))) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama'));// true
