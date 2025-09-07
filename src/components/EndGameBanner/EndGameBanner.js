import React from "react";

function EndGameBanner({ endType, answer, guessesNumber, restartGame }) {
  return (
    <>
      {endType === "win" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessesNumber} guesses</strong>.
          </p>
          <button onClick={restartGame} className="restart-button">
            Restart Game
          </button>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={restartGame} className="restart-button">
            Restart Game
          </button>
        </div>
      )}
    </>
  );
}

export default EndGameBanner;
