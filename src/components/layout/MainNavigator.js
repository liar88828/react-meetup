import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigator.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigator() {
  const favoriteCtx=useContext(FavoritesContext);

    return (
      <header className={classes.header}>
      <div className={classes.logo}> React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new--meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
            Favorite pages
            <span className={classes.badge}>
            {favoriteCtx.totalFavorites}
            </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigator;
