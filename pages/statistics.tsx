import { useState, useEffect } from "react";
import fetchActivities from "@/lib/util/fetchActivities";
import { ActivityListItemProps } from "@/components/ActivityListItem";

export default function Statistics() {
  const [activities, setActivities] = useState([]);
  const [timeWastedToday, setTimeWastedToday] = useState(0);
  const [timeWastedThisWeek, setTimeWastedThisWeek] = useState(0);
  const [activitySpentTimeThisWeek, setActivitySpentTimeThisWeek] = useState(0);

  // Always assume 8 hours of sleep for calculation functions
  // TODO: Make these adjustable parameters
  const workTime = 16 * 60;

  // TODO: Move this to util and make this not dependent on fetching activities
  const calculateDaysWastedTime = (date: Date) => {
    const activitiesOnChosenDate = activities.filter(
      (activity: ActivityListItemProps) => {
        const activityDate = new Date(activity.date);

        if (
          activityDate.getDay() === date.getDay() &&
          activityDate.getMonth() === date.getMonth() &&
          activityDate.getFullYear() === date.getFullYear()
        ) {
          return activity;
        }
      }
    );

    const totalDurationOfActivitiesOnDate = activitiesOnChosenDate.reduce(
      (totalMinutes: number, currentActivity: ActivityListItemProps) =>
        totalMinutes + parseInt(currentActivity.minutes),
      0
    );

    console.log(activitiesOnChosenDate);
    console.log(totalDurationOfActivitiesOnDate);

    return workTime - totalDurationOfActivitiesOnDate;
  };

  const calculateWeeksWastedTime = () => {};

  const calculateActivityTimes = () => {};

  useEffect(() => {
    const today = new Date();
    setTimeWastedToday(calculateDaysWastedTime(today));
  }, [activities]);

  // Initial setting of data for calculations
  useEffect(() => {
    fetchActivities().then((data) => {
      setActivities(data);
    });
  }, []);

  return (
    <>
      <h1 className="main-title">Statistics</h1>
      <p>Time wasted today: {timeWastedToday} minutes</p>
      <p>Time wasted this week: 200min</p>
      <p>Time used on activities this week: 200min</p>
    </>
  );
}
