// Реализовать метод `.delay`
// ...


Function.prototype.delay = function (ms) {
  setTimeout(this, ms);
}

function foo() {
  console.log("Wow!");
}


foo.delay(3000);


// foo.delay = (ms) => {
//   setTimeout(foo, ms)
// }


