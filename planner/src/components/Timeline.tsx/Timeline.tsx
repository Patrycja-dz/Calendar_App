// const Timeline = ({ events }) => {
//   const hours = Array.from({ length: 18 }, (_, i) => i + 7);

//   return (
//     <div className="flex flex-col w-full">
//       {Array.from({ length: 7 }).map((_, dayIndex) => (
//         <div key={dayIndex} className="flex h-32 w-full">
//           {hours.map((hour) => {
//             const event = events.find(
//               (e) =>
//                 e.day === dayIndex && e.startHour <= hour && e.endHour >= hour
//             );

//             return (
//               <div
//                 key={`${dayIndex}-${hour}`}
//                 className={`w-24 border border-gray-300 flex-grow bg-gray-100 ${
//                   event ? " bg-blue-200 w-24" : ""
//                 }`}
//               >
//                 {event && (
//                   <div className="text-sx">
//                     <div>{event.title}</div>
//                     <div>
//                       {event.startHour}:00 - {event.endHour}:00
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Timeline;
const Timeline = ({ events }) => {
  const hours = Array.from({ length: 18 }, (_, i) => i + 7);

  return (
    <div className="flex flex-col w-full">
      {Array.from({ length: 7 }).map((_, dayIndex) => (
        <div key={dayIndex} className="flex h-32 w-full">
          {hours.map((hour) => {
            const eventForTimeRange = events.find(
              (e) =>
                e.day === dayIndex &&
                e.startHour <= hour &&
                e.endHour >= hour &&
                e.startHour !== e.endHour
            );

            const eventStart = events.find(
              (e) => e.day === dayIndex && e.startHour === hour
            );

            return (
              <div
                key={`${dayIndex}-${hour}`}
                className={`w-24 border border-gray-300 flex-grow ${
                  !eventForTimeRange && !eventStart
                    ? "bg-gray-100"
                    : "bg-blue-200"
                }`}
                style={{
                  width:
                    eventForTimeRange && eventStart
                      ? `calc(100% * ${
                          eventForTimeRange.endHour - eventStart.startHour + 1
                        } * 12.5%)`
                      : null,
                }}
              >
                {eventForTimeRange && (
                  <div className="text-sx">
                    <div>{eventForTimeRange.title}</div>
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
