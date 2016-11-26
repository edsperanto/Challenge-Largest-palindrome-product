/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){

  // do your work here

  // variables
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var maxNum = 0;
  var product = 0;
  var temp0 = 0;
  var temp1 = 0;

  // calculate max number for each factor
  for(var i = 0; i < digits; i++) {
    maxNum = (maxNum * 10) + 9;
  }

  // loop through numbers
  for(temp0 = 10 * (digits-1); temp0 <= maxNum; temp0++) {
    for(temp1 = 10 * (digits-1); temp1 <= maxNum; temp1++) {
      product = temp0 * temp1; // get product
      // if product is symmetric, confirm new answer
      if(checkSymmetry(product)) {
        factor_0 = temp0;
        factor_1 = temp1;
        // only update palindrome number when product is a bigger number
        if(product > palindromeNumber) {
          palindromeNumber = product;
        }
      }
    }
  }

  // check symmetry
  function checkSymmetry(num) {
    // variables
    var fullStr = num.toString(); // turn num to string
    var fullLength = fullStr.length; // get string length
    var halfLength; // string half length holder
    var match = true; // default match to true
    var i; // holder for position when looping from start
    var j; // holder for position when looping from end

    // get half length depending on if length divisible by 2
    if(fullStr.length % 2 === 0) {
      halfLength = fullStr.length / 2;
    }else{
      halfLength = (fullStr.length - 1) / 2;
    }

    i = 0; // beginning start point
    j = (fullLength - 1); // end start point
    while(i < halfLength) { // loop through string
      if(fullStr.charAt(i) !== fullStr.charAt(j)) { // if one digit does not match
        match = false; // match is false
      }
      i++; // loop from start
      j--; // loop from end
    }

    // return answer
    return match;
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};