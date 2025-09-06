import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (input) => {
    if (guesses.length >= 6) {
      return;
    }

    const newGuess = { id: crypto.randomUUID(), value: input };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  };

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
