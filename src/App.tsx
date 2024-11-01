import "./App.css";
import TeamACard from "./components/TeamACard";
import TeamBCard from "./components/TeamBCard";
import { useScoreStore } from "./hooks/useScore";

function App() {
  const resetPoints = useScoreStore((state) => state.resetPoints);
  return (
    <>
      <section className="grid grid-cols-6 grid-rows-7 gap-5">
        <h1 className="text-3xl font-bold underline border-solid border-2 border-blue-500 col-start-2 col-span-4 row-start-1 row-span-1 justify-self: center">
          Score Tracker
        </h1>
        <div className="border-solid border-2 border-red-500 col-start-3 col-span-2 row-start-2 row-end-3 justify-self: center">
          <button type="submit" onClick={() => resetPoints()}>
            {" "}
            Click Here to Reset
          </button>
        </div>
        <div
          id="cards"
          className="col-start-1 col-end-7 row-start-3 row-end-8 justify-self: center"
        >
          <div className="border-solid border-2 border-sky-500  ">
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
