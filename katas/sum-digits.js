/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/
function sumDigits(num) {
  //change number to string then split the number
  const sum = num.toString().split('');
  
  //change string back to Number
  var digit = sum.map(num => Number(num))
  var newDigit = sum.filter(Number).map(num => Number(num))

  //add the numbers together => for loop
  let total = 0;
  for(let i = 0; i < newDigit.length; i++) {
  const currentDigit = newDigit[i]
  total += currentDigit
  }
  return total
  }

module.exports = sumDigits;

//return digit.reduce((prevNum, currentNum) => prevNum + currentNum, 0)