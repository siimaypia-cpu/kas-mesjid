import EventItem from "./EventItem";

const EventList = ({ events, selectedEventId, onSelectEvent }) => {
  return (
    <div className="space-y-sm">
      {events.map((event) => (
        <EventItem
          key={event.id}
          {...event}
          isSelected={selectedEventId === event.id}
          onSelect={() => onSelectEvent(event)}
        />
      ))}
    </div>
  );
};

export default EventList;
