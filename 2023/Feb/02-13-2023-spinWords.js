function spinWords(string) {
  const stringSplitted = string.split(' ');
  let newStrArray = [];
  let result = '';
  const wordReverse = (word) => {
    return Array.from(word).reverse().join('')
  }
  if (stringSplitted.length > 1) {
    stringSplitted.forEach((word) => {
      word.length >= 5 ? newStrArray.push(wordReverse(word) + ' ') : newStrArray.push(word + ' ')
    })
  } else if (stringSplitted.length === 1 && string.length >= 5) {
    newStrArray.push(wordReverse(string))
  } else {
    newStrArray.push(string)
  }
  
  newStrArray.forEach(string => {
    result += string
  });

  return result.trim();
}

spinWords("Hey fellow warriors")
spinWords("wd")
spinWords("Welcome")

/* 
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
*/