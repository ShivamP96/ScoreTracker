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
      <div>{gameHistory.map((game) => {})}</div>
    </section>
  );
}
