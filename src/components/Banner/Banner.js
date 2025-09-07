import React from "react";

function Banner({ status, restartGame, children }) {
  return (
    <div className={`${status} banner`}>
      {children}{" "}
      <button onClick={restartGame} className="restart-button">
        Restart Game
      </button>
    </div>
  );
}

export default Banner;
