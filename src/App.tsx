import "./App.css";
import History from "./components/History";
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
  const gameHistory = useScoreStore((state) => state.gameHistory);
  const deleteGameHistory = useScoreStore((state) => state.deleteGameHistory);
  const saveGameHistory = useScoreStore((state) => state.saveGameHistory);

  return (
    <>
      <body className="w-dvh h-dvh">
        <section className="flex flex-col h-dvh">
          <div className="flex flex-col order-none justify-center items-center w-full">
            <h1 className="text-5xl font-bold underline order-1">
              Score Tracker
            </h1>
            <div className="flex flex-row justify-between order-1 w-full">
              <div className="order-1 mt-4">
                <button
                  className="bg-red-500/75"
                  type="button"
                  onClick={() => resetPoints()}
                >
                  Reset
                </button>
              </div>
              <div className="order-2 mt-4">
                <button
                  className="bg-sky-500/75"
                  type="button"
                  onClick={() => saveGameHistory()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div
            id="cards"
            className="flex flex-col sm:flex-row justify-around items-center mt-5"
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
            <div className="mt-8">
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
          <div id="history" className="flex flex-col items-center mt-20">
            <History
              gameHistory={gameHistory}
              deleteGameHistory={deleteGameHistory}
            />
          </div>
        </section>
      </body>
    </>
  );
}

export default App;
