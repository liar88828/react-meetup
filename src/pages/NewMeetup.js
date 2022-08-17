import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupform";
  function NewMeetupPage() {
    const history = useNavigate();

    function addMeetupHandler(meetupData){
    fetch(
      "https://react-9840a-default-rtdb.firebaseio.com/meetups.json",
      {
        method:'POST',
        body:JSON.stringify(meetupData),
        headers:{
          'Content-Type':'application/json'
        }
      }

    ).then(() => {
      history('/');
  });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage; 
