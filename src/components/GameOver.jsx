import React from "react";

const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>GameOver</h2>
      <p>{winner} Won !!!</p>
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
