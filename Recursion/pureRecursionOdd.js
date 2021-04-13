// Try to collect all the odd values in an array (use pure recursion)

const collectOddValues = (arr) => {
  let newArr = [];

  if(arr.length === 0) return newArr;

  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));