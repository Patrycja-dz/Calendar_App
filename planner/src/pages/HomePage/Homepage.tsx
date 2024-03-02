import ActivityHub from "../../components/ActivityHub/ActivityHub";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";
import CalendarDays from "../../components/CalendarDays/CalendarDays";
import { useState } from "react";

const Homepage = () => {
  const hours = Array.from({ length: 18 }, (_, i) => i + 7);
  const [currentDay, setCurrentDay] = useState(new Date());

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  return (
    <div className="w-screen">
      <Navbar />
      <ActivityHub />

      <div className="border-box container mx-auto">
        <div className="flex flex-col">
          <div className="flex ml-12 w-full">
            {hours.map((hour) => (
              <div key={hour} className="w-24 h-9 p-2 border border-gray-300">
                {`${hour}:00`}
              </div>
            ))}
          </div>
          <div className="container flex">
            <CalendarDays day={currentDay} />
            <Dashboard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
