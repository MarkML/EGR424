console.log('This is the first line of code in the file');


const usingSTO = () => console.log('I am printing next');


setTimeout(usingSTO,3000);

console.log('This is the last line of code in file')

//success and Failure Callback Functions
// handle a promise that is resolved, we invoke .then() on the promise, passing a success handler callback function
const prom = new Promise((resolve, reject) => {
  resolve('Yay');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

prom.then(handleSuccess);