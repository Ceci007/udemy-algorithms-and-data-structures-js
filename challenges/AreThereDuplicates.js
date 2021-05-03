/*
** Implement a function called, areThereDuplicates which accepts a variable number
** of arguments, and checks whether there are any duplicates among the arguments
** pass in.
*/

const areThereDuplicates = (...args) => {
  const argsArr = [...args];
  const argsCount = {};

  for(let i = 0; i < argsArr.length; i++) 
    argsCount[argsArr[i]] = (argsCount[argsArr[i]] || 0) + 1;

  for(let value in argsCount) 
    if(argsCount[value] > 1) return true;

  return false;
}

console.log([1, 2, 3], areThereDuplicates(1, 2, 3)); // false
console.log([1, 2, 2], areThereDuplicates(1, 2, 2)); // true
console.log(['a', 'b', 'c', 'a'], areThereDuplicates('a', 'b', 'c', 'a')); // true
