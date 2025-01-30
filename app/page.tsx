import { ActivityListItemProps } from "./ActivityListItem";
import ActivityList from "./ActivityList";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="main-title">Productivity Diary</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <ActivityList items={sampleItems} />
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
