// Возможно ли реализовать такое?


export class MagicCompare {
  static counter = 0;
  valueOf() {
    MagicCompare.counter++;
    return MagicCompare.counter;
  }
}

var a = new MagicCompare();

// Проверка
console.log(a == a); // true
console.log(a < a); // true
