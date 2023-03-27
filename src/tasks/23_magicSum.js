

export const sum = (init) => {
  let counter = init;

  function sumHelper(val) {
    counter += val;
    return sumHelper;
  }

  sumHelper.toString = () => {
    return counter;
  }

  return sumHelper;
}

alert(sum(1)(2)(3)(4))