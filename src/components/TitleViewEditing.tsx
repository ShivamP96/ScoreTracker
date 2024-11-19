import { useState } from "react";
import { CheckIcon } from "./icons";

export default function TitleViewEditing({
  renameTeam,
  setIsEditingFalse,
}: {
  renameTeam: (renameValue: string) => void;
  setIsEditingFalse: () => void;
}) {
  const [editName, setEditName] = useState("");
  function handleRenameTeam(renameValue: string) {
    renameTeam(renameValue);
    setIsEditingFalse();
  }
  return (
    <section className="flex flex-row items-center">
      <div id="teamCardName" className="font-bold text-4xl p-8">
        <input
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
