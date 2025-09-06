import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guess }) {
  return (
    <>
      {range(0, NUM_OF_GUESSES_ALLOWED - 1).map((index) => {
        return (
          <span key={index} className="cell">
            {guess ? guess[index] : ""}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
