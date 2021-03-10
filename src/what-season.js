const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date){
  if(date == null) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error('Fantastic fail');
  }

  const seasonsName = ['spring', 'summer', 'autumn' , 'winter'],
        month = date.getMonth();
  
  if (month == 11 || month <= 1) {
      return seasonsName[3];
  } else if (month <= 4) {
      return seasonsName[0];
  } else if (month <= 7) {
      return seasonsName[1];
  } else if (month <= 10) {
      return seasonsName[2];
  } 
};
