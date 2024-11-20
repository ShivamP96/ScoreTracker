import TitleState from "./TitleState";

export default function TeamCard({
  id,
  title,
  teamScore,
  addPoint,
  subtractPoint,
  renameTeam,
}: {
  id: string;
  title: string;
  teamScore: number;
  addPoint: (amount: number) => void;
  subtractPoint: (amount: number) => void;
  renameTeam: (renameValue: string) => void;
}) {
  return (
    <section className="flex flex-col justify-start items-center">
      <div className="flex flex-row gap-2">
        <TitleState id={id} title={title} renameTeam={renameTeam} />
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
