import { useState } from "react";
import Calendar from "../components/calendar/Calendar";
import EventList from "../components/events/EventList";
import EventDetails from "../components/events/EventDetails";
import MaterialSymbols from "../components/icons/MaterialSymbols";
import useCalendar from "../hooks/useCalendar";
import { upcomingEvents, selectedEvent } from "../data/eventsData";

const ActivitiesKajian = () => {
  const { calendarInfo, goPrevMonth, goNextMonth } = useCalendar();
  const [currentEvent, setCurrentEvent] = useState(selectedEvent);

  const handleSelectEvent = (event) => {
    setCurrentEvent({
      ...event,
      speaker: event.speaker || selectedEvent.speaker,
      location: event.location || selectedEvent.location,
      theme: event.theme || selectedEvent.theme,
      title: event.title,
      date: `${event.date} ${event.day}`,
      time: event.dateTime,
    });
  };

  return (
    <main className="flex-1 p-md md:p-lg w-full max-w-container-max mx-auto space-y-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-sm">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Activities &amp; Kajian
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            Manage community events, schedules, and learning sessions.
          </p>
        </div>
        <button className="flex items-center gap-xs px-md py-sm bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:bg-secondary/90 transition-colors shadow-sm">
          <MaterialSymbols name="add" />
          Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        <div className="lg:col-span-2 space-y-md">
          <Calendar
            calendarInfo={calendarInfo}
            onPrev={goPrevMonth}
            onNext={goNextMonth}
            onSelectDay={() => {}}
          />

          <div className="bg-surface rounded-xl border border-outline-variant shadow-sm p-md">
            <div className="flex justify-between items-center mb-md border-b border-outline-variant pb-sm">
              <h3 className="font-headline-md text-headline-md text-primary">Upcoming Events</h3>
              <button className="font-label-sm text-label-sm text-secondary hover:underline">
                View All
              </button>
            </div>
            <EventList
              events={upcomingEvents}
              selectedEventId={currentEvent?.id}
              onSelectEvent={handleSelectEvent}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-surface rounded-xl border border-outline-variant shadow-sm sticky top-24 overflow-hidden">
            <div className="h-1 w-full bg-secondary"></div>
            <EventDetails event={currentEvent} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ActivitiesKajian;