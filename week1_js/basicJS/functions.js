function display10FirstIntegers() {
  for (var i = 0; i <= 10; i++){
    console.log("i = " + i);
  }
}

// var declarations have function scope visibility
function addFirst10Integers() {
  var total = 0;
  for (var i = 0; i <= 10; i++){
    total += i;
  }
  return total;
}

function addNFirstIntegers(n){
  var total = 0;
  for (var i = 0; i <= n; ++i){
    total += i;
  }
  return total;

}
display10FirstIntegers();

total = addFirst10Integers();  // total variable here is Global,  we recommend avoiding global variables
console.log("Total = " + total);

var total_100 = addNFirstIntegers(100);
console.log("Total of the first 100 integers is " + total_100);