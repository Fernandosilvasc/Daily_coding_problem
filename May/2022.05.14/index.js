/* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. */

const numbers = [20, 15, 8, 27]
const k = 35;

function checkArrayOfNumber(numbers, k) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j > i) {
        if ((numbers[i] + numbers[j]) === k) {
          result.push([numbers[i], numbers[j]])
        }
      }
    }
  }
  
  if (result.length) {
    console.log(true, result)
  } else {
    return console.log(false)
  }
}

checkArrayOfNumber(numbers, k);

