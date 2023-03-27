// Реализовать waterfall


// const p = new Promise((res, rej) => {
//   res(10);
// })

// p.then(res => {
//   console.log(res);
// })
// .catch(res => {
//   console.log(res);
// })

// async function waterfall(...funcs) {
//   let savedVal = null;


//   for (let func of funcs) {
//     let retVal = null;
//     const p = new Promise((res, rej) => {
//       retVal = func(savedVal, res);
//       if (retVal !== undefined) {
//         res(retVal);
//       }
//     });

//     savedVal = await p;
//   }
// }

export function waterfall(...funcs) {
  let savedVal = null;

  let prevP = null;
  for (let i = 0; i < funcs.length; i++) {
    if (!prevP) {
      let p = new Promise((res, rej) => {
        let retVal = funcs[i](savedVal, res);
        if (retVal !== undefined) {
          res(retVal);
        }
      });
      prevP = p;
      continue;
    }
    prevP = prevP.then((result) => {
      return new Promise((res, rej) => {
        let retVal = funcs[i](result, res);
        if (retVal !== undefined) {
          res(retVal);
        }
      });
    });
  }
}

waterfall(
	function () {
		return 10;
	},
	function (val, done) {
		setTimeout(function () {
			done(val + 5);
		}, 1000);
	},
	function (val) {
		return val * 2;
	},
	function (val) {
		console.log(val); // 30
	}
);
