const convertToCelsius = function(fVal) {
  return Math.round((fVal - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(cVal) {
  return Math.round(((cVal * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
