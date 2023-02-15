/** 
 * ! ###-Challenge 01-### 
 * */

/**
 * !Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
 * !It should remove all values from list a, which are present in list b keeping their order. 
 * */

function arrayDiff(a, b) {
  const result = [];

  if (a.length === 0) {
    return b;
  }

  a.forEach((el) => {
    if (!b.includes(el)) {
      result.push(el)
    }
  })
  return result;
}

// Challenge 02
/* A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False. */

function isFixedPoint(arrayOfNumbers) {
  const numbers = arrayOfNumbers.filter((number, index) => number === index)
  return console.log(numbers.length > 0 ? true : false);
}

isFixedPoint([-6, 0, 2, 40])


