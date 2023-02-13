// Split Strings - Challenge

/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] 

*/

function solution(str) {
  const test = Array.from(str)
  let newStr = '';
  const result = [];
  if (test.length > 0) {
    for (let i = 0; i <= test.length; i++) {
      if (!test.length % 2 === 0) {
        if (!(i % 2 === 0)) {
          if (i === test.length) {
            result.push(`${newStr}_`)
          } else {
            newStr += test[i]
            result.push(newStr);
          }
        } else {
          newStr = test[i]
        }
      }
    }
  }
  console.log(result)
  return result;
}

solution("abc")
solution("abcdef")