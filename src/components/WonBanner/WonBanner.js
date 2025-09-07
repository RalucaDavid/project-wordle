import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ guessesNumber, restartGame }) {
  return (
    <Banner status="happy" restartGame={restartGame}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessesNumber === 1 ? "1 guess" : `${guessesNumber} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
