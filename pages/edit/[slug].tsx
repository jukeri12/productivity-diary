import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Edit() {
  const [activity, setActivity] = useState({
    title: "placeholder",
    description: "none",
    minutes: 60,
  });
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.slug);

    if (router.query.slug) {
      const idValue = parseInt(router.query.slug[0]);
      fetchActivities(idValue);
    }
  }, [router.query.slug]);

  const fetchActivities = async (id: number) => {
    const res = await fetch("/api/activity/" + id.toString());

    const data = await res.json();
    setActivity(data.data[0]);
  };

  return (
    <>
      <h1 className="main-title">Add or edit diary entry</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          Title
          <input name="title" type="text" value={activity?.title}></input>
        </label>
        <label>
          Description
          <input
            name="description"
            type="text"
            value={activity?.description}
          ></input>
        </label>
        <label>
          Minutes spent
          <input name="minutes" type="number" value={activity?.minutes}></input>
        </label>
        <button type="submit">Save</button>
      </div>
    </>
  );
}
