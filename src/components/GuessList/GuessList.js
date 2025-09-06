import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <p key={guesses[index] ? guesses[index].id : index} className="guess">
            <Guess guess={guesses[index]?.value} />
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
