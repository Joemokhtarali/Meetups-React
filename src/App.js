import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div className="App">
      {/* in case I want to add props to component wrap it within route */}
      <Switch>
        <Route exact path="/" component={AllMeetups} />
        <Route path="/Favorites" component={Favorites} />
        <Route path="/NewMeetup" component={NewMeetup} />
      </Switch>
    </div>
  );
}

export default App;
