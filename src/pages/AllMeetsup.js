import { useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetup] = useState([]);

  fetch("https://react-9840a-default-rtdb.firebaseio.com/meetups.json"
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetup(data);
    });

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupPage;
