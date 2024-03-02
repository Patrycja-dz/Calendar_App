import { useState } from "react";
import CalendarDays from "../CalendarDays/CalendarDays";
import Timeline from "../Timeline.tsx/Timeline";
import Weekdays from "../Weekdays/Weekdays";

const Dashboard = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [events, setEvents] = useState([]);
  const dummyEvents = [
    { day: 0, startHour: 8, endHour: 16, title: "Work" },
    { day: 2, startHour: 12, endHour: 13, title: "Lunch" },
  ];
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
    <div className="flex">
      {/* <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} /> */}
      <Timeline events={dummyEvents} />
    </div>
  );
};

export default Dashboard;
