import ActivityHub from "../../components/ActivityHub/ActivityHub";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";
import CalendarDays from "../../components/CalendarDays/CalendarDays";
import { useState } from "react";
import Timeline from "../../components/Timeline.tsx/Timeline";
const Homepage = () => {
  const hours = Array.from({ length: 18 }, (_, i) => i + 7);
  const [currentDay, setCurrentDay] = useState(new Date());
  const dummyEvents = [
    { day: 0, startHour: 8, endHour: 16, title: "Work" },
    { day: 2, startHour: 12, endHour: 13, title: "Lunch" },
  ];
  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };
  return (
    <>
      <Navbar />
      <ActivityHub />

      <div className="flex flex-col">
        <div className="flex">
          {hours.map((hour) => (
            <div key={hour} className="w-1/5 h-9 p-2 border border-gray-300">
              {`${hour}:00`}
            </div>
          ))}
        </div>
        <div className="flex">
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
          <Dashboard />
        </div>
      </div>
      {/* 
      <div className="hero min-h-screen  bg-base-200 flex flex-col">
        <Dashboard />
          </div> */}

      <Footer />
    </>
  );
};

export default Homepage;
