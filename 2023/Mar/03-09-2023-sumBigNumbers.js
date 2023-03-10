function add(a, b) {
  let result = ""; // initialize an empty string to store the result
  let carry = 0; // initialize a variable to store the carry value, which is initially 0

  // iterate through the input strings from right to left, using their length as the limit
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || carry !== 0; i--, j--) {
    // convert each digit to a number, or use 0 if it doesn't exist
    const digit1 = i < 0 ? 0 : parseInt(a.charAt(i));
    const digit2 = j < 0 ? 0 : parseInt(b.charAt(j));

    // add the two digits along with the carry value
    const sum = digit1 + digit2 + carry;

    // calculate the new carry value and the digit to add to the result
    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    // prepend the digit to the result string
    result = digit + result;
  }

  return result; // return the final result string
}

add('63829983432984289347293874', '90938498237058927340892374089')