import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onButtonPressed, playerSymbol }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [...prevGameBoard.map((row) => [...row])];

      newGameBoard[rowIndex][colIndex] = playerSymbol;

      onButtonPressed();

      return newGameBoard;
    });
  };
  return (
    <ol id="game-board">
      {gameBoard.map((eachRow, eachRowIndex) => (
        <ol key={eachRowIndex}>
          {eachRow.map((eachElement, eachElementIndex) => (
            <li key={eachElementIndex}>
              <button
                onClick={() =>
                  handleSelectSquare(eachRowIndex, eachElementIndex)
                }
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
