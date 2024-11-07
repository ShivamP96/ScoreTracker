import "./App.css";
import TeamACard from "./components/TeamACard";
import TeamBCard from "./components/TeamBCard";
import { useScoreStore } from "./hooks/useScore";

function App() {
  const resetPoints = useScoreStore((state) => state.resetPoints);
  return (
    <>
      <body className="w-dvh h-dvh">
        <section className="flex flex-col h-dvh">
          <div className="flex flex-col order-none justify-center items-center">
            <h1 className="text-3xl font-bold underline border-solid border-2 border-blue-500 order-1">
              Score Tracker
            </h1>
            <div className="border-solid border-2 border-red-500 order-1">
              <button type="submit" onClick={() => resetPoints()}>
                {" "}
                Click Here to Reset
              </button>
            </div>
          </div>
          <div
            id="cards"
            className="flex flex-row justify-around items-center my-auto"
          >
            <div className="border-solid border-2 border-sky-500 ">
              <TeamACard />
            </div>
            <div className="border-solid border-2 ">
              <TeamBCard />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default App;
