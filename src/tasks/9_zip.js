/** Сжатие целочисленного массива */
export function zip(...values) {
  const sorted = values.sort((a, b) => a - b);

  const sectors = [];
  sorted.reduce((prev, curr, index) => {
    if (!index) {
      return [curr];
    }

    if (index === sorted.length - 1) {
      if (prev.at(-1) + 1 === curr) {
        sectors.push([...prev, curr]);
        return;
      }
      sectors.push(prev, [curr]);
      return;
    }

    if (prev.at(-1) + 1 === curr) {
      return [...prev, curr];
    }

    sectors.push(prev);
    return [curr];
  }, []);
  
  return sectors.reduce((acc, sector, index) => {
    let sep = index ? ',' : '';
    if (sector.length === 1) {
      return acc + sep + sector[0];
    }

    return acc + sep + `${sector.at(0)}-${sector.at(-1)}`;
  }, '')
}

console.log(zip(3, 2, 1, 5, 6, -1, 10)); // "-1,1-3,5-6,10"
