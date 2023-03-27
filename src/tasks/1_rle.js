/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
export function rle(value) {
  if (!value) {
    return "";
  }

  let prev = null;
  let repeatCounter = 0;
  const result = [...value].reduce((acc, curr, index) => {
    if (!index) {
      prev = curr;
      repeatCounter++;
      return ''; 
    }

    if (prev === curr) {
      repeatCounter++;
      return acc;
    }

    acc += `${prev}${repeatCounter === 1 ? '' : repeatCounter}`;
    repeatCounter = 1;
    prev = curr;
    return acc;
  }, '');

  return result + `${prev}${repeatCounter === 1 ? '' : repeatCounter}`;
}


console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
console.log(rle('BCCDDDAXXXX'))
console.log(rle('AAAB'))
console.log(rle(''))
