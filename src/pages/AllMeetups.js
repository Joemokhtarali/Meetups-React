import MeetupList from './MeetupList'


const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://ychef.files.bbci.co.uk/624x351/p07zy3y6.jpg',
      address: 'Zamalik, Downtown Cairo, Egypt',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://ychef.files.bbci.co.uk/624x351/p07zy3y6.jpg',
      address: 'Zamalik, Downtown Cairo, Egypt',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetups(props) {

    return (
        <div>
            
            <h1>All Meetups</h1>
            <ul>
                <MeetupList meetups={DUMMY_DATA}/>
            </ul>
        </div>
    )
}

export default AllMeetups