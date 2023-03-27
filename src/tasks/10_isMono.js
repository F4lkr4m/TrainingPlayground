const RAISE_DIRECTION = 1;
const DESCENDING_DIRECTION = 2;
const UNDEFINED_DIRECTION = 3;


/** Проверка массива на монотонность */
export function isMono(...values) {
  if (values.length === 1) {
    return true;
  }

  let type = values[0] < values[1] ? RAISE_DIRECTION : DESCENDING_DIRECTION;
  let prev = values[0];

  return values.every((value, index) => {
    if (!index) {
      return true;
    }
    if (prev <= value && type === RAISE_DIRECTION) {
      prev = value;
      return true;
    }

    if (prev >= value && type === DESCENDING_DIRECTION) {
      prev = value;
      return true;
    }
    return false;
  })
}

// console.log(isMono(0, 1, 5, 9, 15)); // true
console.log(isMono(0, 1, 5, 15, 4)); // false

//0, 1, 5, 15, 4