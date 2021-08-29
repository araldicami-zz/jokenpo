import { ScoreboardCharacter } from "../ScoreboardCharacter";
import "./styles.scss";

export function Scoreboard({
  personOption,
  robotOption,
  personScore,
  robotScore,
}) {
  const options = { pedra: "✊", papel: "🤚", tesoura: "✌" };

  return (
    <div className="scoreboard">
      <ScoreboardCharacter
        name="Você"
        score={personScore}
        icon={personOption ? options[personOption] : "👩"}
      />
      <ScoreboardCharacter
        name="Computador"
        score={robotScore}
        icon={robotOption ? options[robotOption] : "👾"}
      />
    </div>
  );
}
