export const throttle = (func, delay) => {
  let timer = null;
  let savedArgs = null;
  const helper = (...args) => {
    if (!timer) {
      func(...args);
      timer = setTimeout(() => {
          timer = null;
          if (savedArgs) {
            helper(...savedArgs);
            savedArgs = null;
          }
        }, delay);
      return;
    }

    savedArgs = args;
  }

  return helper;
}

const func = (text) => console.log(text);

const throttled = throttle(func, 1000);

throttled('1');
throttled('2');
throttled('3');
throttled('4');
throttled('5');
throttled('6');

