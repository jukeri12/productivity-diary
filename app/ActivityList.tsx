import ActivityListItem, { ActivityListItemProps } from "./ActivityListItem";

interface ActivityListProps {
  items: ActivityListItemProps[];
}

export default function ActivityList(props: ActivityListProps) {
  return props.items.map((listItem) => {
    return (
      <ActivityListItem
        title={listItem.title}
        description={listItem.description}
        minutes={listItem.minutes}
        id={listItem.id}
        key={listItem.id}
      />
    );
  });
}
