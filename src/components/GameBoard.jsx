import React, { useState } from "react";

const GameBoard = ({ onButtonPressed, board }) => {
  //this is the computed value that we are deriving from the state present in App jsx file

  return (
    <ol id="game-board">
      {board.map((eachRow, eachRowIndex) => (
        <ol key={eachRowIndex}>
          {eachRow.map((eachElement, eachElementIndex) => (
            <li key={eachElementIndex}>
              <button
                onClick={() => onButtonPressed(eachRowIndex, eachElementIndex)}
              >
                {eachElement}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
};

export default GameBoard;
