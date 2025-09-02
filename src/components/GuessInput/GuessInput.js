import React from "react";

function GuessInput({ input, setInput }) {
  const onSubmit = (event) => {
    event.preventDefault();
    console.info({ input });
    setInput("");
  };

  return (
    <form onSubmit={onSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={input}
        pattern="[A-Z]{5}"
        onChange={(event) => setInput(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
