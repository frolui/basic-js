const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnSpeed){
  let turns = Math.pow(2, diskNumber) - 1

  const answer = {
      turns: turns,
      seconds : Math.floor((turns / turnSpeed)*3600),
  };

  return answer    
};
