"use client";
import { useState, useEffect } from "react";
import { computerMove } from "../../public/computerMove";
import checkWin from "@/../public/checkWin";

export default function Home() {
  const [turn, setTurn] = useState<0 | 1>(0);
  const [board, setBoard] = useState<number[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<number | null>(null);
  const [useIa, setUseIa] = useState<boolean | null>(null);

  const turnString = turn === 0 ? "O" : "X";
  const handleClick = (index: number) => {
    if (board[index] !== null) return;
    setTurn(turn === 0 ? 1 : 0);
    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);

    const win = checkWin(newBoard);
    if (win !== null) {
      setWinner(win);
    }
  };

  useEffect(() => {
    if (useIa && turn == 1) {
      const iaMove = computerMove(board);
      if (iaMove !== null) {
        handleClick(iaMove);
      }
    }
  });

  return (
    <div className="App">
      {useIa == null ? (
        <header className="header">
          <h1 className="title">Tic tac toe</h1>
          <button
            className="btn mt-5 py-3 px-4"
            onClick={() => setUseIa(false)}
          >
            2 players
          </button>
          <button className="btn mt-5 py-3 px-4" onClick={() => setUseIa(true)}>
            Computer
          </button>
        </header>
      ) : useIa == false ? (
        <>
          <h1 className="title">Tic tac toe</h1>
          <h2 className="turn">Turn: {turnString}</h2>
          <main className="board grid grid-cols-3 mt-5">
            {board.map((_, index) => (
              <div
                key={index}
                className="square flex justify-center align-center p-5 box-border w-[100px] h-[100px] m-3 bg-slate-600 rounded-md"
                onClick={() => handleClick(index)}
              >
                <p className="text-2rem md-text-3rem text-center">
                  {board[index] === null ? "" : board[index] === 0 ? "O" : "X"}
                </p>
              </div>
            ))}
          </main>
          {winner !== null && (
            <div className="modal fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
              <div className="modal-body rounded-md bg-slate-600 p-15 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="subtitle text-1.5rem md:text-2rem font-bold">
                  {winner === 0 ? "O" : "X"} wins
                </h2>
                <div
                  className="btn"
                  onClick={() => {
                    setWinner(null);
                    setBoard(Array(9).fill(null));
                    setTurn(0);
                    setUseIa(null);
                  }}
                >
                  Play again
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <h1 className="title">Tic tac toe</h1>
          <main className="board grid grid-cols-3 mt-5">
            {board.map((_, index) => (
              <div
                key={index}
                className="square flex justify-center align-center p-5 box-border w-[100px] h-[100px] m-3 bg-slate-600 rounded-md"
                onClick={() => turn === 0 && handleClick(index)}
              >
                <p className="text-[2rem] md-text-[3rem] text-center">
                  {board[index] === null ? "" : board[index] === 0 ? "O" : "X"}
                </p>
              </div>
            ))}
          </main>
          {winner !== null && (
            <div className="modal fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
              <div className="modal-body rounded-md bg-slate-600 p-15 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="subtitle text-1.5rem md:text-2rem font-bold">
                  {winner === 0 ? "You" : "Computer"} win
                </h2>
                <div
                  className="btn"
                  onClick={() => {
                    setWinner(null);
                    setBoard(Array(9).fill(null));
                    setTurn(0);
                    setUseIa(null);
                  }}
                >
                  Play again
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <footer>With ❤️ by Davad</footer>
    </div>
  );
}
