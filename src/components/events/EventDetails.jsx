import MaterialSymbols from "../icons/MaterialSymbols";

const EventDetails = ({ event }) => {
  if (!event) return null;

  return (
    <div className="p-md">
      <h3 className="font-headline-md text-headline-md text-primary border-b border-outline-variant pb-sm mb-md">
        Event Details
      </h3>

      <div className="space-y-md">
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-xs">
            {event.title}
          </h4>
          <div className="flex items-center gap-xs text-on-surface-variant mb-xs">
            <MaterialSymbols name="calendar_today" className="text-[18px]" />
            <span className="font-body-md text-body-md text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-xs text-on-surface-variant">
            <MaterialSymbols name="schedule" className="text-[18px]" />
            <span className="font-body-md text-body-md text-sm">{event.time}</span>
          </div>
        </div>

        <div className="p-sm bg-surface-container rounded-lg border border-outline-variant/50">
          <div className="flex items-center gap-sm mb-sm">
            <div className="w-10 h-10 rounded-full bg-outline-variant overflow-hidden">
              <img
                alt="Ustadz Profile"
                className="w-full h-full object-cover"
                src={event.speaker.image}
              />
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-[10px]">
                Speaker
              </p>
              <p className="font-label-md text-label-md text-on-surface font-semibold">
                {event.speaker.name}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-sm">
          <div className="flex items-start gap-sm">
            <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
              location_on
            </span>
            <div>
              <p className="font-label-md text-label-md text-on-surface font-medium">
                {event.location.name}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                {event.location.detail}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-sm">
            <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
              menu_book
            </span>
            <div>
              <p className="font-label-md text-label-md text-on-surface font-medium">Theme</p>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                {event.theme}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-sm border-t border-outline-variant">
          <p className="font-label-sm text-label-sm text-on-surface-variant mb-sm uppercase tracking-wider">
            Documentation
          </p>
          <div className="flex gap-sm">
            <button className="flex-1 flex items-center justify-center gap-xs py-2 px-3 border border-outline-variant rounded-lg text-secondary hover:bg-secondary-container transition-colors font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
              Materials
            </button>
            <button className="flex-1 flex items-center justify-center gap-xs py-2 px-3 border border-outline-variant rounded-lg text-secondary hover:bg-secondary-container transition-colors font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px]">videocam</span>
              Recording
            </button>
          </div>
        </div>

        <button className="w-full py-2 bg-outline-variant/20 text-on-surface font-label-md text-label-md rounded-lg hover:bg-outline-variant/30 transition-colors">
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default EventDetails;