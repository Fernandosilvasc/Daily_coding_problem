/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */


const alphabetic = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]

function rot13(message) {
  const regex = /^[a-zA-Z]+$/;
  const newMessage = []
  Array.from(message).forEach((letter) => {
    const isLetterUppercase = (letter === letter.toUpperCase())
    const indexOfLetter = alphabetic.indexOf(isLetterUppercase ? letter.toLowerCase() : letter);
    if (!regex.test(letter)) {
      newMessage.push(letter)
    } else {
      let newIndex = 0;
      let newLetter = '';
      if ((alphabetic.length - (indexOfLetter +1)) < 13) {
        newIndex = ((alphabetic.length - (indexOfLetter)) -13) * -1;
      } else {
        newIndex = (indexOfLetter + 13)
      }
      newLetter = isLetterUppercase ? alphabetic[newIndex].toLocaleUpperCase() : alphabetic[newIndex]
      newMessage.push(newLetter)
    }
  });
  console.log(newMessage.join(''))
  return newMessage.join('');
}

rot13('tEst');

/**
 * function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
 */