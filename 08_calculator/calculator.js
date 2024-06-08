const add = function(...num) {
  let result = 0;
  for (let i of num){
    result += i;
  }
  return result
};

const subtract = function(...num) {
  let result = num[0];
  for (let i = 1; i < num.length; i++){
    result = result - num[i];
  }
  return result;
};

const sum = function(num) {
	let result = 0;
  for(let i of num){
    result = result + i;
  }
  return result;
};

const multiply = function(num) {
  let result = 1;
  for(let i of num){
    result *= i;
  }
  return result;
};

const power = function(...num) {
  let result = num[0] ** num[1];
  return result;
};

const factorial = function(num) {
  let newArray = [];
  let result = 1;

  for(let i = 0; i <= num; i++){
    newArray.push(i);
  }
  newArray.splice(0,1);
  for(let i of newArray){
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
