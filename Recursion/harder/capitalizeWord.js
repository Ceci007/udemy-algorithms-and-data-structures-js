/*
** Write a recursive function called capitalizeFirst. Given an array of strings,
** capitalize each letter of every word.
*/

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

const capitalizeWords = array => {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  let result = capitalizeWords(array.slice(0, -1));
  result.push(array.slice(array.length-1)[0].toUpperCase());

  return result;
}

console.log(capitalizeWords(['car','taco','banana'])); // ['Car','Taco','Banana']