import ActivityList from "@/components/ActivityList";
import Link from "next/link";
import { useEffect, useState } from "react";
import fetchActivities from "@/lib/util/fetchActivities";

export default function Home() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities()
      .then((data) => {
        setActivities(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="activity-list">
      <h1 className="main-title">Productivity Diary</h1>
      <ActivityList items={activities} />
      <Link href={"/new"} className="activity-list-item-edit-button">
        {" "}
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: "3em",
            backgroundColor: "pink",
            borderRadius: "100%",
            padding: "0.1em",
          }}
        >
          add
        </span>
      </Link>
    </div>
  );
}
