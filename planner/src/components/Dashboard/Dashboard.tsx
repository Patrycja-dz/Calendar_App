// import { getDayIndexFromDate } from "../../helpers/getDayIndexFrmDate";
// import Timeline from "../Timeline.tsx/Timeline";

// const Dashboard = ({ data, currentDay }) => {
//   const hours = Array.from({ length: 18 }, (_, i) => i + 7);

//   return (
//     <Timeline
//       events={data?.map((event) => ({
//         ...event,
//         day: event.day,
//       }))}
//       currentDay={currentDay}
//     />
//   );
// };
// export default Dashboard;
// Dashboard.js
import { getDayIndexFromDate } from "../../helpers/getDayIndexFrmDate";
import Timeline from "../Timeline.tsx/Timeline";

const Dashboard = ({ data, currentDay }) => {
  const parsedEvents = data?.map((event) => ({
    ...event,
    startHour: parseInt(event.startHour.split(":")[0]),
    endHour: parseInt(event.endHour.split(":")[0]),
    day: new Date(event.day.split(".").reverse().join("-")).getDate(),
    dayIndex: getDayIndexFromDate(event.day),
  }));

  return <Timeline events={parsedEvents} />;
};

export default Dashboard;
