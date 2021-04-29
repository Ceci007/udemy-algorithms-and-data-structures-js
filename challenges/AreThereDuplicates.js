/*
** Implement a function called, areThereDuplicates which accepts a variable number
** of arguments, and checks whether there are any duplicates among the arguments
** pass in.
*/

const areThereDuplicates = (...args) => {
  const argsArray = [...args];
  const argsCounter = {};

  for(let i = 0; i < argsArray.length; i++) {
    argsCounter[argsArray[i]] = (argsCounter[argsArray[i]] || 0) + 1;
  }

  for(let j = 0; j < argsArray.length; j++) {
    if(argsCounter[argsArray[j]] > 1) return true;
  }

  return false;
}

console.log([1, 2, 3], areThereDuplicates(1, 2, 3)); // false
console.log([1, 2, 2], areThereDuplicates(1, 2, 2)); // true
console.log(['a', 'b', 'c', 'a'], areThereDuplicates('a', 'b', 'c', 'a')); // true

/*
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
*/


/*
const areThereDuplicates = (...args) => {
  const argsArr = [...args];
  let collection = {};

  for(let i = 0; i < argsArr.length; i++) {
    collection[argsArr[i]] = (collection[argsArr[i]] || 0) + 1;
  }

  for(let value in collection) {
    if(collection[value] > 1) return true;
  }

  return false;
}
*/