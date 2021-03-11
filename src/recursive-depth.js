const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth (array) {
      if (Array.isArray(array)) {
          if (array.length == 0) {
              array.push(1);
              return 1 + Math.max(...array.map(e => this.calculateDepth(e)))
          } else {
              return 1 + Math.max(...array.map(e => this.calculateDepth(e)))
          }
          
      } else {
          return 0
      }
    }

};