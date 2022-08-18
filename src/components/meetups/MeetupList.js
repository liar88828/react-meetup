import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetUpItem";
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.is}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={MeetupItem.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
export default MeetupList;
