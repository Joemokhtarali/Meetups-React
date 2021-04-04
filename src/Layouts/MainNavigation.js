import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header>
      <div>Meetups Logo</div>
      <ul>
        <li>
          <Link to="/">Meetups</Link>
        </li>
        <li>
          <Link to="Favorites">Favorites</Link>
        </li>
        <li>
          <Link to="NewMeetup">New Meetup</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
