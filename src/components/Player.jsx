import React, { useState } from "react";

const Player = ({ name, symbol, isCurrentlyActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isCurrentlyActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            defaultValue={playerName}
            onChange={handleNameChange}
          />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
