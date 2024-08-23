const add = function(...args) {
	return args.reduce((total, num) => total + num);
};

const subtract = function(...args) {
	return args.reduce((total, num) => total - num);
};

const sum = function(arr) {
	if (arr.length == 0) {return 0}
  else {
    return arr.reduce((total, sum) => total + sum);
  }
};

const multiply = function(arr) {
  if (arr.length == 0) {return 0}
  else {
    return arr.reduce((total, num) => total * num);
  }
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {

  if (num == 0) return 1;

  let total = 1
	for (let i=num; i>0; --i) {
    total *= i
  }
  return total;
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
