const convertToCelsius = function(fahrenheit) {
  let temp = (fahrenheit - 32) * (5/9);

  if(temp%1 != 0){
    temp = temp.toFixed(1);
    temp = parseFloat(temp, 10);
    return temp;
  }
  else{
    return temp;
  }
};

const convertToFahrenheit = function(celcius) {
  let temp = (9/5)*celcius + 32
  
  if(temp%1 != 0){
    temp = temp.toFixed(1);
    temp = parseFloat(temp, 10);
    return temp;
  }
  else{
    return temp;
  }
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
