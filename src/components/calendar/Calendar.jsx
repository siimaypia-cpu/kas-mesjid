import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

const Calendar = ({ calendarInfo, onPrev, onNext, onSelectDay }) => {
  return (
    <div className="bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden relative">
      <div className="absolute inset-0 pattern-bg pointer-events-none z-0"></div>
      <div className="relative z-10 p-md">
        <CalendarHeader
          monthName={calendarInfo.monthName}
          year={calendarInfo.year}
          onPrev={onPrev}
          onNext={onNext}
        />
        <CalendarGrid days={calendarInfo.days} onSelectDay={onSelectDay} />
      </div>
    </div>
  );
};

export default Calendar;
