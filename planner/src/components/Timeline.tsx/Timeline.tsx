const Timeline = ({ events }) => {
  const hours = Array.from({ length: 18 }, (_, i) => i + 7);

  if (!events) {
    return <div>Loading...</div>;
  }
  console.log(events);
  return (
    <div className="flex flex-col w-full">
      {Array.from({ length: 7 }).map((_, dayIndex) => (
        <div key={dayIndex} className="flex h-32 w-full">
          {hours.map((hour) => {
            const eventForTimeRange = events.find(
              (e) =>
                e.dayIndex === dayIndex &&
                e.startHour <= hour &&
                e.endHour > hour
            );

            return (
              <div
                key={`${dayIndex}-${hour}`}
                className={`w-24 border border-gray-300 flex-grow ${
                  eventForTimeRange ? "bg-blue-200" : "bg-gray-100"
                }`}
              >
                {eventForTimeRange && (
                  <div className="text-xs">
                    <div>{eventForTimeRange.name}</div>
                    <div>
                      {eventForTimeRange.startHour}:00 -{" "}
                      {eventForTimeRange.endHour}:00
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
