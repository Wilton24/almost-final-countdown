import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();

  function changeName() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
    playerName.current.focus();
  }

  return (
    <section id="player">
      <h2>
        Welcome,{" "}
        {enteredPlayerName ? `${enteredPlayerName}!` : "unknown nigga!"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={changeName}>Set Name</button>
      </p>
    </section>
  );
}
