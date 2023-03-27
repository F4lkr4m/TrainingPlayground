export const debounce = (func, delay) => {
  let timer = null;

  return (...args) => {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      timer = null;
      func(...args);
    }, delay);
  }
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500);