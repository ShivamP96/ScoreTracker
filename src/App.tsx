import "./App.css";
import TeamCard from "./components/TeamCard";
import { useScoreStore } from "./hooks/useScore";

function App() {
  const resetPoints = useScoreStore((state) => state.resetPoints);
  const teamAScore = useScoreStore((state) => state.teamAScore);
  const teamAName = useScoreStore((state) => state.teamAName);
  const teamBName = useScoreStore((state) => state.teamBName);
  const addPointTeamA = useScoreStore((state) => state.addPointTeamA);
  const subtractPointTeamA = useScoreStore((state) => state.subtractPointTeamA);
  const teamBScore = useScoreStore((state) => state.teamBScore);
  const addPointTeamB = useScoreStore((state) => state.addPointTeamB);
  const subtractPointTeamB = useScoreStore((state) => state.subtractPointTeamB);
  const renameTeamA = useScoreStore((state) => state.renameTeamA);
  const renameTeamB = useScoreStore((state) => state.renameTeamB);

  return (
    <>
      <body className="w-dvh h-dvh">
        <section className="flex flex-col h-dvh">
          <div className="flex flex-col order-none justify-center items-center">
            <h1 className="text-6xl font-bold underline order-1">
              Score Tracker
            </h1>
            <div className="order-1">
              <button type="submit" onClick={() => resetPoints()}>
                {" "}
                Reset
              </button>
            </div>
          </div>
          <div
            id="cards"
            className="flex flex-row justify-around items-center my-auto"
          >
            <div>
              <TeamCard
                id={"A"}
                title={teamAName}
                teamScore={teamAScore}
                addPoint={addPointTeamA}
                subtractPoint={subtractPointTeamA}
                renameTeam={renameTeamA}
              />
            </div>
            <div>
              <TeamCard
                id={"B"}
                title={teamBName}
                teamScore={teamBScore}
                addPoint={addPointTeamB}
                subtractPoint={subtractPointTeamB}
                renameTeam={renameTeamB}
              />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default App;
