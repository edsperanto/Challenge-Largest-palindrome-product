/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var maxNum = 0;
  var product = 0;
  var temp0 = 0;
  var temp1 = 0;

  // do your work here

  // calculate max number for each factor
  for(var i = 0; i < digits; i++) {
    maxNum = (maxNum * 10) + 9;
  }

  // loop through numbers
  for(temp0 = 10 * (digits-1); temp0 <= maxNum; temp0++) {
    for(temp1 = 10 * (digits-1); temp1 <= maxNum; temp1++) {
      product = temp0 * temp1;
      if(checkSymmetry(product)) {
        factor_0 = temp0;
        factor_1 = temp1;
        palindromeNumber = product;
      }
    }
  }

  // check symmetry
  function checkSymmetry(num) {
    var fullStr = num.toString();
    var halfLength;
    var str1;
    var str2;
    var loc1 = 0;
    var loc2;
    var fullMatch = false;
    if(fullStr.length % 2 === 0) {
      halfLength = fullStr.length / 2;
    }else{
      halfLength = (fullStr.length - 1) / 2;
    }
    loc2 = halfLength-1;
    str1 = fullStr.substr(0,halfLength);
    str2 = fullStr.substr((halfLength-1), halfLength);
    console.log(fullStr);
    return fullMatch;
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};