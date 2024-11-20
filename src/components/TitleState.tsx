import { useScoreStore } from "../hooks/useScore";
import TitleViewEditing from "./TitleViewEditing";
import TitleViewRegular from "./TitleViewRegular";

export default function TitleState({
  id,
  title,
  renameTeam,
}: {
  id: string;
  title: string;
  renameTeam: (renameValue: string) => void;
}) {
  const isEditing = useScoreStore((state) => state.isEditing);

  if (isEditing === id) return <TitleViewEditing renameTeam={renameTeam} />;
  else {
    return <TitleViewRegular title={title} id={id} />;
  }
}
