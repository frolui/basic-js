const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let counter = 0;

  array.forEach(element => {
      element.forEach(e => {
          if (e == '^^'){ counter ++; }            
      });
  });

  return counter;
};
