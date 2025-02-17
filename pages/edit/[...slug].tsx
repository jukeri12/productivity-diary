import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

export default function Edit() {
  const [activity, setActivity] = useState({
    _id: "",
    title: "",
    description: "",
    minutes: 0,
  });
  const router = useRouter();

  useEffect(() => {
    if (router.query.slug) {
      const idValue = router.query.slug[0];
      fetchActivity(idValue);
    }
  }, [router.query.slug]);

  const handleFieldChange = (e: ChangeEvent) => {
    const target = e.target.name;
    const value = e.target.value;

    setActivity({ ...activity, [target]: value });
  };

  const fetchActivity = async (_id: string) => {
    const res = await fetch("/api/activity/" + _id.toString());

    const data = await res.json();
    setActivity(data.data[0]);
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const res = fetch("/api/activity/" + activity._id, {
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
        <form onSubmit={handleSubmit} id={activity._id}>
          <label className="activity-editor-field">
            Title
            <input
              name="title"
              type="text"
              className="activity-editor-input"
              defaultValue={activity.title}
              onChange={handleFieldChange}
            ></input>
          </label>
          <label className="activity-editor-field">
            Description
            <textarea
              name="description"
              className="activity-editor-input"
              defaultValue={activity.description}
              onChange={handleFieldChange}
            ></textarea>
          </label>
          <label className="activity-editor-field">
            Minutes spent
            <input
              name="minutes"
              type="number"
              className="activity-editor-input"
              defaultValue={activity.minutes}
              onChange={handleFieldChange}
            ></input>
          </label>
          <div className="activity-editor-field">
            <button className="submit-button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
