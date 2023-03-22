class RomanNumerals {
  static toRomanNumerals = {
    '1': 'I',
    '5': 'V',
    '10': 'X',
    '50': 'L',
    '100': 'C',
    '500': 'D',
    '1000': 'M',
  }

  static fromRomanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  static convertToTenORHundredORThousand(number, length) {
    if (length === 0) return 0;
    const result = [number]

    if (length > 0 && number > 0) {
      for (let i = 0; i < length; i++) {
        result.push(0)
      }
    }

    return result.join('')
  }

  static convertToRomanNumber(number) {
    const result = []
    let numberToFind = number;
    number.forEach((digit, index) => {
      const isTheLastDigit = (index + 1) === number.length;
      if (digit > 0 && !isTheLastDigit) {
        numberToFind = this.convertToTenORHundredORThousand(digit, (number.length - (index + 1)))
        let multiplier = this.convertToTenORHundredORThousand(1, (number.length - (index + 1)))
        const foundRomanNumber = this.toRomanNumerals[numberToFind] ?? this.toRomanNumerals[multiplier]
        if (digit === 4 || digit === 9) {
          result.push(`${foundRomanNumber}${this.toRomanNumerals[Number(numberToFind) + Number(multiplier)]}`)
        } else {
          if (digit === 5) {
            result.push(foundRomanNumber)
          } else {
            const tempRomanNumber = []
            const foundRomanNumber = this.toRomanNumerals[numberToFind]
            if (foundRomanNumber) {
              result.push(foundRomanNumber)
            } else {
              let hasFoundNumber = false;
              let testNumber = numberToFind;
              while (hasFoundNumber === false) {
                const foundNumber = this.toRomanNumerals[testNumber - multiplier]
                if (foundNumber) {
                  tempRomanNumber.push(foundNumber)
                  hasFoundNumber = true
                  testNumber = testNumber - multiplier
                  const remainingNumberToAdd = ((numberToFind - testNumber) / multiplier);
                  for (let i = 0; i < remainingNumberToAdd; i++) {
                    tempRomanNumber.push(this.toRomanNumerals[multiplier])
                  }
                }
                testNumber = testNumber - multiplier
              }
            }
            result.push(tempRomanNumber.join(''))
          }
        }
      } else if (digit > 0) {
        const foundRomanNumber = this.toRomanNumerals[digit]
        if (foundRomanNumber) {
          result.push(foundRomanNumber)
        } else {
          if (digit === 4 || digit === 9) {
            digit === 4 ? result.push('IV') : result.push('IX')
          } else {
            numberToFind = digit;
            let testNumber = numberToFind
            let hasFoundNumber = false;
            const tempRomanNumber = []
            while (hasFoundNumber === false) {
              const foundNumber = this.toRomanNumerals[testNumber]
              if (foundNumber) {
                tempRomanNumber.push(foundNumber)
                hasFoundNumber = true
                for (let i = 0; i < (numberToFind - testNumber); i++) {
                  tempRomanNumber.push(this.toRomanNumerals['1'])
                }
              }
              testNumber = testNumber - 1
            }
            result.push(tempRomanNumber.join(''))
          }
        }
      }
    })
    return result.join('')
  }

  static convertFromRomanNumber(str) {
    const imputedRomanNumber = Array.from(str)
    let tempResult = []
    const romanNumbersToConvert = []

    if (imputedRomanNumber) {
      imputedRomanNumber.forEach((number, index) => {
        const testCase1 = this.fromRomanNumerals[number]
        const testCase2 = this.fromRomanNumerals[imputedRomanNumber[index + 1]]
        if (testCase1 > testCase2 && tempResult.length === 0) {
          romanNumbersToConvert.push(number)
        } else {
          if (testCase1 < testCase2) {
            tempResult.push(number)
          } else {
            romanNumbersToConvert.push(`${tempResult.join('')}${number}`)
            tempResult = []
          }
        }
      })
    }

    if (romanNumbersToConvert.length > 0) {
      romanNumbersToConvert.forEach((romanNumber) => {
        if (romanNumber.length === 1) {
          tempResult.push(this.fromRomanNumerals[romanNumber])
        } else {
          const number1 = this.fromRomanNumerals[romanNumber.charAt(0)]
          const number2 = this.fromRomanNumerals[romanNumber.charAt(1)]
          tempResult.push(number2 - number1)
        }
      })
    }

    const result = tempResult.reduce((acc, ccv) => acc + ccv, 0)

    return result;
  }

  static toRoman(number) {
    /* if the imputed number is bigger than 3999 will be adding the symbol '*' to indicate that every symbol before it means multiple by thousand. (3999500 => MMMCMXCIX*D) */
    let isImputedNumberInvalid = false
    const imputedNumber = Array.from(number.toString()).map((str) => Number(str))
    let foundResult = this.toRomanNumerals[number]
    if (foundResult) {
      return foundResult
    } else {
      if (number >= 4000) {
        if (number >= 4000000) {
          isImputedNumberInvalid = true
        } else {
          const numbersLessThanThousand = []
          const numbersBiggerThanThousand = (imputedNumber.length - 4) > 0 ? (imputedNumber.filter((str, index) => {
            if ((index) <= (imputedNumber.length - 4)) {
              return str
            } else {
              numbersLessThanThousand.push(str)
            }
          })) : ([imputedNumber[0]]);
          foundResult = `${this.convertToRomanNumber(numbersBiggerThanThousand)}*${this.convertToRomanNumber(numbersLessThanThousand)}`
        }
      } else {
        foundResult = this.convertToRomanNumber(imputedNumber)
      }
    }

    return isImputedNumberInvalid ? 'Invalid Entry' : foundResult;
  }

  static fromRoman(str) {
    /* if the imputed number is bigger than 3999 will come with the symbol '*' to indicate that every symbol before it means multiple by thousand. (3999500 => MMMCMXCIX*D) */
    const isBiggerNumber = str.includes('*')
    const tempResult = []
    let result = []
    if (isBiggerNumber) {
      const imputedRomanNumber = str.split('*')
      const bigNumber = imputedRomanNumber[0]
      const smallNumber = imputedRomanNumber[1]
      tempResult.push(this.convertFromRomanNumber(bigNumber), this.convertFromRomanNumber(smallNumber))

      result = tempResult.join('')
      return result
    } else {
      result = this.convertFromRomanNumber(str)
      return result
    }
  }
}

// console.log(RomanNumerals.toRoman(4666))
// console.log(RomanNumerals.toRoman(6938))
// console.log(RomanNumerals.toRoman(110))
// console.log(RomanNumerals.toRoman(3999500))
// console.log(RomanNumerals.fromRoman('MCMXC'))
// console.log(RomanNumerals.fromRoman('MDCLXVI'))
// console.log(RomanNumerals.fromRoman('MMMCMXCIX*D'))

/**
 * var numerals = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
];

RomanNumerals = {
  toRoman: function(v) {
    var s = '';
    numerals.forEach(function(n) {
      while (v >= n[1]) {
        s += n[0];
        v -= n[1]; 
      }
    });
    return s;
  },
  fromRoman: function(s) {
    var v = 0;
    numerals.forEach(function(n) {
      while (s.substr(0, n[0].length) == n[0]) {
        s = s.substr(n[0].length);
        v += n[1];
      }
    });
    return v;
  }
};
 */