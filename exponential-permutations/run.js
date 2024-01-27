'use strict';

/**
 * base = number of possible values / number base, such as 2 for binary or 8 for octal
 * n = exponent / array length
 * base^n = number of permutations
**/

function go(base, array) {
  for (let i = 0; i < Math.pow(base, array.length); i++) {
    let amt = i;
    for (let j = array.length - 1, index = 0; j >= 0; j--, index++) {
      let columnScore = Math.pow(base, j);
      if (amt > 0 && amt >= columnScore) {
	array[index] = Math.floor(amt / columnScore);
	amt -= columnScore * Math.floor(amt / columnScore);
      } else {
	array[index] = 0;
      }
    }
    console.log(array);
  }
}

// Fill array
let array = [];
for (let i = 0; i < process.argv[3]; i++) {
  array.push(0);
}

go(process.argv[2], array);

