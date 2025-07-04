export default function Home() {
  const board = Array(9).fill(null);

  return (
    <div className="App">
      <h1 className="title">Tic tac toe</h1>

      <main className="board grid grid-cols-3 mt-5">
        {board.map((_, index) => (
          <div
            key={index}
            className="square p-15 m-3 bg-slate-600 rounded-md"
          ></div>
        ))}
      </main>
      <footer>With ❤️ by </footer>
    </div>
  );
}
