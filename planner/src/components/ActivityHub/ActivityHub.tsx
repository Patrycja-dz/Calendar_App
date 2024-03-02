import { Link } from "react-router-dom";

const ActivityHub = () => {
  return (
    <div role="tablist" className="tabs  tabs-lg">
      <Link role="tab" className="tab text-violet-700" to={"create-event"}>
        Dodaj wydarzenie
      </Link>
      <Link role="tab" className="tab  text-violet-700">
        Moje zaproszenia
      </Link>
    </div>
  );
};

export default ActivityHub;
