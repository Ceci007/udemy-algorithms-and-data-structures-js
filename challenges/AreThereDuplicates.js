/*
** Implement a function called, areThereDuplicates which accepts a variable number
** of arguments, and checks whether there are any duplicates among the arguments
** pass in.
*/

const areThereDuplicates = (...arguments) => {
  args = [...arguments];
  let collection = {};

  for(let i = 0; i < args.length; i++) {
    collection[args[i]] = (collection[args[i]] || 0) + 1;
  }

  for(let key in collection) {
    if(collection[key] > 1) return true;
  }

  return false;
}



console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
