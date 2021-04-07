import MeetupList from './MeetupList'

function AllMeetups(props) {

    return (
        <div>
            
            <h1>All Meetups</h1>
            <ul>
                <MeetupList meetups={props}/>
            </ul>
        </div>
    )
}

export default AllMeetups