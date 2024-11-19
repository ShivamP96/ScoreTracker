import { useState } from "react";

export default function TitleViewEditing({
  renameTeam,
}: {
  renameTeam: (renameValue: string) => void;
}) {
  const [editName, setEditName] = useState("New Team Name");
  return (
    <div id="teamCardName" className="font-bold text-4xl p-8">
      <input
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      ></input>
      <button type="button" onClick={() => renameTeam(editName)}></button>
    </div>
  );
}
