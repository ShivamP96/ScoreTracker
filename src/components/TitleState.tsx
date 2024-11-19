import TitleViewEditing from "./TitleViewEditing";
import TitleViewRegular from "./TitleViewRegular";

export default function TitleState({
  title,
  isEditing,
  renameTeam,
}: {
  title: string;
  isEditing: boolean;
  renameTeam: (renameValue: string) => void;
}) {
  if (isEditing) return <TitleViewEditing renameTeam={renameTeam} />;
  else {
    return <TitleViewRegular title={title} />;
  }
}
