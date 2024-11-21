import type { History } from "../hooks/useScore";

export default function History({
  gameHistory,
  deleteGameHistory,
}: {
  gameHistory: History[];
  deleteGameHistory: (id: number) => void;
}) {
  function handleDeleteGame(gameID: number) {
    deleteGameHistory(gameID);
  }
  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center order-0">
        <h1 className="text-4xl font-bold underline m-auto">Game History</h1>
      </div>
      <div className="order-1 mt-6">
        <ul>
          {gameHistory.map((game) => (
            <div className="flex flex-row items-center ">
              <li key={game.id}>
                {game.teamA} (
                <span
                  className={
                    game.teamAScore > game.teamBScore
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {game.teamAScore}
                </span>
                ) VS {game.teamB} (
                <span
                  className={
                    game.teamBScore > game.teamAScore
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {game.teamBScore}
                </span>
                )
              </li>
              <button
                className=""
                type="button"
                onClick={() => handleDeleteGame(game.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
