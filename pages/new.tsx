import { ChangeEvent, useState } from "react";

export default function New() {
  const [activity, setActivity] = useState({
    title: "",
    description: "",
    minutes: 0,
    date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
  });

  const handleFieldChange = (e: ChangeEvent) => {
    const target = e.target.name;
    const value = e.target.value;

    setActivity({ ...activity, [target]: value });
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const res = fetch("/api/activity/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    }).then((response) => {
      console.log(response.json());
    });
  };

  return (
    <>
      <h1 className="main-title">Add or edit diary entry</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={handleSubmit}>
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
          <label className="activity-editor-field">
            Date
            <input
              name="date"
              type="date"
              className="activity-editor-input"
              defaultValue={activity.date}
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
