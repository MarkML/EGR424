const inventory = {
  sunglasses: 1,
  pants: 1088,
  bags: 1344
};


function myExecutor(resolve, reject){
  if(inventory.sunglasses > 0 ){
    resolve('Sunglasses order processed');
  }
  else {
    reject('The item is not in stock.');
  }  
}

function orderSunglasses(){
  return new Promise(myExecutor);
}

orderPromise = orderSunglasses();

console.log(orderPromise);