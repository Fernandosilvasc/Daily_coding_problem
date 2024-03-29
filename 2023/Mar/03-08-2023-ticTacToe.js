/**
 * If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0]
]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
 */

function isSolved(board) {
  let hasBoardAnyEmptySpot = false
  board.forEach((arrayOfNumbers) => {
    const hasEmptySpot = arrayOfNumbers.includes(0)
    if (hasEmptySpot) {
      hasBoardAnyEmptySpot = true;
    }
  })
  const row1 = checkRowOrColumnResult(board[0]);
  const row2 = checkRowOrColumnResult(board[1]);
  const row3 = checkRowOrColumnResult(board[2]);
  const column1 = checkRowOrColumnResult([board[0][0], board[1][0], board[2][0]]);
  const column2 = checkRowOrColumnResult([board[0][1], board[1][1], board[2][1]]);
  const column3 = checkRowOrColumnResult([board[0][2], board[1][2], board[2][2]]);
  const columnX1 = checkRowOrColumnResult([board[0][0], board[1][1], board[2][2]]);
  const columnX2 = checkRowOrColumnResult([board[2][0], board[1][1], board[0][2]]);

  const boardChecked = [row1, row2, row3, column1, column2, column3, columnX1, columnX2].filter((number) => number !== -1)
  let result = 0;
  if (boardChecked.length === 0 && hasBoardAnyEmptySpot) {
    result = -1;
  }
  if (boardChecked.length > 0) {
    result = boardChecked[0];
  }

  return result;
}

function checkRowOrColumnResult(arrayOfNumbers) {
  const foundValue = arrayOfNumbers.reduce((acc, cur) => {return (acc === cur && acc !== 0) ? (cur) : (-1)})
  return foundValue === -1 ? -1 : foundValue;
}

isSolved([
  [1, 2, 0],
  [0, 1, 2],
  [0, 0, 1]]
)




/**
 * function isSolved(board) {
  board = board.join('-').replace(/,/g,'');
  if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if(/0/.test(board)) return -1;
  return 0;
}
 */

