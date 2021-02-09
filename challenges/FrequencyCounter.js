/*
** Write a function called sameFrequency. Given two positive integers,
** find out if the two numbers have the same frequency of digits.
*/

const sameFrequency = (num1, num2) => {
  strNum1 = num1.toString();
  strNum2 = num2.toString();

  if(strNum1.length !== strNum2.length) return false;

  countNum1 = {};
  countNum2 = {};

  for(let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for(let j = 0; j < strNum2.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for(let value in countNum1) {
    if(countNum1[value] !== countNum2[value]) return false
  }

  return true;
}



/*
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
*/