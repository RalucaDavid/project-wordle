import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <>
      {range(0, NUM_OF_GUESSES_ALLOWED - 1).map((index) => {
        return (
          <span
            key={index}
            className={`cell ${guess ? result[index].status : ""}`}
          >
            {guess ? guess[index] : ""}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
