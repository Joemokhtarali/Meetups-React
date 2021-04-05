import { Link } from "react-router-dom";
import './MainNavigation.css'
function MainNavigation() {
  return (
    <header className='header'>
      <div className='logo'>Meetups Logo</div>
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
