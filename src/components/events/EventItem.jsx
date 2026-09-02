const EventItem = ({ title, date, day, dateTime, location, variant, isSelected, onSelect }) => {
  const variantClasses = {
    tertiary: "bg-tertiary-container text-on-tertiary-container",
    secondary: "bg-secondary-container text-on-secondary-container",
  };

  return (
    <div
      className={`flex items-center gap-sm p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer ${
        isSelected
          ? "border border-outline-variant"
          : "border border-transparent hover:border-outline-variant"
      }`}
      onClick={onSelect}
    >
      <div
        className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center shrink-0 ${variantClasses[variant]}`}
      >
        <span className="font-label-sm text-label-sm font-bold leading-none">{date}</span>
        <span className="font-headline-md text-headline-md leading-none">{day}</span>
      </div>
      <div className="flex-1">
        <h4 className="font-label-md text-label-md text-on-surface font-semibold">{title}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm flex items-center gap-xs">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          {dateTime}
        </p>
      </div>
      <div className="px-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider text-[10px]">
        {location}
      </div>
    </div>
  );
};

export default EventItem;
