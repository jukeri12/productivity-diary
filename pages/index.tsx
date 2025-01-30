import { ActivityListItemProps } from "@/components/ActivityListItem";
import ActivityList from "@/components/ActivityList";

const sampleItems: ActivityListItemProps[] = [
  {
    title: "Programming",
    description: "Programming my productivity app",
    minutes: 60,
    id: 1,
  },
  {
    title: "Writing",
    description: "Writing poems",
    minutes: 60,
    id: 2,
  },
  {
    title: "Jogging",
    description: "Jogging from city centre to Luolavuori",
    minutes: 90,
    id: 3,
  },
];

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="main-title">Productivity Diary</h1>
      <ActivityList items={sampleItems} />
    </div>
  );
}
