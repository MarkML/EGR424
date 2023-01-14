/*Multi-tasking in JavaScript

setTimeout() is a built-in function
*/

//What order of operations should take place?
console.log("Before setTimeout()");
setTimeout( () => { 
  console.log("In the callback function")
}, 5000);
console.log("After setTimeout()");