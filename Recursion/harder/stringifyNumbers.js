/*
** Write a function called stringifyNumbers which takes in an object and
** finds all of the values which are numbers and converts them to strings.
** Recursion would be a great way to solve this!
*/

const stringifyNumbers = obj => {
  let result = {};

  for(let key in obj) {
    if(typeof obj[key] === 'number') {
      result = obj[key].toString();
    } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result = stringifyNumbers(obj[key])
    } else if(Array.isArray(obj[key])) {
      result[key] = obj[key];
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj)); // 66

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/