import React from "react";

const Log = ({ turns }) => {

  return (
    <ol id="log">
      {turns.map((eachTurn) => (
        <li key={`${eachTurn.square.row}${eachTurn.square.col}`}>
          {`Player ${eachTurn.playerSymbol} filled ${eachTurn.square.row} and ${eachTurn.square.col}`}
        </li>
      ))}
    </ol>
  );
};

export default Log;
