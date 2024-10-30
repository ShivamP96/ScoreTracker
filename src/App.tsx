import "./App.css";
import TeamACard from "./components/TeamACard";
import TeamBCard from "./components/TeamBCard";
import { useScoreStore } from "./hooks/useScore";

function App() {
  const resetPoints = useScoreStore((state) => state.resetPoints);
  return (
    <>
      <h1>Score Tracker</h1>
      <div>
        <button type="submit" onClick={() => resetPoints()}>
          {" "}
          Click Here to Reset
        </button>
      </div>
      <div>
        <TeamACard />
      </div>
      <div>
        <TeamBCard />
      </div>
    </>
  );
}

export default App;
