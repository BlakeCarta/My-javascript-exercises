const convertToCelsius = function(temp) {
  temp = (temp - 32) * (5/9);
  let conTemp = Math.round(temp * 10)/10;
  //console.log(`ToCels ${temp}`);
  return conTemp;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * (9/5) + 32);
  let conTemp = Math.round(temp * 10)/10;
  //console.log(`ToFahr ${temp}`);
  return conTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
