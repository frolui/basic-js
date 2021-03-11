const CustomError = require("../extensions/custom-error");

module.exports = function  repeater(str, options){
  
  // check type of str
  if (typeof(str) !== 'string') {
      str = String(str);
  }
  // function to check type of numbers
  const isNumber = function (n) {
      return typeof(n) === 'number' && isFinite(n);
  };     
  
  // check options object
  if (options === undefined || Object.keys(options).length === 0) {
      console.log(str)
  } else {
      
      // check options.addition and type of them and insallation default value
      if (typeof(options.addition) === 'boolean' ) {
          options.addition = options.addition.toString();
      } if (options.addition === null){
            options.addition = String(options.addition);
      } else if (options.addition) {
          if (typeof(options.addition) !== 'string') {
            options.addition = String(options.addition);
              }            
          } else {
              options.addition = '';
          }

      // check options.separator,type of them and insallation default value
      if (options.separator && options.separator.length > 0) {
          if (typeof(options.separator) !== 'string') {
              options.separator = String(options.separator);
          }
      } else {
          options.separator = '+';
      }

      // check options.additionSeparator,type of them and insallation default value
      if (options.additionSeparator && options.additionSeparator.length > 0) {
          if (typeof(options.additionSeparator) !== 'string') {
              options.additionSeparator = String(options.additionSeparator);
          }
      } else if (options.additionRepeatTimes === 1) {
          options.additionSeparator = '';
      } else {
          options.additionSeparator = '|';
      }

      // check options.repeatTimes and insallation default value
      if (isNumber(options.repeatTimes)) {
          options.repeatTimes = Math.trunc(options.repeatTimes);
      }  

      // check options.additionRepeatTimes and insallation default value
      if (isNumber(options.additionRepeatTimes)) {
          options.additionRepeatTimes = Math.trunc(options.additionRepeatTimes);
      } 
      // else {options.additionRepeatTimes = 0;}
  }

  
    if (options.additionRepeatTimes === 0 && options.repeatTimes !== undefined){
        const partGeneral = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes) + options.separator).repeat(options.repeatTimes -1);
        return partGeneral + str;
    } else if (options.additionRepeatTimes === 1 && options.repeatTimes !== undefined){
        const partGeneral = (str + options.addition + options.separator).repeat(options.repeatTimes -1);
        return partGeneral + str + options.addition;
    } else if (!options.repeatTimes) {
        return str + options.addition ;
    } else {
        const partGeneral = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1)+ options.addition + options.separator).repeat(options.repeatTimes -1);
        return partGeneral + str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1)+ options.addition;
    }
};