const Timeline = ({ events }) => {
  const hours = Array.from({ length: 18 }, (_, i) => i + 7);

  return (
    <div className="flex flex-col">
      {/* Empty cell for weekdays */}
      <div className="w-1/7"></div>

      {/* Hours in the top row */}
      {/* <div className="flex">
        {hours.map((hour) => (
          <div key={hour} className="w-1/24 p-2 border border-gray-300">
            {`${hour}:00`}
          </div>
        ))}
      </div> */}

      {/* Empty space for the first cell */}
      <div className="w-1/7"></div>

      {/* Calendar cells */}
      {Array.from({ length: 7 }).map((_, dayIndex) => (
        <div key={dayIndex} className="flex">
          <div className="w-1/7"></div>
          {hours.map((hour) => {
            const event = events.find(
              (e) =>
                e.day === dayIndex && e.startHour <= hour && e.endHour >= hour
            );

            return (
              <div
                key={`${dayIndex}-${hour}`}
                className={`w-1/24 p-2 border border-gray-300 flex-grow bg-gray-100 ${
                  event ? "border-blue-500 bg-blue-100" : ""
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
