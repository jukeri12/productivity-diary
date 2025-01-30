// TODO: Create a collected Type Definition file
export interface ActivityListItemProps {
  id: number;
  title: string;
  description?: string;
  minutes: number;
}

export default function ActivityListItem(props: ActivityListItemProps) {
  return (
    <li className="activity-list-item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p className="activity-list-item-minutes">{props.minutes}</p>
      <button>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "46px", paddingTop: "25px", float: "right" }}
        >
          edit
        </span>
      </button>
    </li>
  );
}
