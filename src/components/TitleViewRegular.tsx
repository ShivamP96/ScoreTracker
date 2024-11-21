import { useScoreStore } from "../hooks/useScore";
import { FilePenIcon } from "./icons";

export default function TitleViewRegular({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const setIsEditingTeamA = useScoreStore((state) => state.setIsEditingTeamA);
  const setIsEditingTeamB = useScoreStore((state) => state.setIsEditingTeamB);
  function handleEditingTeam(teamIdenification: string) {
    if (teamIdenification === "A") {
      setIsEditingTeamA();
    } else if (teamIdenification === "B") {
      setIsEditingTeamB();
    }
  }
  return (
    <section className="flex flex-row items-center">
      <div id="teamCardName" className="font-bold text-4xl p-8">
        {title}
      </div>
      <button
        className="inline-flex justify-self-end whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 shrink-0"
        type="button"
        onClick={() => handleEditingTeam(id)}
      >
        <FilePenIcon className="w-5 h-5" />
      </button>
    </section>
  );
}
