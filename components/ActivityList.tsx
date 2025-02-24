import ActivityListItem, { ActivityListItemProps } from "./ActivityListItem";

interface ActivityListProps {
  items: ActivityListItemProps[];
}

export default function ActivityList(props: ActivityListProps) {
  return props.items.map((listItem) => {
    return (
      <>
        <ActivityListItem
          title={listItem.title}
          description={listItem.description}
          minutes={listItem.minutes}
          date={listItem.date}
          _id={listItem._id}
          key={listItem._id}
        />
      </>
    );
  });
}
