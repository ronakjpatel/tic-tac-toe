import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, playerSymbol } = turn;

    const { row, col } = square;

    gameBoard[row][col] = playerSymbol;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const changeActivePlayer = (rowIndex, colIndex) => {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((old_turns_list) => {
      let currentPlayer = "X";

      if (old_turns_list.length > 0 && old_turns_list[0].playerSymbol === "X") {
        currentPlayer = "O";
      }

      const temp_turns = [
        {
          square: { row: rowIndex, col: colIndex },
          playerSymbol: currentPlayer,
        },
        ...old_turns_list,
      ];

      return temp_turns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isCurrentlyActive={activePlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isCurrentlyActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onButtonPressed={changeActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
