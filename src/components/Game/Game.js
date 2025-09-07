import React from "react";

import { sample } from "../../utils";
import { WORDS, LETTERS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import EndGame from "../EndGame/EndGame";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [letters, setLetters] = React.useState(LETTERS);

  const updateKeyboard = (input) => {
    const result = checkGuess(input, answer);
    const newLetters = [...letters];
    result.forEach((res) => {
      const letterIndex = newLetters.findIndex((key) => key.key === res.letter);
      if (letterIndex !== -1) {
        newLetters[letterIndex].status = res.status;
      }
    });
    setLetters(newLetters);
  };

  const addGuess = (input) => {
    if (guesses.length >= 6) {
      return;
    }

    const newGuess = { id: crypto.randomUUID(), value: input };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    updateKeyboard(input);

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
      <Keyboard letters={letters} />
    </>
  );
}

export default Game;
