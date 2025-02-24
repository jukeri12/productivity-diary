import Link from "next/link";

// TODO: Create a collected Type Definition file
export interface ActivityListItemProps {
  _id: string;
  title: string;
  description?: string;
  minutes: number;
  date: string;
}

export default function ActivityListItem(props: ActivityListItemProps) {
  return (
    <div className="activity-list-item">
      <div className="activity-list-item-header">
        <h3>Title: </h3>
        <h3 className="activity-title">{props.title}</h3>
      </div>
      <div className="activity-list-item-description">
        <h3>Description: </h3>
        <p>{props.description}</p>
      </div>
      <div className="activity-list-item-minutes">
        <h3>Minutes spent: </h3>
        <p className="activity-list-item-minutes-display">{props.minutes}</p>
      </div>
      <div className="activity-list-item-minutes">
        <h3>Date: </h3>
        <p className="activity-list-item-date">{props.date}</p>
      </div>
      <Link
        href={"/edit/" + props._id}
        className="activity-list-item-edit-button"
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: "3em",
            backgroundColor: "pink",
            borderRadius: "100%",
            padding: "0.1em",
          }}
        >
          edit
        </span>
      </Link>
    </div>
  );
}
