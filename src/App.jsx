import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const changeActivePlayer = () => {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
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
        <GameBoard
          onButtonPressed={changeActivePlayer}
          playerSymbol={activePlayer === "X" ? "X" : "O"}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
