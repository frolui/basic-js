const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(order) {
    if (order === false) { 
        this.order = false;
    } else if ( order === true || order === undefined ) {
        this.order = true;
    } else { throw new Error('creation new instance is failed')}
  }

  keyKreator(message, key) { // DRY - reusable function
      return key.repeat(Math.trunc(message.length / key.length) + 1).substring(0, message.length).toUpperCase();
  }

  encrypt(message, key) {        
        // creation keystr as long as our str
        const keyStr = this.keyKreator(message, key);
               
        let result = '',
            specialCounter = 0; // its special counter for sumbols, which isnt symbol of latin alfabet
        message = message.toUpperCase();

        for (let i = 0; i < message.length; i++) {            
            // check sumbols, which isnt symbol of latin alfabet
            if (message[i].charCodeAt(0) < 65 || message[i].charCodeAt(0) > 90) {
                result += message[i];
                specialCounter++;                
            } else {              
                result += String.fromCharCode((((message[i].charCodeAt(0) - 65) + (keyStr[i - specialCounter].charCodeAt(0) - 65)) % 26) + 65);
            }
        }
        return this.order === false ? result.split('').reverse().join('') : result
    }    
  decrypt(encryptedMessage, key) { 
    // creation keystr as long as our str
    const keyStr = this.keyKreator(encryptedMessage, key);

    let result = '',
        specialCounter = 0; // its special counter for sumbols, which isnt symbol of latin alfabet

    for (let i = 0; i < encryptedMessage.length; i++) {
        // check sumbols, which isnt symbol of latin alfabet
        if (encryptedMessage[i].charCodeAt(0) < 65 || encryptedMessage[i].charCodeAt(0) > 90) {
            result += encryptedMessage[i];
            specialCounter++;                
        } else {
            result += String.fromCharCode(((((encryptedMessage[i].charCodeAt(0) - 65) + 26) - (keyStr[i - specialCounter].charCodeAt(0) - 65))% 26) + 65);
        }
    }
    return this.order === false ? result.split('').reverse().join('') : result    
}
}

module.exports = VigenereCipheringMachine;
