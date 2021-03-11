const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr){
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        throw new Error('Fantastic fail');
    }

    let arrayDeepCopy = [];     
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            if (i <= arr.length -3){
                i++;
            }
        } else if (arr[i] === '--discard-prev') {
            if (i !== 0 && arr[i-2] !== '--discard-next') { 
                arrayDeepCopy.pop();
            }
        } else if (arr[i] === '--double-next') {
            if (arr[i+1] !== undefined ){ 
                arrayDeepCopy.push(arr[i+1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (arr[i-1] !== undefined && arr[i-2] !== '--discard-next' ){
                arrayDeepCopy.push(arr[i-1]);
            }
        } else {
            arrayDeepCopy.push(arr[i]);
        }
    }
    return arrayDeepCopy;
};