import "./styles.scss";

import { useState } from "react";
import { Scoreboard } from "../Scoreboard";

export function Board({ name, avatar }) {
  const options = ["pedra", "papel", "tesoura"];

  const [firstPlayerOption, setFirstPlayerOption] = useState("");
  const [robotOption, setRobotOption] = useState("");

  const [firstPlayerScore, setFirstPlayerScore] = useState(0);
  const [robotScore, setRobotScore] = useState(0);

  function setOption(firstPlayer) {
    const robot = Math.floor(Math.random() * options.length);

    const option = options[robot];

    if (option && firstPlayer) {
      if (option === firstPlayer) {
        console.log("empate");
      } else if (option === "pedra" && firstPlayer === "tesoura") {
        setRobotScore(robotScore + 1);
      } else if (option === "tesoura" && firstPlayer === "papel") {
        setRobotScore(robotScore + 1);
      } else if (option === "papel" && firstPlayer === "pedra") {
        setRobotScore(robotScore + 1);
      } else {
        setFirstPlayerScore(firstPlayerScore + 1);
      }
    }

    setRobotOption(options[robot]);
    setFirstPlayerOption(firstPlayer);
  }

  function onClickReset() {
    setFirstPlayerOption("");
    setRobotScore(0);
    setFirstPlayerScore(0);
    setRobotOption("");
  }

  function onClickFinish() {
    if (firstPlayerScore > robotScore) {
      alert("Você venceu 🎉");
    } else if (firstPlayerScore < robotScore) {
      alert("O computador venceu você 😯");
    } else {
      alert("Empatou 😢");
    }

    onClickReset();
  }

  return (
    <div>
      <div className="board">
        <h1>Pedra, papel, tesoura!</h1>

        <h4>Escolha a sua jogada</h4>

        <div className="board-options">
          <button onClick={() => setOption(options[0])}>✊</button>
          <button onClick={() => setOption(options[1])}>✋</button>
          <button onClick={() => setOption(options[2])}>✌</button>
        </div>

        <Scoreboard
          personOption={firstPlayerOption}
          robotOption={robotOption}
          personScore={firstPlayerScore}
          robotScore={robotScore}
          name={name}
          avatar={avatar}
        />
      </div>
      <div className="board-button-commands">
        <button onClick={onClickReset} className="button-reset">
          Resetar
        </button>
        <button onClick={onClickFinish}>Finalizar partida</button>
      </div>
    </div>
  );
}
