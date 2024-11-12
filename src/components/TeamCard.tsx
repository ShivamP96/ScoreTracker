export default function TeamACard({
  title,
  teamScore,
  addPoint,
  subtractPoint,
}: {
  title: string;
  teamScore: number;
  addPoint: (amount: number) => void;
  subtractPoint: (amount: number) => void;
}) {
  return (
    <section className="flex flex-col justify-start items-center">
      <div id="teamCardName" className="font-bold text-4xl p-8">
        {title}
      </div>
      <div className="flex flex-row gap-5">
        <div>
          <button type="button" onClick={() => subtractPoint(1)}>
            {" "}
            -{" "}
          </button>
        </div>
        <div className="text-3xl font-extrabold"> {teamScore} </div>
        <div>
          <button type="button" onClick={() => addPoint(1)}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
