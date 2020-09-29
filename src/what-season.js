const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let seasonsArray = ['winter','winter','spring','spring','spring','summer','summer','summer','fall','fall','fall','winter']
  if(!date)
  {
    return 'Unable to determine the time of year!'
  }
  if(Object.prototype.toString.call(date) !== '[object Date]')
  {
    throw RangeError()
  }
  else{
    return seasonsArray[date.getMonth()]
  }
  
};
