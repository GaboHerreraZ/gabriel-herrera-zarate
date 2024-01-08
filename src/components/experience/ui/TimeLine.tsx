import { experiences } from "../const";
import { TimeLineRight } from "./TimeLineRight";
import { TimeLineLeft } from "./TimeLineLeft";

export const TimeLine = ({ lng }: { lng: string }) => {
  return (
    <div className="mt-20">
      {experiences.map((experience, idx) => {
        return (
          <>
            {experience.right ? (
              <TimeLineRight key={idx} lng={lng} experience={experience} />
            ) : (
              <TimeLineLeft key={idx} lng={lng} experience={experience} />
            )}
          </>
        );
      })}
    </div>
  );
};
