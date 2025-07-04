export default function checkWin(board: number[]): number | null {
  const wins = [
    //horizontales
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //verticales
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonales
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [i1, i2, i3] of wins)
    if (
      board[i1] !== null &&
      board[i2] === board[i3] &&
      board[i1] === board[i3]
    )
      return board[i1];

  return null;
}
