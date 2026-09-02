import { CalendarDay, CalendarGridHeader } from "./CalendarDay";

const CalendarGrid = ({ days, onSelectDay }) => {
  return (
    <>
      <CalendarGridHeader />
      <div className="grid grid-cols-7 gap-xs">
        {days.map((dayData, index) => (
          <CalendarDay key={index} dayData={dayData} onSelectDay={onSelectDay} />
        ))}
      </div>
    </>
  );
};

export default CalendarGrid;
