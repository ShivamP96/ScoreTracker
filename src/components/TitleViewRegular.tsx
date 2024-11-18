export default function TitleViewRegular({ title }: { title: string }) {
  return (
    <div id="teamCardName" className="font-bold text-4xl p-8">
      {title}
    </div>
  );
}
