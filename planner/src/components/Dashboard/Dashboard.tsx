import Timeline from "../Timeline.tsx/Timeline";

const Dashboard = () => {
  const dummyEvents = [
    { day: 0, startHour: 8, endHour: 16, title: "Work" },
    { day: 2, startHour: 12, endHour: 13, title: "Lunch" },
    { day: 3, startHour: 10, endHour: 11, title: "Doctor" },
    { day: 4, startHour: 12, endHour: 14, title: "Meeting" },
  ];

  return (
    <div className="">
      <Timeline events={dummyEvents} />
    </div>
  );
};

export default Dashboard;
