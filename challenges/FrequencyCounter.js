/*
** Write a function called sameFrequency. Given two positive integers,
** find out if the two numbers have the same frequency of digits.
*/

const sameFrequency = (a, b) => {
  const aDigits = a.toString();
  const bDigits = b.toString();
  const aCount = {};
  const bCount = {};

  if(aDigits.length !== bDigits.length) return false;

  for(let i = 0; i < aDigits.length; i++)
    aCount[aDigits[i]] = (aCount[aDigits[i]] || 0) + 1;

  for(let i = 0; i < bDigits.length; i++)
    bCount[bDigits[i]] = (bCount[bDigits[i]] || 0) + 1;

  for(let value in aCount) 
    if(aCount[value] !== bCount[value]) return false;
    
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
