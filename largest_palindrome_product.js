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
        if(product > palindromeNumber) {
          palindromeNumber = product;
        }
      }
    }
  }

  // check symmetry
  function checkSymmetry(num) {
    var fullStr = num.toString();
    var fullLength = fullStr.length;
    var halfLength;
    var match = true;
    var i;
    var j;
    if(fullStr.length % 2 === 0) {
      halfLength = fullStr.length / 2;
    }else{
      halfLength = (fullStr.length - 1) / 2;
    }
    i = 0;
    j = (fullLength - 1);
    for(i; i < halfLength; i++) { // loop from beginnning

      if(fullStr.charAt(i) !== fullStr.charAt(j)) {
        match = false;
      }
      j--;
      //console.log(fullStr, fullStr.charAt(i), fullStr.charAt(j), match);
    }
    return match;
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};