const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sumArr=arr.reduce((acc,curr)=>acc+curr,0);
  return sumArr;
};

const multiply = function(arr) {
  let multArr=arr.reduce((acc,curr)=>acc*curr,1);
  return multArr;
};

const power = function(base,exponent) {
	return Math.pow(base,exponent);
};

const factorial = function(number) {
	let fact=1;
  while(number>1){
    fact=fact*number;
    number=number-1;
  }
  return fact;
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
