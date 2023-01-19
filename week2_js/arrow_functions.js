const squareNum = (num) => {
  return num * num;
}

// concise form
//const squareNum = num => num * num;

const plantNeedsWater = (day) => {
  if(day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}

/// concise form with 'Ternary Operaor'
// const plantNeedsWater = day => day === 'Wednesday' ? true : false;
