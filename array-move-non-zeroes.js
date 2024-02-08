'use strict';

/*
 * Given an array of integers, move all non-zero elements to the front of
 * the array (in-place).
 * Return the count of non-zero elements.
 * 
 * Input: an array of integers
 * Output: count of non-zero elements
**/

// 1. Var to hold count
// 2. Loop thru array
// 3. If element is not a zero
//    - save element in var
//    - prepend element to front of array
//    - remove original element (index + 1)
//    - count++
// 4. Return count

function moveNonZeroes(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr.unshift(arr[i]);
      arr.splice(i + 1, 1);
      count++;
    }
  }
  console.log(arr);
  return count;
}

console.log(moveNonZeroes([0, 1]));
console.log(moveNonZeroes([0, 0, 1, 2, 0]));
console.log(moveNonZeroes([8, 0, -1, 0, 4, 4, 5048]));
console.log(moveNonZeroes([3, 0, 7, 2, 5]));
console.log();


// 1. Setup count var
// 2. Loop through array
// 3. Check each element for non-zero
// 4. If non-zero push onto front of array
// 5. Remove element from old position
// 6. Continue loop

function nonZeroes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr.unshift(arr[i]);
      arr.splice(i + 1, 1);
      count++;
    }
  }
  console.log(arr);
  return count;
}

console.log(nonZeroes([0, 1]));
console.log(nonZeroes([0, 0, 1, 2, 0]));
console.log(nonZeroes([8, 0, -1, 0, 4, 4, 5048]));
console.log(nonZeroes([3, 0, 7, 2, 5]));
