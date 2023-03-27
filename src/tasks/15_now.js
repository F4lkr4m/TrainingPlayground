// Реализовать метод `now`:
//  - now() — вернет текущий timestamp
//  - now('+min'); — `сейчас + 1 минута`
//  - now('-3.5h'); — или `сейчас - 3.5 часа`
//
// Поддерживаемые форматы:
//   `ms`, `s`, `sec`, `m`, `min`, `h`, `hours` & etc.
const MS_STRINGS = ['ms'];
const SEC_STRINGS = ['s', 'sec'];
const MIN_STRINGS = ['m', 'min'];
const HOURS_STRINGS = ['h', 'hours'];

const SUM_TYPE = 1;
const MINUS_TYPE = 2;

export function now(v) {
  if (!v) {
    return Date.now();
  }
  let type = null;
  if (v.startsWith('+')) {
    type = SUM_TYPE;
  }
  if (v.startsWith('-')) {
    type = MINUS_TYPE;
  }

  const withoutSign = v.slice(1);
  const number = withoutSign.replace(/[a-z]/g, '');
  const withoutNumber = withoutSign.replace(/(\d*)/, '').trim();
  let shift = 0;
  if (MS_STRINGS.includes(withoutNumber)) {
    shift = number;
  }
  if (SEC_STRINGS.includes(withoutNumber)) {
    shift = number * 1000;
  }
  if (MIN_STRINGS.includes(withoutNumber)) {
    shift = number * 60 * 1000;
  }
  if (HOURS_STRINGS.includes(withoutNumber)) {
    shift = number * 60 * 60 * 1000;
  }

  if (type === MINUS_TYPE) {
    return Date.now() - shift;
  } 

	return Date.now() + shift;
}


console.log(now()); // Date.now() + 30 * 60 * 1000
console.log(now('+30min')); // Date.now() + 30 * 60 * 1000
console.log(now('-10ms')); // Date.now() + 30 * 60 * 1000
console.log(now('+7 hours')); // Date.now() + 30 * 60 * 1000
console.log(now('+99sec')); // Date.now() + 30 * 60 * 1000
