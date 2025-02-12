import ActivityList from "@/components/ActivityList";
import { useEffect, useState } from "react";

export default function Home() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  // TODO: Move to lib
  const fetchActivities = async () => {
    const res = await fetch("/api/activities");

    const data = await res.json();
    setActivities(data.data);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="main-title">Productivity Diary</h1>
      <ActivityList items={activities} />
    </div>
  );
}
