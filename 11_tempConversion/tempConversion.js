const convertToCelsius = function(tempInFahrenheit) {
  return Math.round((((tempInFahrenheit-32)*5)/9),1);
};

const convertToFahrenheit = function(tempInCelsius) {
  return Math.round((tempInCelsius*(9/5)+32),1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
