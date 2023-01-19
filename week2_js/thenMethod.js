
//success and Failure Callback Functions
// to handle a promise that is resolved, we invoke .then() on the promise, passing a success handler callback function

// prom is a promise which will resolve to 'Yay!'.
// We define a function, handleSuccess(), which prints the argument passed to it.
// We invoke prom‘s .then() method passing in our handleSuccess() function.
// Since prom resolves, handleSuccess() is invoked with prom‘s resolved value, 'Yay', so 'Yay' is logged to the console.
const prom = new Promise((resolve, reject) => {
  resolve('Yay');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

prom.then(handleSuccess);



//we won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case.
// We can pass both a success callback and a failure callback to .then().

// prom is a promise which will randomly either resolve with 'Yay!' or reject with 'Ohhh noooo!'.
// We pass two handler functions to .then(). The first will be invoked with 'Yay!' if the promise resolves,
// and the second will be invoked with 'Ohhh noooo!' if the promise rejects.
// Note: The success callback is sometimes called the “success handler function” or the onFulfilled function. 
// The failure callback is sometimes called the “failure handler function” or the onRejected function. 
let prom2 = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess2 = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom2.then(handleSuccess2, handleFailure);
