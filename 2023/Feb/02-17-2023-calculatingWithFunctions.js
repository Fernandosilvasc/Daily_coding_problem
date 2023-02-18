/**
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
 */

function calculate(operator, valueA1, valueB2) {
  const value1 = valueA1 === '0' ? 0 : valueA1;
  const value2 = valueB2 === '0' ? 0 : valueB2;
  let result = 0
  if (operator === '*') {
    result = value1 * value2;
  } else if (operator === '/') {
    result = Math.trunc(value1 / value2);
  } else if (operator === '-') {
    result = value1 - value2;
  } else if (operator === '+') {
    result = value1 + value2;
  }
  return result;
}

function zero(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 0, value);
    }
  }
  return '0';
}

function one(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 1, value);
    }
  }
  return 1;
}

function two(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 2, value);
    }
  }
  return 2;
}

function three(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 3, value);
    }
  }
  return 3;
}

function four(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 4, value);
    }
  }
  return 4;
}

function five(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 5, value);
    }
  }
  return 5;
}

function six(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 6, value);
    }
  }
  return 6;
}
function seven(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 7, value);
    }
  }
  return 7;
}
function eight(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 8, value);
    }
  }
  return 8;
}
function nine(expression) {
  if (expression) {
    const [operator, value] = expression;
    if (operator && value) {
      return calculate(operator, 9, value);
    }
  }
  return 9;
}

function plus(value) {
  return ['+', value];
}
function minus(value) {
  return ['-', value];
}
function times(value) {
  return ['*', value];
}
function dividedBy(value) {
  return ['/', value];
}


seven(times(five ()))
four(plus(nine()))
eight(minus(three()))
six(dividedBy(two()))
two(times(zero()))

/**
 * function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(n) {return function(v) {return v + n}}
function minus(n) {return function(v) {return v - n}}
function times(n) {return function(v) {return v * n}}
function dividedBy(n) {return function(v) {return v / n}}
 */