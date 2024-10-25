import { useScoreStore } from "../hooks/useScore";

export default function TeamACard() {
  const addPointTeamA = useScoreStore((state) => state.addPointTeamA(1));
  const subtractPointTeamA = useScoreStore((state) =>
    state.subtractPointTeamA(1)
  );
  const teamAScore = useScoreStore((state) => state.teamAScore);

  return (
    <section>
      <div>Team A Card</div>
      <div> {teamAScore} </div>
      <div>
        <button type="submit" onClick={() => addPointTeamA}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <button type="submit" onClick={() => subtractPointTeamA}>
          {" "}
          -{" "}
        </button>
      </div>
    </section>
  );
}
