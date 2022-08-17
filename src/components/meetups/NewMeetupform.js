import Card from "../ui/Card";
import classes from "./Newmeetupform.module.css";
function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
        </div>
        <textarea id="description" required row="5"></textarea>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
