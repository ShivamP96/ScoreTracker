import "./App.css";
import TeamACard from "./components/TeamACard";
import TeamBCard from "./components/TeamBCard";
import { useScoreStore } from "./hooks/useScore";

function App() {
  const resetPoints = useScoreStore((state) => state.resetPoints);
  return (
    <>
      <section className="flex">
        <h1 className="text-3xl font-bold underline border-solid border-2 border-blue-500">
          Score Tracker
        </h1>
        <div className="border-solid border-2 border-red-500">
          <button type="submit" onClick={() => resetPoints()}>
            {" "}
            Click Here to Reset
          </button>
        </div>
        <div id="cards" className="flex">
          <div className="border-solid border-2 border-sky-500 ">
            <TeamACard />
          </div>
          <div className="border-solid border-2 ">
            <TeamBCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
