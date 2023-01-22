const modFuncToExport = () => console.log('this module function is alive');

const modFuncToExport2 = () => console.log('this module function is working also')
// module.exports is a keyword to declare we want to export from this file
//module.exports = modFuncToExport

// if we want to export more than one thing from a single module 
module.exports = { modFuncToExport, modFuncToExport2 }
