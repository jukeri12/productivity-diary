const fetchActivities = async () => {
  const res = await fetch("/api/activities");

  const data = await res.json();
  return data.data;
};

export default fetchActivities;
