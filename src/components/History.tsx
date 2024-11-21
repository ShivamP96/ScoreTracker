import type { History } from "../hooks/useScore";

export default function History({
  gameHistory,
  deleteGameHistory,
}: {
  gameHistory: History[];
  deleteGameHistory: (id: number) => void;
}) {
  return (
    <section>
      <div>
        <h1>Game History</h1>
      </div>
      <div>
        <ul>
          {gameHistory.map((game) => (
            <li key={game.id}>
              {`${game.teamA} (${game.teamAScore}) VS ${game.teamB} (${game.teamBScore})`}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
