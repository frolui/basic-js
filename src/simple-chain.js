const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength : () => {return this.chain.length; },
  addLink : function(value) {
    if (value === undefined) {
      value = '';
    }
    if (value === null) {
      value = 'null';
    }
      this.chain.push(value);
      return this;
  },
  removeLink : function(position) {
    if (typeof(position) !== 'number' || position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error('blablabla') ;
    } else {
      this.chain.splice(position -1, 1);
      return this;
    }
  },
  reverseChain : function() {
      this.chain.reverse();
      return this;
  },
  finishChain : function() {
      let chains = this.chain.map((e) => '( ' + e + ' )');
      chains = chains.join('~~');
      this.chain = [];
      return chains;        
  },
  chain : []
};

module.exports = chainMaker;
