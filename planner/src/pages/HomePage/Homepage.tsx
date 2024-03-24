import ActivityHub from "../../components/ActivityHub/ActivityHub";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";
import CalendarDays from "../../components/CalendarDays/CalendarDays";
import { useEffect, useState } from "react";

const Homepage = () => {
  const hours = Array.from({ length: 18 }, (_, i) => i + 7);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [data, setData] = useState();
  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/returnjson");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
            <Dashboard data={data} currentDay={currentDay} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
