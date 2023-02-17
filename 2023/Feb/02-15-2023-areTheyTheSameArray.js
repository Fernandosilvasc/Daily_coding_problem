/**
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.
 */

function compareArrays(a, b) {
  const squareOfArrayA = []
  const sortedArrayB = b && b.sort(function(a, b){return a - b})
  let result = false;
  if (a === null && b === null || a === [] && b === []) {
    return true;
  }

  if (a === null && b !== null || a !== null && b === null) {
    return false
  }

  if (a.length !== b.length) {
    return false
  }

  a.forEach((number) => squareOfArrayA.push((number * number)))
  squareOfArrayA.sort(function(a, b){return a - b})
  if (squareOfArrayA.join() === sortedArrayB.join()) {
    result = true
  }

  return result;
}

// const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// const b1 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
// const a1 = [6, 5, 6, 6, 8, 10, 10, 9, 5, 5, 10, 1, 2, 9];
// const b1 = [64, 81, 4, 25, 100, 25, 1, 25, 100, 36, 100, 36, 81, 36];

const a1 = [2, 2, 3];
const b1 = [4, 9, 9]
// const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
// const b1 = [231, 14641, 20736, 361, 25921, 361, 20736, 361]
// const a1 = null;
// const b1 = null;

// [10000001, 100000000] and [100000000000000, 10000000000000000]

compareArrays(a1, b1)

// [] , [] = true
// [] , null = false
// null, [] = false

/**
 * function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
 */