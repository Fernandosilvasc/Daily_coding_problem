class RomanNumerals {
  static mainRomanNumbers = {
    '1': 'I',
    '5': 'V',
    '10': 'X',
    '50': 'L',
    '100': 'C',
    '500': 'D',
    '1000': 'M',
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

  static convertNumberToRomanNumber(number) {
    const result = []
    let numberToFind = number;
    number.forEach((digit, index) => {
      const isTheLastDigit = (index + 1) === number.length;
      if (digit > 0 && !isTheLastDigit) {
        numberToFind = this.convertToTenORHundredORThousand(digit, (number.length - (index + 1)))
        let multiplier = this.convertToTenORHundredORThousand(1, (number.length - (index + 1)))
        const foundRomanNumber = this.mainRomanNumbers[numberToFind] ?? this.mainRomanNumbers[multiplier]
        if (digit === 4 || digit === 9) {
          result.push(`${foundRomanNumber}${this.mainRomanNumbers[Number(numberToFind) + Number(multiplier)]}`)
        } else {
          if (digit === 5) {
            result.push(foundRomanNumber)
          } else {
            const tempRomanNumber = []
            const foundRomanNumber = this.mainRomanNumbers[numberToFind]
            if (foundRomanNumber) {
              result.push(foundRomanNumber)
            } else {
              let hasFoundNumber = false;
              let testNumber = numberToFind;
              while (hasFoundNumber === false) {
                const foundNumber = this.mainRomanNumbers[testNumber - multiplier]
                if (foundNumber) {
                  tempRomanNumber.push(foundNumber)
                  hasFoundNumber = true
                  testNumber = testNumber - multiplier
                  const remainingNumberToAdd = ((numberToFind - testNumber) / multiplier);
                  for (let i = 0; i < remainingNumberToAdd; i++) {
                    tempRomanNumber.push(this.mainRomanNumbers[multiplier])
                  }
                }
                testNumber = testNumber - multiplier
              }
            }
            result.push(tempRomanNumber.join(''))
          }
        }
      } else if (digit > 0) {
        const foundRomanNumber = this.mainRomanNumbers[digit]
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
              const foundNumber = this.mainRomanNumbers[testNumber]
              if (foundNumber) {
                tempRomanNumber.push(foundNumber)
                hasFoundNumber = true
                for (let i = 0; i < (numberToFind - testNumber); i++) {
                  tempRomanNumber.push(this.mainRomanNumbers['1'])
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

  static toRoman(number) {
    let isImputedNumberInvalid = false
    const imputedNumber = Array.from(number.toString()).map((str) => Number(str))
    let foundResult = this.mainRomanNumbers[number]
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
          foundResult = `${this.convertNumberToRomanNumber(numbersBiggerThanThousand)}*${this.convertNumberToRomanNumber(numbersLessThanThousand)}`
        }
      } else {
        foundResult = this.convertNumberToRomanNumber(imputedNumber)
      }
    }

    return isImputedNumberInvalid ? 'Invalid Entry' : foundResult;
  }
}

// console.log(TestRomanNumbers.toRoman(4666))
// console.log(TestRomanNumbers.toRoman(6938))
// console.log(TestRomanNumbers.toRoman(110))
console.log(RomanNumerals.toRoman(3999000))
// console.log(TestRomanNumbers.toRoman(11))
