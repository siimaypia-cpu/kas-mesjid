const WEEKDAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const CalendarDay = ({ dayData, onSelectDay }) => {
  const { day, isCurrentMonth, isToday, dots } = dayData;

  const dayClasses = `aspect-square p-xs text-right font-body-md text-body-md ${
    isCurrentMonth
      ? isToday
        ? "text-on-surface bg-primary text-on-primary rounded font-bold cursor-pointer shadow-sm"
        : "text-on-surface relative border border-transparent hover:border-outline-variant rounded cursor-pointer"
      : "text-on-surface-variant/50"
  }`;

  const handleClick = () => {
    if (isCurrentMonth) {
      onSelectDay?.(dayData);
    }
  };

  return (
    <button type="button" className={dayClasses} onClick={handleClick}>
      {day}
      {isCurrentMonth && dots && dots.length > 0 && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
          {dots.map((dot, index) => (
            <div key={index} className={`w-1.5 h-1.5 rounded-full ${dot.color}`} />
          ))}
        </div>
      )}
    </button>
  );
};

const CalendarGridHeader = () => {
  return (
    <div className="grid grid-cols-7 gap-xs text-center mb-sm">
      {WEEKDAY_NAMES.map((name) => (
        <div key={name} className="font-label-sm text-label-sm text-on-surface-variant py-xs">
          {name}
        </div>
      ))}
    </div>
  );
};

export { CalendarDay, CalendarGridHeader };
export default CalendarDay;
