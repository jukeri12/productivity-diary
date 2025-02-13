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
    if (router.query.slug) {
      const idValue = parseInt(router.query.slug[0]);
      fetchActivity(idValue);
    }
  }, [router.query.slug]);

  const fetchActivity = async (id: number) => {
    const res = await fetch("/api/activity/" + id.toString());

    const data = await res.json();
    setActivity(data.data[0]);
  };

  return (
    <>
      <h1 className="main-title">Add or edit diary entry</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label className="activity-editor-field">
          Title
          <input name="title" type="text" value={activity?.title}></input>
        </label>
        <label className="activity-editor-field">
          Description
          <input
            name="description"
            type="text"
            value={activity?.description}
          ></input>
        </label>
        <label className="activity-editor-field">
          Minutes spent
          <input name="minutes" type="number" value={activity?.minutes}></input>
        </label>
        <div className="activity-editor-field">
          <button className="submit-button" type="submit">
            Save
          </button>
        </div>
      </div>
    </>
  );
}
