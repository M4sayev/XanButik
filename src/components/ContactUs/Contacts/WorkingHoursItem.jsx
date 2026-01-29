function WorkingHoursItem({ day, hours }) {
  return (
    <li className="work-hour-item">
      <span className="day-of-the-week">{day}</span>
      <span className="hours">
        <time dateTime={hours[0]}>
          {hours[0]} <span>am</span>
        </time>
        -
        <time dateTime={hours[1]}>
          {hours[1]} <span>pm</span>
        </time>
      </span>
    </li>
  );
}

export default WorkingHoursItem;
