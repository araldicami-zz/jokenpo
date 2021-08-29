import { ScoreboardCharacter } from "../ScoreboardCharacter";
import "./styles.scss";

export function Scoreboard({
  personOption,
  robotOption,
  personScore,
  robotScore,
  name,
  avatar,
}) {
  const options = { pedra: "✊", papel: "🤚", tesoura: "✌" };

  return (
    <div className="scoreboard">
      <ScoreboardCharacter
        name={name ? name : "Você"}
        score={personScore}
        icon={personOption ? options[personOption] : avatar}
      />
      <ScoreboardCharacter
        name="Computador"
        score={robotScore}
        icon={robotOption ? options[robotOption] : "👾"}
      />
    </div>
  );
}
