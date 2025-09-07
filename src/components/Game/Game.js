import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import EndGame from "../EndGame/EndGame";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false);

  const addGuess = (input) => {
    if (guesses.length >= 6) {
      return;
    }

    const newGuess = { id: crypto.randomUUID(), value: input };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (input === answer || nextGuesses.length === 6) {
      setIsGameOver(true);
    }
  };

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} isDisabled={isGameOver} />
      {isGameOver && (
        <EndGame
          endType={
            guesses[guesses.length - 1].value === answer ? "win" : "lose"
          }
          answer={answer}
          guesses={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
