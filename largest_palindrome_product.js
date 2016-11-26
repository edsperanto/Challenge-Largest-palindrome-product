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
  var factor0_ans = 0;
  var factor1_ans = 0;

  // do your work here
  factor_0 = 10 * (digits-1);
  factor_1 = 10 * (digits-1);

  // calculate max number for each factor
  for(var i = 0; i < digits; i++) {
    maxNum = (maxNum * 10) + 9;
  }

  // loop through numbers
  for(factor_0; factor_0 < maxNum; factor_0++) {
    for(factor_1; factor_1 < maxNum; factor_1++) {
      product = factor_0 * factor_1;
      if(checkSymmetry(product)) {
        factor0_ans = factor_0;
        factor1_ans = factor_1;
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
    if(fullStr.length % 2 === 0) {
      halfLength = fullStr.length / 2;
    }else{
      halfLength = (fullStr.length - 1) / 2;
    }
    loc2 = halfLength-1;
    str1 = fullStr.substr(0,halfLength);
    str2 = fullStr.substr((halfLength-1), halfLength);
    while(loc1 < halfLength) {
      if(str1.charAt(loc1) !== str2.charAt(loc2)) {
        return false;
      }
      loc1++;
    }
    return true;
  }

  return {
    factor_0 : factor0_ans,
    factor_1 : factor1_ans,
    palindromeNumber : palindromeNumber
  };
};