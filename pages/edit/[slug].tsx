import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Edit() {
  const [activity, setActivity] = useState({
    title: "-",
    description: "-",
    minutes: 0,
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

  const handleSubmit = (id: number) => {
    const res = fetch("/api/activity/" + id.toString(), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    }).then((response) => {
      console.log(response.json());
    });

    // TODO: Gather body from fields and not the original data
    // TODO: Redirect user to activity list
  };

  return (
    <>
      <h1 className="main-title">Add or edit diary entry</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label className="activity-editor-field">
          Title
          <input
            name="title"
            type="text"
            className="activity-editor-input"
            defaultValue={activity?.title}
          ></input>
        </label>
        <label className="activity-editor-field">
          Description
          <textarea
            name="description"
            className="activity-editor-input"
            defaultValue={activity?.description}
          ></textarea>
        </label>
        <label className="activity-editor-field">
          Minutes spent
          <input
            name="minutes"
            type="number"
            className="activity-editor-input"
            defaultValue={activity?.minutes}
          ></input>
        </label>
        <div className="activity-editor-field">
          <button
            className="submit-button"
            onClick={handleSubmit}
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
