import './App.css';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';


function App() {
  return (
    <div className="App">
      <AllMeetups />
      <Favorites />
      <NewMeetup />
    </div>
  );
}

export default App;
