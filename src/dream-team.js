const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let abr = [];

  if (Object.prototype.toString.call(members) !== '[object Array]') {
    return false;
  }  

  members.forEach(element => {
      if (typeof(element) === 'string' && element !== '') {
        abr.push(element.trim()[0].toUpperCase()); 
      }             
  });

  return abr.sort().join('');
};
