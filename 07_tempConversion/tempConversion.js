/*const convertToCelsius = function(f) {
  celsius = (f-32)*(5/9);
  if (celsius%1 !== 0){
    celsius = Number(celsius.toFixed(1));
      return celsius;
  } else {
  return celsius;
  }
  }

  const convertToFahrenheit = function(c) {
  fahrenheit = c*(9/5)+32;
  if (fahrenheit%1 !== 0){
    fahrenheit = Number(fahrenheit.toFixed(1));
      return fahrenheit;
  } else {
  return fahrenheit;
  }
  } */

  const convertToCelsius = function (fahrenheit) {
    return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
  };
  
  const convertToFahrenheit = function (celsius) {
    return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
  };
  
  module.exports = {
    convertToCelsius,
    convertToFahrenheit
  };