// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// sayHello fxn goes here.

function sayHello(name) {
  if (name === 'Will') {
    return `No more testing ${name}!`;
  } else {
    return `Hi there ${name}!`;
  }
}


// buildCar fxn goes here

 function buildCar(shade, model) {
  if(shade === undefined && model === undefined) {
    return {};
}
    return {
      color: shade,
      type: model,
    }
  }




module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}
