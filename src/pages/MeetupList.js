import MeetupItem from "./MeetupItem";
import classes from "../style/MeetupList.module.css";

export default function MeetupList(props) {

    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup, index) => <MeetupItem key={index} {...meetup}/>)}
        </ul>
    )
}