const CalendarDays = ({ day }) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let firstDayOfWeek = new Date(
    day.getFullYear(),
    day.getMonth(),
    day.getDate() - ((day.getDay() + 6) % 7)
  );
  let currentDays = [];

  for (let i = 0; i < 7; i++) {
    let calendarDay = {
      currentMonth: firstDayOfWeek.getMonth() === day.getMonth(),
      date: new Date(firstDayOfWeek),
      number: firstDayOfWeek.getDate(),
      selected: firstDayOfWeek.toDateString() === day.toDateString(),
      year: firstDayOfWeek.getFullYear(),
      weekday: weekdays[firstDayOfWeek.getDay()],
    };

    currentDays.push(calendarDay);

    firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
  }

  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        {currentDays.map((calendarDay) => (
          <div
            className={
              "max-w-sm p-4 text-center border border-gray-300 w-12 flex-grow justify-center align-center" +
              (calendarDay.currentMonth ? "bg-gray-100 w-12" : "") +
              (calendarDay.selected ? " bg-blue-500 text-white w-12" : "")
            }
            key={calendarDay.date.toISOString()}
          >
            <p>{calendarDay.number}</p>
            <p className="text-xs text-gray-600">{calendarDay.weekday}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDays;
