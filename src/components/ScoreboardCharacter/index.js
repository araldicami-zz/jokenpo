import "./styles.scss";

export function ScoreboardCharacter({ name, icon, score = 0 }) {
  return (
    <div className="scoreboard-char">
      <p>{name}:</p>
      <p className="scoreboard-char-points">{score}</p>
      <span>{icon}</span>
    </div>
  );
}
