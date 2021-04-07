import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "./MeetupList";

function Favorites(props) {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>Favorites</h1>
      <MeetupList meetups={favoriteCtx.favorites}/>
    </section>
  );
}

export default Favorites;
