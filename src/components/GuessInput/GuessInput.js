import React from "react";

function GuessInput({ addGuess, isDisabled }) {
  const [input, setInput] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setInput("");
    addGuess(input);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={input}
        pattern="[A-Z]{5}"
        onChange={(event) => setInput(event.target.value)}
        disabled={isDisabled}
      />
    </form>
  );
}

export default GuessInput;
