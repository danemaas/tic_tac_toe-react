//this function will check if the winning combinations were already met
export function checkWinner(board) {
  //set all the possible winning board combinations
  const winningCombinations = [
    //rows
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    //columns
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    //diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  //iterate all winning board combinations
  for (const combination of winningCombinations) {
    //this will desctructure each combinations in a row which will be
    //a, b and c: as the first, second and third row respectively of the combination
    //this means each will be having a row and col indices like [a[0]][a[1]]
    const [a, b, c] = combination;

    //check if there is a match at the values of a, b and c positions
    //which represents the winning combination pairs
    if (
      board[a[0]][a[1]] &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      //so if all 3 values of a, b, and c matches return the value
      //either x or o
      return board[a[0]][a[1]];
    }
  }

  //if no winner is found, check for a draw
  if (board.flat().every((value) => value !== "")) {
    return "draw";
  }

  //if no winning combinations were met return null
  return null;
}
