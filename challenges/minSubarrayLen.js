/*
** Write a function called minSubarrayLen which accepts two parameters,
** an array of positive integers and an integer.
** This function should return the minimal length of a contiguous subarray of which
** the sum is greater than or equal to the integer passed to the function. if there
** isn't one, return 0 instead.
*/

const minSubarrayLen = (nums, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end - start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4, 3] is the smallest subarray
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubarrayLen([1, 2, 16, 22, 5, 7, 8, 9, 10], 96)); // 0