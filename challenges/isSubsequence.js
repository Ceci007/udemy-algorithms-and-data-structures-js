/*
** Write a function called isSubsequence which takes in two strings and checks
** whether the characters in the first string form a subsequence of characters in the
** second string. In other words, the function should check whether the characters
** in the first string appear somewhere in the second string. 
** whitout their order changing.
*/

const isSubsequence = (str1, str2) => {
  let i = 0;
  let j = 0;

  while(j < str2.length) {
    if(str2[j] === str1[i]) i++;
    if(i === str1.length) return true;
    j++;
  }

  return false;
}



console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
