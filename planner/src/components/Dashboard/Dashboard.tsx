import { useState } from "react";
import CalendarDays from "../CalendarDays/CalendarDays";
import Timeline from "../Timeline.tsx/Timeline";
import Weekdays from "../Weekdays/Weekdays";

const Dashboard = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [events, setEvents] = useState([]);

  //   const addEvent = (date, event) => {
  //     const newEvent = { date, event };
  //     setEvents([...events, newEvent]);
  //   };

  //   const editEvent = (index, updatedEvent) => {
  //     const updatedEvents = [...events];
  //     updatedEvents[index] = updatedEvent;
  //     setEvents(updatedEvents);
  //   };
  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };
  return (
    <div className="flex flex-col">
      <Timeline />

      <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
    </div>
  );
};

export default Dashboard;
