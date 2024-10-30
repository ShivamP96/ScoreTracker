import { useScoreStore } from "../hooks/useScore";

export default function TeamBCard() {
  const teamBScore = useScoreStore((state) => state.teamBScore);
  const addPointTeamB = useScoreStore((state) => state.addPointTeamB);
  const subtractPointTeamB = useScoreStore((state) => state.subtractPointTeamB);

  return (
    <section>
      <div> Team B Card </div>
      <div> {teamBScore} </div>
      <div>
        <button type="button" onClick={() => addPointTeamB(1)}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <button type="button" onClick={() => subtractPointTeamB(1)}>
          {" "}
          -{" "}
        </button>
      </div>
    </section>
  );
}
