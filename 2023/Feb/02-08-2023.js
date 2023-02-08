/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

const s1 = "xyaabbbccccdefww";
const s2 = "xxxxyyyyabklmopq";

function longest(str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") {
    const input = (Array.from(str1).concat(Array.from(str2))).sort()
    const newArrayWithNoDuplicates = input.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      return [...accumulator, currentValue];
      }
      return accumulator;
    }, []);
    return console.log(newArrayWithNoDuplicates.join(''))
  }
  throw Error("The input provided are not string!")
}

longest(s1, s2)