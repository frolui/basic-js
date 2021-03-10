const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSampledateSample(sampleActivity) {

  const TWO_LN_APPROXIMATE = 0.693;

  if (typeof(sampleActivity) !== 'string'){
    return false;
  }

  const isNumber = function (n) {
      return typeof(n) === 'number' && isFinite(n);
  };

  if (isNumber(+sampleActivity) && +sampleActivity < MODERN_ACTIVITY && +sampleActivity > 0) {
      return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (TWO_LN_APPROXIMATE / HALF_LIFE_PERIOD));
  } else {
      return false;
  }

};
