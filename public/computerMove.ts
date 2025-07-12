import checkWin from "./checkWin";

export function computerMove(board: number[]): number | null {
  const randomIndex = Math.floor(Math.random() * 9);
  if (board[randomIndex] !== null) return computerMove(board);
  return checkWin(board) == null ? randomIndex : null;
}
