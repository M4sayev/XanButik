import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";
import WorkingHoursItem from "./WorkingHoursItem";

const workingHours = {
  Monday: ["09:00", "19:30"],
  Tuesday: ["09:00", "19:30"],
  Wednesday: ["09:00", "19:30"],
  Thursday: ["09:00", "19:30"],
  Friday: ["09:00", "19:30"],
  Saturday: ["09:00", "19:30"],
  Sunday: ["09:00", "19:30"],
};

function WorkingHours() {
  const { ref: WhRef, inView: WhInView } = useInView();

  return (
    <div className="contacts-working-hours-info-container">
      <div
        ref={WhRef}
        className={`working-hours-contents ${handleAnimation(WhInView)}`}
        aria-labelledby="working-hours-heading"
      >
        <h2
          id="working-hours-heading"
          className="std-heading info-container-heading"
        >
          Working Hours
        </h2>
        <ul
          aria-label="Working hours for each day of the week"
          className="workin-hours-list"
        >
          {Object.entries(workingHours).map(([day, hours]) => (
            <WorkingHoursItem key={`wh-item-${day}`} day={day} hours={hours} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkingHours;
