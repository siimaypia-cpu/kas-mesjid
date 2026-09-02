import IconButton from "../ui/IconButton";

const CalendarHeader = ({ monthName, year, onPrev, onNext }) => {
  return (
    <div className="flex justify-between items-center mb-md">
      <h3 className="font-headline-md text-headline-md text-primary">{monthName} {year}</h3>
      <div className="flex gap-xs">
        <IconButton icon="chevron_left" onClick={onPrev} />
        <IconButton icon="chevron_right" onClick={onNext} />
      </div>
    </div>
  );
};

export default CalendarHeader;
