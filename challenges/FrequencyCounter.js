/*
** Write a function called sameFrequency. Given two positive integers,
** find out if the two numbers have the same frequency of digits.
*/

const sameFrequency = (a, b) => {
  const aStr = a.toString();
  const bStr = b.toString();
  const aCounter = {};
  const bCounter = {};

  if(aStr.length !== bStr.length) return false;

  for(let i = 0; i < aStr.length; i++) {
    aCounter[aStr[i]] = (aCounter[aStr[i]] || 0) + 1;
  }

  for(let j = 0; j < aStr.length; j++) {
    bCounter[bStr[j]] = (bCounter[bStr[j]] || 0) + 1;
  }

  for(let k in aCounter) {
    if(aCounter[k] !== bCounter[k]) return false;
  }

  return true;
}


console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

/*
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
*/

/*
const sameFrequency = (num1, num2) => {
  num1Str = num1.toString();
  num2Str = num2.toString();

  let collection1 = {};
  let collection2 = {};

  if(num1Str.length !== num2Str.length) return false;

  for(let i = 0; i < num1Str.length; i++) {
    collection1[num1Str[i]] = (collection1[num1Str[i]] || 0) + 1;
  }

  for(let j = 0; j < num2Str.length; j++) {
    collection2[num2Str[j]] = (collection2[num2Str[j]] || 0) + 1;
  }

  for(let value in collection1) {
    if(collection1[value] !== collection2[value]) return false;
  }

  return true;
}
*/