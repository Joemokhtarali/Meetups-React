import { useContext } from 'react'
import classes from "../style/MeetupItem.module.css";
import Card from "../ui/Card";
import FavoriteContext from '../store/favorites-context'

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoriteContext)

  const itemIsFavorite =favoriteCtx.itemIsFavorite(props.id)

  function toggleFavoriteStatusHandler() {
    if(itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id)
    }else {
      favoriteCtx.addFavorite(props)
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove From Favorites': 'Add To Favorites'}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
