import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onButtonPressed, turns }) => {
  //this is the computed value that we are deriving from the state present in App jsx file
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    console.log("INSEDE FOR EACH");
    const { square, playerSymbol } = turn;
    console.log(turn);
    const { row, col } = square;

    gameBoard[row][col] = playerSymbol;
  }

  console.log(gameBoard);

  return (
    <ol id="game-board">
      {gameBoard.map((eachRow, eachRowIndex) => (
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
