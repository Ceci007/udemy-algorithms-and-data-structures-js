/*
** Write a recursive function called capitalizeFirst. Given an array of strings,
** capitalize the first letter of each string in the array.
*/

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

const capitalizeFirst = array => {
  if(array.length === 1) {
    let str = array[0];
    return [str[0].toUpperCase() + str.substring(1)]
  }

  let result = capitalizeFirst(array.slice(0, -1));
  let str = array.slice(array.length - 1)[0];
  result.push(str[0].toUpperCase() + str.substring(1));
  return result;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']