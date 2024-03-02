const Timeline = ({ events }) => {
  const hours = Array.from({ length: 18 }, (_, i) => i + 7);

  return (
    <div className="flex flex-col w-full">
      {Array.from({ length: 7 }).map((_, dayIndex) => (
        <div key={dayIndex} className="flex h-32 w-full">
          {hours.map((hour) => {
            const event = events.find(
              (e) =>
                e.day === dayIndex && e.startHour <= hour && e.endHour >= hour
            );

            return (
              <div
                key={`${dayIndex}-${hour}`}
                className={`w-24 border border-gray-300 flex-grow bg-gray-100 ${
                  event ? " bg-blue-100 w-24" : ""
                }`}
              >
                {event && (
                  <div>
                    <div>{event.title}</div>
                    <div>
                      {event.startHour}:00 - {event.endHour}:00
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
