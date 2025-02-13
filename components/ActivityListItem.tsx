import Link from "next/link";

// TODO: Create a collected Type Definition file
export interface ActivityListItemProps {
  id: number;
  title: string;
  description?: string;
  minutes: number;
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
        <p>{props.minutes}</p>
      </div>
      <Link
        href={"/edit/" + props.id}
        className="activity-list-item-edit-button"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "46px", paddingTop: "25px", float: "right" }}
        >
          edit
        </span>
      </Link>
    </div>
  );
}
