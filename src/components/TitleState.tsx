import { useScoreStore } from "../hooks/useScore";
import TitleViewEditing from "./TitleViewEditing";
import TitleViewRegular from "./TitleViewRegular";

export default function TitleState({
  title,
  renameTeam,
}: {
  title: string;
  renameTeam: (renameValue: string) => void;
}) {
  const isEditing = useScoreStore((state) => state.isEditing);
  const setIsEditingTrue = useScoreStore((state) => state.setIsEditingTrue);
  const setIsEditingFalse = useScoreStore((state) => state.setIsEditingFalse);

  if (isEditing)
    return (
      <TitleViewEditing
        renameTeam={renameTeam}
        setIsEditingFalse={setIsEditingFalse}
      />
    );
  else {
    return (
      <TitleViewRegular title={title} setIsEditingTrue={setIsEditingTrue} />
    );
  }
}
