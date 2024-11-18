import TitleViewRegular from "./TitleViewRegular";

export default function TitleState({
  title,
  isEditing,
}: {
  title: string;
  isEditing: boolean;
}) {
  const;

  if (isEditing) return <TitleViewEditing />;
  else {
    return <TitleViewRegular title={title} />;
  }
}
