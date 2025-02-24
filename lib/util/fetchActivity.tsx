const fetchActivity = async (_id: string) => {
  const res = await fetch("/api/activity/" + _id.toString());

  const data = await res.json();
  return data.data[0];
};

export default fetchActivity;
