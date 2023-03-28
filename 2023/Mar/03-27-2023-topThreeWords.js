/**
 * Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
 */

/**
 * Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]
Bonus points (not really, but just for fun):
Avoid creating an array whose memory footprint is roughly as big as the input text.
Avoid sorting the entire array of unique words.
 */


function topThreeWords(str) {
  const regex = /[#,\\/.\\.{3},]/

  str = Array.from(str.toLowerCase()).map(char => {
    if (!regex.test(char)) {
      return char
    }
  }).join('').split(' ').filter((char) => {
    if (char !== '' || char !== ' ') {
      return char
    }
  })

  const temp = [];
  let duplicatesWords = {};

  str.forEach((word) => {
    const found = str.filter((el) => el === word)
    if (found.length > 1) {
      found.forEach((item) => {
        if (!temp.includes(item)) {
          const word = {
            [item]: found.length
          }
          temp.push(item)
          duplicatesWords = Object.assign(duplicatesWords, word)
        }
      })
    }
  })

  console.log("🚀 ~ file: 03-27-2023.js:61 ~ found.forEach ~ duplicatesWords:", duplicatesWords)

  const orderedFoundWordsByFrequency = Object.values(duplicatesWords).reduce((sorted, el) => {
    let index = 0;
    while (index < sorted.length && el < sorted[index]) index++;
    sorted.splice(index, 0, el);
    return sorted;
  }, []);
  console.log("🚀 ~ file: 03-27-2023.js:74 ~ orderedFoundWordsByFrequency ~ orderedFoundWordsByFrequency:", orderedFoundWordsByFrequency)

  const tempResult = []

  if (orderedFoundWordsByFrequency.length <= 2) {
    if (orderedFoundWordsByFrequency.length === 0) {
      for (let i = 0; i < 3; i++) {
        if (str[i]) {
          tempResult.push(str[i])
        }
      }
    } else {
      orderedFoundWordsByFrequency.forEach((word) => {
        Object.keys(duplicatesWords).forEach((key) => {
          if (duplicatesWords[key] === word) {
            if (!tempResult.includes(key)) {
              tempResult.push(key)
            }
          }
        })
      })
      const remainingWords = Array.from(str).filter((word) => !Object.keys(duplicatesWords).includes(word))
      for (let i = 0; (i < remainingWords.length); i++) {
        if (remainingWords[i]) {
          if (tempResult.length <= 2) {
            tempResult.push(remainingWords[i])
          }
        }
      }
    }
  } else {
    orderedFoundWordsByFrequency.forEach((value) => {
      Object.keys(duplicatesWords).forEach((key) => {
        if (duplicatesWords[key] === value && tempResult.length <= 2) {
          if (!tempResult.includes(key)) {
            tempResult.push(key)
          }
        }
      })
    })
  }

  const result = tempResult.filter((char) => char !== "'")

  return console.log(result)
}

// topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")

// topThreeWords("  , e, a, b, c   .. ")

// topThreeWords("  //wont won't won't ")
// topThreeWords("a a a  b  c c  d d d d  e e e e e")
// topThreeWords("  ...  ")
// topThreeWords("  '  ")
// topThreeWords("a a c b b")
topThreeWords("The cat yelled against a dresser against a doll against a dresser for the jedi")