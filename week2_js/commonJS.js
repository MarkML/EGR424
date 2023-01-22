({ modFuncToExport, modFuncToExport2 } = require("./module.js")) // import multiple functions

//modFuncToExport = require("./module.js");  import a single function

const myFunction = () => {
  console.log('I am in then main function')
  modFuncToExport();
  modFuncToExport2();
}

myFunction();


