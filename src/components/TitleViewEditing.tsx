import { useState } from "react";
import { CheckIcon } from "./icons";
import { useScoreStore } from "../hooks/useScore";

export default function TitleViewEditing({
  renameTeam,
}: {
  renameTeam: (renameValue: string) => void;
}) {
  const [editName, setEditName] = useState("");
  const emptyTeamName = useScoreStore((state) => state.setIsEditingTeamEmpty);
  function handleRenameTeam(renameValue: string) {
    renameTeam(renameValue);
    emptyTeamName();
  }
  return (
    <section className="flex flex-row items-center">
      <div id="teamCardName" className="font-bold text-2xl p-1">
        <input
          className="max-w-24"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        ></input>
      </div>
      <button type="button" onClick={() => handleRenameTeam(editName)}>
        <CheckIcon className="w-5 h-5" />
      </button>
    </section>
  );
}
