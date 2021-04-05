import MeetupItem from "./MeetupItem";
import classes from "../style/MeetupList.module.css";
import { useEffect, useState } from "react";

export default function MeetupList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-meetup-59fc3-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const updatedMeetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          updatedMeetups.push(meetup)
        }

        setIsLoading(false);
        setMeetups(updatedMeetups);
      });
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul className={classes.list}>
        {meetups.map((meetup, index) => (
          <MeetupItem key={index} {...meetup} />
        ))}
      </ul>
    );
  }
}
