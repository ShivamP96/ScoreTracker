import { useState } from "react";
import TitleState from "./TitleState";

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
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <section className="flex flex-col justify-start items-center">
      <div className="flex flex-row gap-2">
        <TitleState title={title} isEditing={isEditing} />
        <button type="button" onClick={() => setIsEditing(true)}></button>
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
