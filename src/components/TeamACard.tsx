import { useScoreStore } from "../hooks/useScore";

export default function TeamACard() {
  const teamAScore = useScoreStore((state) => state.teamAScore);
  const addPointTeamA = useScoreStore((state) => state.addPointTeamA);
  const subtractPointTeamA = useScoreStore((state) => state.subtractPointTeamA);

  return (
    <section>
      <div>Team A Card</div>
      <div> {teamAScore} </div>
      <div>
        <button type="button" onClick={() => addPointTeamA(1)}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <button type="button" onClick={() => subtractPointTeamA(1)}>
          {" "}
          -{" "}
        </button>
      </div>
    </section>
  );
}
