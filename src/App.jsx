import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

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
        <GameBoard onButtonPressed={changeActivePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
