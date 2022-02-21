/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  const numArr = String(num).match(/\d/g)
  let sum = 0
  console.log(numArr)
  for(let i=0; i<numArr.length; i++) {
    sum += Number(numArr[i])
  }
  return sum
}

module.exports = sumDigits;








// function sumDigits(num) {
//   const multiDigit = num.toString().replace(/\D/g, '').split("");
  
//   for (let i = 0; i < multiDigit.length; i++) {
//     multiDigit[i] = Number(multiDigit[i]) 
//   }  
//   const sumWithInitial = multiDigit.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// ) 
// return sumWithInitial;
   
// }
 // const multiDigit = num.toString().replace(/\D/, '').split('')
//    const multiDigit = num.toString().split(/\D/g);
// const multiDigit = num.toString().split(/\D/g);
  // const multiDigit = num.toString().replace(/\D/, '').split('')